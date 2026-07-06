import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

/**
 * Renders a client-side router link for internal paths (starting with "/") and
 * a plain external anchor (new tab) for anything else. Lets CMS-authored links
 * point at either an on-site page or an external resource.
 */
export function SmartLink({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: ReactNode;
}) {
  const isInternal = to.startsWith("/");

  if (isInternal) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={to} target="_blank" rel="noreferrer noopener" className={className}>
      {children}
    </a>
  );
}
