import { Hono } from "hono";

type Bindings = {
  DB: D1Database;
};

const users = new Hono<{ Bindings: Bindings }>();

users.get("/", async (c) => {
  try {
    let { results } = await c.env.DB.prepare("SELECT * FROM users").all();
    return c.json(results);
  } catch (e) {
    return c.json({ err: e }, 500);
  }
});

users.get("/mock", (c) => {
  try {
    let results = [
      {
        id: 1,
        name: "test",
        email: "",
      },
      {
        id: 2,
        name: "test2",
        email: "",
      },
    ];
    return c.json(results);
  } catch (e) {
    return c.json({ err: e }, 500);
  }
});

export default users;
