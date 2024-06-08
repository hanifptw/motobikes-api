import { type Brand } from "@prisma/client";

export type DataBrand = Omit<Brand, "updatedAt">;

export const dataBrands: DataBrand[] = [
  {
    id: 1,
    name: "Honda",
    founder: "Soichiro Honda, Takeo Fujisawa",
    headqurter: "Minato, Tokyo, Jepang",
    foundedAt: new Date("1948-09-24T15:02:51.219Z"),
  },
  {
    id: 2,
    name: "Yamaha",
    founder: "SGenichi Kawakami",
    headqurter: "wata, Prefektur Shizuoka, Jepang",
    foundedAt: new Date("1955-07-01T15:02:51.219Z"),
  },
  {
    id: 3,
    name: "Kawasaki",
    founder: "Kawasaki Shōzō",
    headqurter: "Minato, Tokyo, Jepang",
    foundedAt: new Date("1896-10-15T15:02:51.219Z"),
  },
  {
    id: 4,
    name: "Suzuki",
    founder: "Michio Suzuki",
    headqurter: "Hamamatsu, Prefektur Shizuoka, Jepang",
    foundedAt: new Date("1909-10-01T15:02:51.219Z"),
  },
  {
    id: 5,
    name: "BMW",
    founder: "Susanne Klatten, Stefan Quandt",
    headqurter: "München, Jerman",
    foundedAt: new Date("1916-03-07T15:02:51.219Z"),
  },
  {
    id: 6,
    name: "Ducati",
    founder:
      "Antonio Cavalieri Ducati, Adriano Cavalieri Ducati, Marcello Cavalieri Ducati, Bruno Cavalieri Ducati",
    headqurter: "Borgo Panigale, Bologna, Italia",
    foundedAt: new Date("1926-07-04T15:02:51.219Z"),
  },
];
