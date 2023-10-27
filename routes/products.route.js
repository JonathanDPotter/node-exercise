import { Router } from "express";
import products from "../controllers/products.controller";

const router = Router();

router.get("/:id?", async (req, res) => {
  const { id } = req.params;
  let data;

  data = id ? await products.findOne(id) : await products.findAll();

  res.json(data);
});

router.post("/", async (req, res) => {
  const productDTO = req.body;
  const data = await products.addOne(productDTO);
  res.json(data);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const productDTO = req.body;
  const data = await products.updateOne(id, productDTO);
  res.json(data);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await products.removeOne(id);
  res.json(data);
});

export default router;
