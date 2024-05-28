import { Hono } from "hono";

import { dataMotorbikes } from "../data/motorbikes";
import { prisma } from "./lib/db";

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

app.get("/motorbikes", async (c) => {
  const motorbikes = await prisma.motobike.findMany();
  return c.json(motorbikes);
});

app.get("/motorbikes/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const motorbike = await prisma.motobike.findUnique({ where: { id } });

  if (!motorbike) {
    c.status(404);
    return c.json({ message: "Motorbikes Not Found" });
  }

  return c.json(motorbike);
});

app.post("/motorbikes", async (c) => {
  const body = await c.req.json();

  const motorbikeData = {
    name: body.name,
  };

  const motorbike = await prisma.motobike.create({
    data: motorbikeData,
  });

  return c.json({ motorbike });
});

app.delete("/motorbikes", async (c) => {
  const result = await prisma.motobike.deleteMany();

  return c.json({ messege: "All motorbikes have been removed", result });
});

// app.post("/motorbikes/seeds", (c) => {
//   motorbikes = dataMotorbikes;

//   return c.json({ motorbikes });
// });

app.delete("/motorbikes/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const deletedMotorbike = await prisma.motobike.delete({ where: { id } });

  return c.json({
    messege: `Deleted motorbike with id ${id}`,
    deletedMotorbike,
  });
});

app.put("/motorbikes/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();

  const motorbikeData = {
    name: body.name,
  };

  const updatedMotorbike = await prisma.motobike.update({
    where: { id },
    data: motorbikeData,
  });

  return c.json({
    mesage: `updated motorbike with id ${id}`,
    motorbikes: updatedMotorbike,
  });
});

console.log("motorbike is running");

export default app;
