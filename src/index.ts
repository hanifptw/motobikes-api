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

  motobikes = [...motobikes, newMotobike];

  return c.json({ motobike: newMotobike });
});

app.delete("/motobikes", (c) => {
  motobikes = [];

  return c.json({ motobikes });
});

app.post("/motobikes/seeds", (c) => {
  motobikes = dataMotobikes;

  return c.json({ motobikes });
});

app.delete("/motobikes/:id", (c) => {
  const id = Number(c.req.param("id"));
  const motobike = motobikes.find((motobikes) => motobikes.id == id);

  if (!motobike) {
    c.status(404);
    return c.json({ message: "Motobikes Not Found" });
  }

  motobikes = motobikes.filter((motobikes) => motobikes.id !== id);

  return c.json(`motobikes number ${id} id deleted`);
});

app.put("/motobikes/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const motobike = motobikes.find((motobikes) => motobikes.id == id);

  if (!motobike) {
    c.status(404);
    return c.json({ message: "Motobikes Not Found" });
  }

  const body = await c.req.json();

  const newMotobike = {
    id: motobike.id,
    name: body.name || motobike.id,
    merk: body.merk || motobike.merk,
    cc: body.cc || motobike.cc,
    type: body.type || motobike.type,
    transmission: body.transmission || motobike.transmission,
    price: body.price || motobike.price,
  };

  const updatedMotobikes = motobikes.map((motobike) => {
    if (id == motobike.id) {
      return newMotobike;
    } else {
      return motobike;
    }
  });

  motobikes = updatedMotobikes;

  return c.json({
    mesage: `updated motobike with id ${id}`,
    motobikes: updatedMotobikes,
  });
});

export default app;
