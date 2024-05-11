import { Hono } from "hono";

import { dataMotobikes } from "../data/mobobikes";

let motobikes = dataMotobikes;

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
  return c.json(motobikes);
});

app.get("/motobikes/:id", (c) => {
  const id = Number(c.req.param("id"));
  const motobike = motobikes.find((motobikes) => motobikes.id == id);

  if (!motobike) {
    c.status(404);
    return c.json({ message: "Motobikes Not Found" });
  }

  return c.json(motobike);
});

app.post("/motobikes", async (c) => {
  const body = await c.req.json();

  const nextId = motobikes[motobikes.length - 1].id + 1;

  const newMotobike = {
    id: nextId,
    name: body.name,
  };

  motobikes  = [...motobikes, newMotobike];


  return c.json({ motobike : newMotobike });
});

export default app;
