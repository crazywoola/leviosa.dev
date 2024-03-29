import { Hono } from "hono";
import { serveStatic } from "hono/cloudflare-workers";
import users from "./users";
import icons from "./icons";

const app = new Hono();

// Serve static files
app.use("/media/*", serveStatic({ root: "./" }));
app.use("/css/*", serveStatic({ root: "./" }));
app.use("/js/*", serveStatic({ root: "./" }));
app.get("/favicon.png", serveStatic({ path: "./favicon.png" }));
app.get("/auth_config.json", serveStatic({ path: "./auth_config.json" }));

app.get("/", serveStatic({ path: "./index.html" }));

app.route("/users", users);
app.route("/icons", icons);

export default app;
