const {Router} = require("express");
const { getToDos,saveToDos, updateToDos, deleteToDos } = require("../controller/ToDoController");

const router = Router()

router.get("/get",getToDos);
router.post("/save",saveToDos)
router.delete("/delete/:id",deleteToDos)
router.put("/update/:id",updateToDos)

module.exports = router