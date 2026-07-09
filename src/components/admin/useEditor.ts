/**
 * useEditor — shared hook for all CMS editor components.
 *
 * Handles:
 *  - fetching content from /api/admin/content/:file
 *  - tracking dirty state
 *  - saving back to /api/admin/content/:file (PUT → GitHub commit)
 */
import { useState, useEffect, useCallback, useRef } from "react";
import { fetchContent, saveContent } from "./api-client";

type SaveStatus = "idle" | "saving" | "saved" | "error";

interface UseEditorResult<T> {
  data: T | null;
  loading: boolean;
  loadError: string | null;
  dirty: boolean;
  saveStatus: SaveStatus;
  saveError: string | null;
  setData: (updater: (prev: T) => T) => void;
  save: () => Promise<void>;
}

export function useEditor<T>(fileKey: string): UseEditorResult<T> {
  const [data, setDataRaw] = useState<T | null>(null);
  const [sha, setSha] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [dirty, setDirty] = useState(false);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [saveError, setSaveError] = useState<string | null>(null);

  // Keep a ref to latest sha so save() always uses the freshest value
  const shaRef = useRef(sha);
  useEffect(() => { shaRef.current = sha; }, [sha]);

  // Load data on mount
  useEffect(() => {
    setLoading(true);
    fetchContent(fileKey)
      .then(({ data: d, sha: s }) => {
        setDataRaw(d as T);
        setSha(s);
        setDirty(false);
      })
      .catch((err: unknown) => {
        const msg = err instanceof Error ? err.message : String(err);
        setLoadError(msg);
      })
      .finally(() => setLoading(false));
  }, [fileKey]);

  const setData = useCallback((updater: (prev: T) => T) => {
    setDataRaw((prev) => {
      if (prev === null) return prev;
      const next = updater(prev);
      setDirty(true);
      return next;
    });
  }, []);

  const save = useCallback(async () => {
    if (!data) return;
    setSaveStatus("saving");
    setSaveError(null);
    try {
      await saveContent(fileKey, data, shaRef.current);
      // Reload to get the new SHA from GitHub
      const { sha: newSha } = await fetchContent(fileKey);
      setSha(newSha);
      shaRef.current = newSha;
      setDirty(false);
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 3000);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setSaveError(msg);
      setSaveStatus("error");
    }
  }, [data, fileKey]);

  return { data, loading, loadError, dirty, saveStatus, saveError, setData, save };
}
