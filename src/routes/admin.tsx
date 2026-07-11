import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getSession } from "../lib/session";
import AdminApp from "../components/admin/AdminApp";

const checkSession = createServerFn({ method: "GET" })
  .handler(async () => {
    const { getRequest } = await import("@tanstack/react-start/server");
    const req = getRequest();
    const loggedIn = req ? !!(await getSession(req)) : false;
    return { loggedIn };
  });

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
  loader: async () => {
    return await checkSession();
  },
  component: AdminRoute,
});

function AdminRoute() {
  const { loggedIn } = Route.useLoaderData();
  return <AdminApp loggedIn={loggedIn} />;
}

