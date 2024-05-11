type Motobikes = 
  {
    id: number;
    name: string;
    cc?: number;
    speed?: number;
  }
;

export const dataMotobikes: Motobikes[] = [
  {
    id: 1,
    cc: 1000,
    name: "ZX10R",
    speed: 300
  },
  {
    id: 2,
    cc: 250,
    name: "ZX25R",
    speed: 250
  }
];
