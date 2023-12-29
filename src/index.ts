import { Hono } from "hono";

type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();
app.get("/", (c) => c.text("Hello Hono!"));
app.get("/about", (c) => c.text("About Hono!"));
app.get("/users", async (c) => {
  try {
    let { results } = await c.env.DB.prepare("SELECT * FROM users").all()
    return c.json(results)
  } catch (e) {
    return c.json({err: e}, 500)
  }
});

export default app;
