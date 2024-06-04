import { type Motorbike } from "@prisma/client";

export type DataMotorbikes = Omit<Motorbike, "createdAt" | "updatedAt">;

export const dataMotorbikes: DataMotorbikes[] = [
  {
    id: 1,
    name: "Honda Goldwing",
    brandId: 1,
    type: "Touring",
    cc: 1833,
    transmission: "Automatic",
    price: 1052000000,
  },
  {
    id: 2,
    name: "Honda CBR1000RR-R",
    brandId: 1,
    type: "Super Sport",
    cc: 1000,
    transmission: "Manual",
    price: 1077000000,
  },
  {
    id: 3,
    name: "Honda CRF1100L Africa Twin",
    brandId: 1,
    type: "Adventure Touring",
    cc: 1084,
    transmission: "Manual",
    price: 663000000,
  },
  {
    id: 4,
    name: "Honda CBR600RR",
    brandId: 1,
    type: "Super Sport",
    cc: 599,
    transmission: "Manual",
    price: 508000000,
  },
  {
    id: 5,
    name: "Honda XL750 Transalp",
    brandId: 1,
    type: "Adventure Touring",
    cc: 755,
    transmission: "Manual",
    price: 330000000,
  },
  {
    id: 6,
    name: "Honda CB650R",
    brandId: 1,
    type: "Sport",
    cc: 649,
    transmission: "Manual",
    price: 291000000,
  },
];
