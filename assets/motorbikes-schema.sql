CREATE TABLE "motorbikes" (
  "id" int PRIMARY KEY,
  "name" varchar(100),
  "brand_id" varchar(50),
  "cc" int(2000),
  "type" varchar(200),
  "transmission" varchar(50),
  "price" int,
  "created_at" timestamp,
  "updated_at" datetime
);

CREATE TABLE "brands" (
  "id" integer PRIMARY KEY,
  "name" varchar(50),
  "founder" varchar(200),
  "founded_at" datetime,
  "headquarters" varchar,
  "updated_at" datetime
);

ALTER TABLE "motorbikes" ADD FOREIGN KEY ("brand_id") REFERENCES "brands" ("id");
