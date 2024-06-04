import { type Brand } from "@prisma/client";

export type DataBrand = Omit<Brand, "foundedAt" | "updatedAt">;

export const dataBrands: DataBrand[] = [
  {
    id: 1,
    name: "Honda",
    founder: "Soichiro Honda, Takeo Fujisawa",
    headqurter: "Minato, Tokyo, Jepang"
  },
  {
    id: 2,
    name: "Yamaha",
    founder: "SGenichi Kawakami",
    headqurter: "wata, Prefektur Shizuoka, Jepang"
  },
  {
    id: 3,
    name: "Kawasaki",
    founder: "Kawasaki Shōzō",
    headqurter: "Minato, Tokyo, Jepang"
  },
  {
    id: 4,
    name: "Suzuki",
    founder: "Michio Suzuki",
    headqurter: "Hamamatsu, Prefektur Shizuoka, Jepang"
  },
  {
    id: 5,
    name: "BMW",
    founder: "Susanne Klatten, Stefan Quandt",
    headqurter: "München, Jerman"
  },
  {
    id: 6,
    name: "Ducati",
    founder: "Antonio Cavalieri Ducati, Adriano Cavalieri Ducati, Marcello Cavalieri Ducati, Bruno Cavalieri Ducati",
    headqurter: "Borgo Panigale, Bologna, Italia"
  },
 
];
