
import { Router } from "express";

import renderHome from "../controllers/renderHome.mjs";
export const router = Router();

router.get('/', renderHome);


export default router;