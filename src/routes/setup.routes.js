
import { Router } from "express";

import renderSetupDatabase from "../controllers/renderSetupDatabase.mjs";
import renderSetupAdmin from "../controllers/renderSetupAdmin.mjs";
import setupDatabase from "../controllers/setupDatabase.mjs";
import setupAdmin from "../controllers/setupAdmin.mjs";

export const router = Router();

router.get("/database", renderSetupDatabase);

router.post("/database",setupDatabase);

router.get("/admin",renderSetupAdmin);

router.post("/admin", setupAdmin);


export default router;

