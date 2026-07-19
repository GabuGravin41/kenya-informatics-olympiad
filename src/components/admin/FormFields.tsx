/**
 * Shared form field components used by all CMS editors.
 * Pure inline-styled React — no Tailwind, no external deps.
 */
import { type ReactNode, useState, useRef, type DragEvent, type ChangeEvent } from "react";

// ─── Base Field Wrapper ───────────────────────────────────────────────────────

interface FieldProps {
  label: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}

export function Field({ label, hint, required, children }: FieldProps) {
  return (
    <div style={s.field}>
      <label style={s.label}>
        {label}
        {required && <span style={s.required}> *</span>}
        {hint && <span style={s.hint}> — {hint}</span>}
      </label>
      {children}
    </div>
  );
}

// ─── String Input ─────────────────────────────────────────────────────────────

interface StringFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
  required?: boolean;
  placeholder?: string;
  mono?: boolean;
}

export function StringField({ label, value, onChange, hint, required, placeholder, mono }: StringFieldProps) {
  return (
    <Field label={label} hint={hint} required={required}>
      <input
        type="text"
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ ...s.input, fontFamily: mono ? "JetBrains Mono, monospace" : undefined }}
      />
    </Field>
  );
}

// ─── Textarea ─────────────────────────────────────────────────────────────────

interface TextareaFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
}

export function TextareaField({ label, value, onChange, hint, required, rows = 4, placeholder }: TextareaFieldProps) {
  return (
    <Field label={label} hint={hint} required={required}>
      <textarea
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        placeholder={placeholder}
        style={s.textarea}
      />
    </Field>
  );
}

// ─── Boolean Toggle ───────────────────────────────────────────────────────────

interface BoolFieldProps {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
  hint?: string;
}

export function BoolField({ label, value, onChange, hint }: BoolFieldProps) {
  return (
    <Field label={label} hint={hint}>
      <button
        type="button"
        onClick={() => onChange(!value)}
        style={{ ...s.toggle, ...(value ? s.toggleOn : {}) }}
        aria-pressed={value}
      >
        <span style={{ ...s.toggleThumb, ...(value ? s.toggleThumbOn : {}) }} />
        <span style={s.toggleLabel}>{value ? "Yes" : "No"}</span>
      </button>
    </Field>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

export function SectionHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div style={s.sectionHeader}>
      <h2 style={s.sectionTitle}>{title}</h2>
      {description && <p style={s.sectionDesc}>{description}</p>}
      <div style={s.sectionDivider} />
    </div>
  );
}

// ─── Card wrapper for groups ──────────────────────────────────────────────────

export function Card({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return <div style={{ ...s.card, ...style }}>{children}</div>;
}

// ─── List item controls ───────────────────────────────────────────────────────

export function ListControls({
  index,
  total,
  onMoveUp,
  onMoveDown,
  onDelete,
}: {
  index: number;
  total: number;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDelete: () => void;
}) {
  return (
    <div style={s.listControls}>
      <button type="button" onClick={onMoveUp} disabled={index === 0} style={s.ctrlBtn} title="Move up">↑</button>
      <button type="button" onClick={onMoveDown} disabled={index === total - 1} style={s.ctrlBtn} title="Move down">↓</button>
      <button type="button" onClick={onDelete} style={{ ...s.ctrlBtn, ...s.deleteBtn }} title="Delete">✕</button>
    </div>
  );
}

// ─── Add item button ──────────────────────────────────────────────────────────

export function AddButton({ onClick, label = "Add item" }: { onClick: () => void; label?: string }) {
  return (
    <button type="button" onClick={onClick} style={s.addBtn}>
      + {label}
    </button>
  );
}

// ─── Save status bar ──────────────────────────────────────────────────────────

type SaveStatus = "idle" | "saving" | "saved" | "error";

export function SaveBar({
  status,
  error,
  onSave,
  dirty,
}: {
  status: SaveStatus;
  error?: string;
  onSave: () => void;
  dirty: boolean;
}) {
  return (
    <div style={s.saveBar}>
      {status === "saving" && <span style={s.savingText}>Saving to GitHub…</span>}
      {status === "saved" && <span style={s.savedText}>✓ Saved to GitHub</span>}
      {status === "error" && <span style={s.errorText}>✕ {error}</span>}
      {status === "idle" && dirty && <span style={s.dirtyText}>Unsaved changes</span>}
      {status === "idle" && !dirty && <span style={s.okText}>No unsaved changes</span>}
      <button
        type="button"
        onClick={onSave}
        disabled={status === "saving" || !dirty}
        style={{ ...s.saveBtn, opacity: status === "saving" || !dirty ? 0.5 : 1 }}
      >
        {status === "saving" ? "Saving…" : "Save & Publish"}
      </button>
    </div>
  );
}

// ─── Drag-and-Drop Image Uploader ─────────────────────────────────────────────

interface ImageUploadFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
}

export function ImageUploadField({ label, value, onChange, hint }: ImageUploadFieldProps) {
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    setError(null);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      await uploadFile(files[0]);
    }
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const files = e.target.files;
    if (files && files.length > 0) {
      await uploadFile(files[0]);
    }
  };

  const uploadFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please drop/select an image file.");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({ error: `Upload failed (status: ${res.status})` }));
        throw new Error(body.error || "Upload failed");
      }

      const data = await res.json() as { url: string };
      onChange(data.url);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setUploading(false);
    }
  };

  const handleClear = () => {
    onChange("");
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <Field label={label} hint={hint}>
      <div style={s.uploadContainer}>
        {/* Drop zone / Upload box */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          style={{
            ...s.dropZone,
            ...(dragOver ? s.dropZoneActive : {}),
            ...(uploading ? s.dropZoneUploading : {}),
          }}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: "none" }}
          />

          {uploading ? (
            <div style={s.uploadStatus}>
              <div style={s.miniSpinner} />
              <span style={s.uploadStatusText}>Uploading to GitHub…</span>
            </div>
          ) : value ? (
            <div style={s.previewArea}>
              <div style={s.thumbnailContainer}>
                <img src={value} alt="Preview" style={s.thumbnail} />
              </div>
              <div style={s.previewInfo}>
                <span style={s.filenameText}>{value.split("/").pop()}</span>
                <span style={s.clickToReplaceText}>Click or drag another image to replace</span>
              </div>
            </div>
          ) : (
            <div style={s.promptArea}>
              <span style={s.uploadIcon}>📷</span>
              <span style={s.promptText}>Drag & drop an image here, or click to browse</span>
            </div>
          )}
        </div>

        {/* Action / Error Area */}
        {(value || error) && (
          <div style={s.uploadMetaRow}>
            {error && <span style={s.uploadErrorText}>✕ {error}</span>}
            {value && !error && (
              <button type="button" onClick={handleClear} style={s.clearBtn}>
                Remove Image
              </button>
            )}
          </div>
        )}
      </div>
    </Field>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const s: Record<string, React.CSSProperties> = {
  field: { display: "flex", flexDirection: "column", gap: 6 },
  label: { fontSize: 12, fontWeight: 600, color: "#94a3b8", letterSpacing: "0.04em", textTransform: "uppercase" },
  required: { color: "#f87171" },
  hint: { color: "#475569", fontWeight: 400, textTransform: "none", letterSpacing: 0 },
  input: {
    background: "#0f172a",
    border: "1px solid rgba(51,65,85,0.8)",
    borderRadius: 6,
    padding: "10px 14px",
    color: "#e2e8f0",
    fontSize: 14,
    outline: "none",
    width: "100%",
    fontFamily: "'Space Grotesk', system-ui, sans-serif",
    transition: "border-color 0.15s",
  },
  textarea: {
    background: "#0f172a",
    border: "1px solid rgba(51,65,85,0.8)",
    borderRadius: 6,
    padding: "10px 14px",
    color: "#e2e8f0",
    fontSize: 14,
    outline: "none",
    width: "100%",
    resize: "vertical" as const,
    fontFamily: "'Space Grotesk', system-ui, sans-serif",
    lineHeight: 1.6,
    transition: "border-color 0.15s",
  },
  toggle: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "#1e293b",
    border: "1px solid rgba(51,65,85,0.8)",
    borderRadius: 20,
    padding: "4px 12px 4px 4px",
    cursor: "pointer",
    transition: "background 0.2s, border-color 0.2s",
    width: "fit-content",
  },
  toggleOn: {
    background: "rgba(56,189,248,0.15)",
    borderColor: "rgba(56,189,248,0.4)",
  },
  toggleThumb: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    background: "#475569",
    transition: "background 0.2s",
  },
  toggleThumbOn: { background: "#38bdf8" },
  toggleLabel: { fontSize: 13, color: "#94a3b8", fontWeight: 500 },
  sectionHeader: { marginBottom: 28 },
  sectionTitle: { fontSize: 18, fontWeight: 700, color: "#f1f5f9", margin: "0 0 6px" },
  sectionDesc: { fontSize: 13, color: "#64748b", margin: "0 0 16px" },
  sectionDivider: { height: 1, background: "rgba(51,65,85,0.4)" },
  card: {
    background: "#1a2640",
    border: "1px solid rgba(51,65,85,0.5)",
    borderRadius: 10,
    padding: "20px 24px",
    display: "flex",
    flexDirection: "column" as const,
    gap: 16,
  },
  listControls: { display: "flex", gap: 4, alignItems: "center" },
  ctrlBtn: {
    background: "rgba(51,65,85,0.3)",
    border: "1px solid rgba(51,65,85,0.5)",
    borderRadius: 4,
    color: "#94a3b8",
    fontSize: 12,
    padding: "3px 8px",
    cursor: "pointer",
  },
  deleteBtn: {
    color: "#f87171",
    background: "rgba(239,68,68,0.08)",
    borderColor: "rgba(239,68,68,0.2)",
    marginLeft: 4,
  },
  addBtn: {
    background: "rgba(56,189,248,0.08)",
    border: "1px dashed rgba(56,189,248,0.3)",
    borderRadius: 8,
    color: "#38bdf8",
    padding: "12px 20px",
    fontSize: 13,
    cursor: "pointer",
    width: "100%",
    fontFamily: "'Space Grotesk', system-ui, sans-serif",
    fontWeight: 500,
    transition: "background 0.15s",
  },
  saveBar: {
    position: "sticky",
    bottom: 0,
    background: "rgba(12,20,40,0.95)",
    backdropFilter: "blur(8px)",
    borderTop: "1px solid rgba(51,65,85,0.4)",
    padding: "14px 0 0",
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginTop: 32,
  },
  saveBtn: {
    marginLeft: "auto",
    background: "#38bdf8",
    color: "#0f172a",
    border: "none",
    borderRadius: 6,
    padding: "10px 24px",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "'Space Grotesk', system-ui, sans-serif",
    transition: "opacity 0.15s",
  },
  savingText: { fontSize: 13, color: "#94a3b8" },
  savedText: { fontSize: 13, color: "#4ade80" },
  errorText: { fontSize: 13, color: "#f87171" },
  dirtyText: { fontSize: 13, color: "#fbbf24" },
  okText: { fontSize: 13, color: "#475569" },
  uploadContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  dropZone: {
    border: "2px dashed rgba(51,65,85,0.8)",
    borderRadius: 8,
    background: "#0f172a",
    padding: "16px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "border-color 0.2s, background 0.2s",
    minHeight: 80,
  },
  dropZoneActive: {
    borderColor: "#38bdf8",
    background: "rgba(56,189,248,0.04)",
  },
  dropZoneUploading: {
    borderColor: "rgba(56,189,248,0.4)",
    cursor: "wait",
  },
  uploadStatus: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  miniSpinner: {
    width: 16,
    height: 16,
    border: "2px solid #1e293b",
    borderTopColor: "#38bdf8",
    borderRadius: "50%",
    animation: "spin 0.7s linear infinite",
  },
  uploadStatusText: {
    fontSize: 13,
    color: "#94a3b8",
  },
  previewArea: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    width: "100%",
  },
  thumbnailContainer: {
    width: 48,
    height: 48,
    borderRadius: 6,
    overflow: "hidden",
    background: "#1e293b",
    flexShrink: 0,
    border: "1px solid rgba(255,255,255,0.05)",
    backgroundImage: "linear-gradient(45deg, #182030 25%, transparent 25%), linear-gradient(-45deg, #182030 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #182030 75%), linear-gradient(-45deg, transparent 75%, #182030 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 0 4px, 4px -4px, -4px 0px"
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  previewInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    minWidth: 0,
    flex: 1,
  },
  filenameText: {
    fontSize: 13,
    fontWeight: 600,
    color: "#e2e8f0",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  clickToReplaceText: {
    fontSize: 11,
    color: "#475569",
  },
  promptArea: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  uploadIcon: {
    fontSize: 18,
  },
  promptText: {
    fontSize: 13,
    color: "#64748b",
  },
  uploadMetaRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    padding: "0 4px",
  },
  uploadErrorText: {
    fontSize: 12,
    color: "#f87171",
  },
  clearBtn: {
    background: "none",
    border: "none",
    color: "#f87171",
    fontSize: 12,
    cursor: "pointer",
    padding: 0,
    fontWeight: 600,
    textDecoration: "underline",
    marginLeft: "auto",
  },
};
