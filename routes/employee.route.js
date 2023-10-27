import express from "express";
import employees from "../controllers/employees.controller";

const router = express.Router();

router.get("/:id?", async (req, res) => {
  const { id } = req.params;
  let data;

  data = id ? await employees.findOne(id) : await employees.findAll();

  res.json(data);
});

router.post("/", async (req, res) => {
  const employeeDTO = req.body;
  const data = await employees.addOne(employeeDTO);
  res.json(data);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const employeeDTO = req.body;
  const data = await employees.updateOne(id, employeeDTO);
  res.json(data);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await employees.removeOne(id);
  res.json(data);
});

export default router;
