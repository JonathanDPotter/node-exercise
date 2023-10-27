import express from "express";
import userRouter from "./users.route";
import employeeRouter from "./employee.route";
import productsRouter from "./products.route";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

router.use("/users", userRouter);
router.use("/employees", employeeRouter);
router.use("/products", productsRouter);

export default router;
