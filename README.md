# Motorbikes Backend REST API

## REST API Endpoints

| Endpoint          | HTTP     | Description               |
| ----------------- | -------- | ------------------------- |
| `/motorbikes`     | `GET`    | `Get all motorbikes`      |
| `/motorbikes/:id` | `GET`    | `Get motorbikes by id`    |
| `/motorbikes`     | `POST`   | `add new motobike`        |
| `/motorbikes`     | `DELETE` | `Delete all motorbikes`   |
| `/motorbikes/:id` | `DELETE` | `Delete motorbikes by id` |
| `/motorbikes/:id` | `PUT`    | `Update motorbikes by id` |

## Entity Relationship Diagaram

![ERD Motorbikes](/assets/motorbikes-erd.svg)

## Getting started

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

open http://localhost:3000
