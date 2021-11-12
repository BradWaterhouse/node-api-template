# Simple Node API

---

Simple starter Node API using MySQL and express.

## Prerequisites

---

- `Node`
- `npm`/`yarn`
- `MySQL`
---

## Preparation

- Clone repository and run `npm install`/`yarn install`
- Create a `.env` file to store database credentials (copy `env.local` variable names)

### Template database

If you'd like to connect to the database being used in the example follow the steps below in your DB management tool.

```mysql
CREATE DATABASE node_api;

CREATE TABLE `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
     PRIMARY KEY (`id`)
);
```


---

## Run

---

- Run ``node .`` in root of project to start Node server
- Visit `localhost:8888/...` to access your API endpoints.



