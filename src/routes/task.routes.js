const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const { getTasks, createTask } = require("../controllers/task.controller");

router.get("/", auth, getTasks);
router.post("/", auth, createTask);

module.exports = router;
