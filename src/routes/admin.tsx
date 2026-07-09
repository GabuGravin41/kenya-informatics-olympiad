import { createFileRoute } from "@tanstack/react-router";
import { getSession } from "../lib/session";
import AdminApp from "../components/admin/AdminApp";

/**
 * /admin
 *
 * Server-renders whether the user is logged in (via cookie).
 * Passes that info to the client component.
 */
export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "KIO Admin" },
      { name: "robots", content: "noindex" },
    ],
  }),
  loader: async ({ context }) => {
    // context.request is available in TanStack Start server loaders
    const req = (context as { request?: Request }).request;
    const loggedIn = req ? !!(await getSession(req)) : false;
    return { loggedIn };
  },
  component: AdminRoute,
});

function AdminRoute() {
  const { loggedIn } = Route.useLoaderData();
  return <AdminApp loggedIn={loggedIn} />;
}
