const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const DATA_FILE = "./data.json";

function loadData() {
  const data = fs.readFileSync(DATA_FILE, "utf8");
  return JSON.parse(data);
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/time", (req, res) => {
  res.json({ time: new Date().toISOString() });
});

app.get("/status", (req, res) => {
  res.status(200).json({ status: "OK" });
});

//CRUD

//get
app.get("/objects", (req, res) => {
  const data = loadData();
  res.json(data.objects);
});

//post
app.post("/objects", (req, res) => {
  const data = loadData();
  const { name } = req.body;

  if (!name) return res.status(400).json({ error: "Name is required" });

  const newObj = {
    id: Date.now(),
    name,
  };

  data.objects.push(newObj);
  saveData(data);

  res.json(newObj);
});

//put
app.put("/objects/:id", (req, res) => {
  const data = loadData();
  const id = Number(req.params.id);
  const { name } = req.body;

  const obj = data.objects.find((o) => o.id === id);
  if (!obj) return res.status(404).json({ error: "Object not found" });

  obj.name = name || obj.name;

  saveData(data);

  res.json(obj);
});

//delete
app.delete("/objects/:id", (req, res) => {
  const data = loadData();
  const id = Number(req.params.id);

  const index = data.objects.findIndex((o) => o.id === id);
  if (index === -1) return res.status(404).json({ error: "Object not found" });

  data.objects.splice(index, 1);

  saveData(data);

  res.json({ success: true });
});

//runnung
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
