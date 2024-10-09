import { Router } from "express";
import {
  destroy,
  index,
  show,
  store,
  update,
} from "../controllers/veiculo_controller.js";
const router = Router();

router.post("/", store);
router.get("/", index);
router.get("/:id", show);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
