import { Hono } from "hono";

import { dataMotorbikes } from "../data/motorbikes";

let motorbikes = dataMotorbikes;

const app = new Hono();

// | `/motorbikes`     | `GET`    | `Get all motorbikes`      |
// | `/motorbikes/:id` | `GET`    | `Get motorbikes by id`    |
// | `/motorbikes`     | `POST`   | `add new motorbike`       |
// | `/motorbikes`     | `DELETE` | `Delete all motorbikes`   |
// | `/motorbikes/:id` | `DELETE` | `Delete motorbikes by id` |
// | `/motorbikes/:id` | `PUT`    | `Update motorbikes by id` |

app.get("/", (c) => {
  return c.text("Database Motorbikes!");
});

app.get("/motorbikes", (c) => {
  return c.json(motorbikes);
});

app.get("/motorbikes/:id", (c) => {
  const id = Number(c.req.param("id"));
  const motorbike = motorbikes.find((motorbikes) => motorbikes.id == id);

  if (!motorbike) {
    c.status(404);
    return c.json({ message: "Motorbikes Not Found" });
  }

  return c.json(motorbike);
});

app.post("/motorbikes", async (c) => {
  const body = await c.req.json();

  const nextId = motorbikes[motorbikes.length - 1].id + 1;

  const newMotorbike = {
    id: nextId,
    name: body.name,
  };

  motorbikes = [...motorbikes, newMotorbike];

  return c.json({ motorbike: newMotorbike });
});

app.delete("/motorbikes", (c) => {
  motorbikes = [];

  return c.json({ motorbikes });
});

app.post("/motorbikes/seeds", (c) => {
  motorbikes = dataMotorbikes;

  return c.json({ motorbikes });
});

app.delete("/motorbikes/:id", (c) => {
  const id = Number(c.req.param("id"));
  const motorbike = motorbikes.find((motorbikes) => motorbikes.id == id);

  if (!motorbike) {
    c.status(404);
    return c.json({ message: "Motorbikes Not Found" });
  }

  motorbikes = motorbikes.filter((motorbikes) => motorbikes.id !== id);

  return c.json(`motorbikes number ${id} id deleted`);
});

app.put("/motorbikes/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const motorbike = motorbikes.find((motorbikes) => motorbikes.id == id);

  if (!motorbike) {
    c.status(404);
    return c.json({ message: "Motorbike Not Found" });
  }

  const body = await c.req.json();

  const newMotorbike = {
    id: motorbike.id,
    name: body.name || motorbike.id,
    merk: body.merk || motorbike.merk,
    cc: body.cc || motorbike.cc,
    type: body.type || motorbike.type,
    transmission: body.transmission || motorbike.transmission,
    price: body.price || motorbike.price,
  };

  const updatedMotorbikes = motorbikes.map((motorbike) => {
    if (id == motorbike.id) {
      return newMotorbike;
    } else {
      return motorbike;
    }
  });

  motorbikes = updatedMotorbikes;

  return c.json({
    mesage: `updated motorbike with id ${id}`,
    motorbikes: newMotorbike,
  });
});

export default app;
