const express = require("express");
const { getAccessToRoute } = require("../middlewares/authorization/auth")
const { checkQuestionAndAnswerExist } = require("../middlewares/database/databaseErrorHelpers")
const { 
    addNewAnswerToQuestion, getAllAnswerByQuestion,
    getSingleAnswer, editAnswer, deleteAnswer, likeAnswer, undolikeAnswer
 } = require("../controllers/answer")
const { getAnswerOwnerAccess } = require("../middlewares/authorization/auth")
const router = express.Router({ mergeParams:true });

router.post("/", getAccessToRoute, addNewAnswerToQuestion);
router.get("/", getAllAnswerByQuestion);
router.get("/:answer_id", checkQuestionAndAnswerExist, getSingleAnswer)
router.get("/:answer_id/like", checkQuestionAndAnswerExist, likeAnswer)
router.get("/:answer_id/undolike", checkQuestionAndAnswerExist, undolikeAnswer)
router.put("/:answer_id/edit", [checkQuestionAndAnswerExist, getAccessToRoute, getAnswerOwnerAccess], editAnswer)
router.delete("/:answer_id/delete", [checkQuestionAndAnswerExist, getAccessToRoute, getAnswerOwnerAccess], deleteAnswer)


module.exports = router