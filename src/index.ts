import { Hono } from "hono";

import { dataMotorbikes } from "../data/motorbikes";
import { prisma } from "./lib/db";
import { dataBrands } from "../data/brands";

const app = new Hono();

// | `/motorbikes`     | `GET`    | `Get all motorbikes`      |
// | `/motorbikes/:id` | `GET`    | `Get motorbikes by id`    |
// | `/motorbikes`     | `POST`   | `add new motorbike`       |
// | `/motorbikes`     | `DELETE` | `Delete all motorbikes`   |
// | `/motorbikes/:id` | `DELETE` | `Delete motorbikes by id` |
// | `/motorbikes/:id` | `PUT`    | `Update motorbikes by id` |
// | `/brands`     | `GET`    | `Get all brands`      |
// | `/brands/:id` | `GET`    | `Get brands by id`    |
// | `/brands`     | `POST`   | `add new motorbike`       |
// | `/brands`     | `DELETE` | `Delete all brands`   |
// | `/brands/:id` | `DELETE` | `Delete brands by id` |
// | `/brands/:id` | `PUT`    | `Update brands by id` |

app.get("/", (c) => {
  return c.text("Database Motorbikes!");
});

app.get("/motorbikes", async (c) => {
  const motorbikes = await prisma.motorbike.findMany();
  return c.json(motorbikes);
});

app.get("/motorbikes/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const motorbike = await prisma.motorbike.findUnique({ where: { id } });

  if (!motorbike) {
    c.status(404);
    return c.json({ message: "Motorbikes Not Found" });
  }

  return c.json(motorbike);
});

app.post("/motorbikes", async (c) => {
  const body = await c.req.json();

  const motorbike = await prisma.motorbike.create({
    data: {
      name: body.name,

      cc: body.cc,
      type: body.type,
      transmission: body.transmission,
      price: body.price,

      brandId: body.brandId,
    },
  });

  return c.json({ motorbike });
});

app.delete("/motorbikes", async (c) => {
  const result = await prisma.motorbike.deleteMany();

  return c.json({ messege: "All motorbikes have been removed", result });
});

app.post("/motorbikes/seed", async (c) => {
  const motorbikes = await prisma.motorbike.createMany({
    data: dataMotorbikes,
  });

  return c.json({ motorbikes });
});

app.delete("/motorbikes/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const deletedMotorbike = await prisma.motorbike.delete({ where: { id } });

  return c.json({
    messege: `Deleted motorbike with id ${id}`,
    deletedMotorbike,
  });
});

app.put("/motorbikes/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();

  const updatedMotorbike = await prisma.motorbike.update({
    where: { id },
    data: {
      name: body.name,
      cc: body.cc,
      type: body.type,
      transmission: body.transmission,
      price: body.price,
      brandId: body.brandId,
    },
  });

  return c.json({
    mesage: `updated motorbike with id ${id}`,
    motorbikes: updatedMotorbike,
  });
});

app.post("/brands/seed", async (c) => {
  const brands = await prisma.brand.createMany({
    data: dataBrands,
  });

  return c.json({ brands });
});

app.get("/brands", async (c) => {
  const brands = await prisma.brand.findMany();
  return c.json(brands);
});

app.get("/brands/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const brand = await prisma.brand.findUnique({ where: { id } });

  if (!brand) {
    c.status(404);
    return c.json({ message: "brand Not Found" });
  }

  return c.json(brand);
});

app.post("/brands", async (c) => {
  const body = await c.req.json();

  const brand = await prisma.brand.create({
    data: {
      name: body.name,
      founder: body.founder,
      foundedAt: body.foundedAt,
      headqurter: body.headqurter,
    },
  });

  return c.json({ brand });
});

app.delete("/brands", async (c) => {
  const result = await prisma.brand.deleteMany();

  return c.json({ messege: "All brands have been removed", result });
});

app.delete("/brands/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const deletedBrand = await prisma.brand.delete({ where: { id } });

  return c.json({
    messege: `Deleted brand with id ${id}`,
    deletedBrand,
  });
});

app.put("/brands/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();

  const updatedBrand = await prisma.brand.update({
    where: { id },
    data: {
      name: body.name,
      founder: body.founder,
      foundedAt: body.foundedAt,
      headqurter: body.headqurter,
    },
  });

  return c.json({
    mesage: `updated motorbike with id ${id}`,
    brands: updatedBrand,
  });
});

console.log({ messege: "motorbike is running" });

export default app;
