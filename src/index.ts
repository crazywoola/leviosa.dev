import { Hono } from "hono";
import { serveStatic } from "hono/cloudflare-workers";
import users from "./users";
const app = new Hono();

app.use("/*", serveStatic({ root: "./" }));

app.route("/users", users);

export default app;
