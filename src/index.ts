import { Hono } from "hono";

import { dataMotobikes } from "../data/mobobikes";

const app = new Hono();

// | `/motobikes`     | `GET`    | `Get all motobikes`      |
// | `/motobikes/:id` | `GET`    | `Get motobikes by id`    |
// | `/motobikes`     | `POST`   | `add new motobike`       |
// | `/motobikes`     | `DELETE` | `Delete all motobikes`   |
// | `/motobikes/:id` | `DELETE` | `Delete motobikes by id` |
// | `/motobikes/:id` | `PUT`    | `Update motobikes by id` |

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/motobikes", (c) => {
  return c.json(dataMotobikes);
});

app.get("/motobikes/:id", (c) => {
  const id = Number(c.req.param("id"));
  const motobikes = dataMotobikes.find((motobikes) => motobikes.id == id);

  if (!motobikes) {
    c.status(404);
    return c.json({ message: "Motobikes Not Found" });
  }

  return c.json(motobikes);
});

export default app;
