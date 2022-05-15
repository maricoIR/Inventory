const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "inventory",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected!");
  }
});

app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/products/:id", (req, res) => {
  const title = req.body.title;
  const location = req.body.location;
  const buy = req.body.buy;
  const sell = req.body.sell;
  const count = req.body.count;
  const id = req.params.id;

  db.query(
    "UPDATE products SET title=?,location=?,buy=?,sell=?,count=? WHERE id=?",
    [title, location, buy, sell, count, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/products", (req, res) => {
  const ids = req.body.id;
  var arr = ids.map(function (el) {
    return el.id;
  });
  db.query(
    "DELETE FROM products WHERE `id` IN (" + db.escape(arr) + ")",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/products/insert", (req, res) => {
  const title = req.body.title;
  const location = req.body.location;
  const buy = req.body.buy;
  const sell = req.body.sell;
  const count = req.body.count;

  db.query(
    "INSERT INTO products (title,location,buy,sell,count) VALUES (?,?,?,?,?)",
    [title, location, buy, sell, count],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Success");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server is running");
});
