import { useState, useEffect, useCallback } from "react";
import { fetchMe, type GitHubUser } from "./api-client";
import { LoginScreen } from "./LoginScreen";
import { CMSShell } from "./CMSShell";

interface AdminAppProps {
  loggedIn: boolean;
}

export default function AdminApp({ loggedIn }: AdminAppProps) {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [userLoading, setUserLoading] = useState(loggedIn);

  const loadUser = useCallback(async () => {
    try {
      const me = await fetchMe();
      setUser(me);
    } catch {
      // session may have expired
      window.location.href = "/api/admin/auth/logout";
    } finally {
      setUserLoading(false);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) loadUser();
  }, [loggedIn, loadUser]);

  if (!loggedIn) return <LoginScreen />;
  if (userLoading) return <AdminLoader />;
  if (!user) return <LoginScreen />;

  return <CMSShell user={user} />;
}

function AdminLoader() {
  return (
    <div style={styles.loaderWrap}>
      <div style={styles.spinner} />
      <p style={styles.loaderText}>Loading CMS…</p>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  loaderWrap: {
    minHeight: "100vh",
    background: "#0f172a",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  spinner: {
    width: 40,
    height: 40,
    border: "3px solid #1e293b",
    borderTopColor: "#38bdf8",
    borderRadius: "50%",
    animation: "spin 0.7s linear infinite",
  },
  loaderText: {
    color: "#64748b",
    fontSize: 14,
    fontFamily: "system-ui, sans-serif",
  },
};
