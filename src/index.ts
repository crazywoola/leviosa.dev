import { Hono } from "hono";
import { serveStatic } from "hono/cloudflare-workers";
import users from "./users";
const app = new Hono();

// Serve static files
app.use('/media/*', serveStatic({ root: './' }))
app.use('/css/*', serveStatic({ root: './' }))
app.use('/js/*', serveStatic({ root: './' }))
app.get('/favicon.ico', serveStatic({ path: './favicon.png' }))

app.get('/',serveStatic({ path: './index.html' }))
app.get('/about',serveStatic({ path: './about.html' }))
app.route("/users", users);

export default app;
