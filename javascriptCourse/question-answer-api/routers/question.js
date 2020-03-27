const express = require("express");
const { getAccessToRoute, getQuestionOwnerAccess } = require("../middlewares/authorization/auth")
const { 
    askNewQuestion, getAllQuestions, getSingleQuestion,
    editQuestion, deleteQuestion, likeQuestion, undoLikeQuestion
} = require("../controllers/question");
const { checkQuestionExist } = require("../middlewares/database/databaseErrorHelpers")
const answer = require("./answer")
const questionQueryMiddleware = require("../middlewares/query/questionQueryMiddleware")
const answerQueryMiddlware = require("../middlewares/query/answerQueryMiddlware")
const Question = require("../models/Question")

const router = express.Router();

router.post("/ask", getAccessToRoute, askNewQuestion);
router.get("/", questionQueryMiddleware(Question, {
    population: {
        path: "user",
        select: "name profile_image"
    }
}), getAllQuestions);
router.get("/:id",checkQuestionExist, answerQueryMiddlware(Question, {
    population: [{
        path: "user",
        select:"name profile_image"
    },
    {
        path: "answer",
        select:"content"
    }
]
}), getSingleQuestion);
router.put("/:id/edit", [getAccessToRoute, checkQuestionExist, getQuestionOwnerAccess], editQuestion)
router.delete("/:id/delete", [getAccessToRoute, checkQuestionExist, getQuestionOwnerAccess], deleteQuestion)
router.get("/:id/like", [getAccessToRoute, checkQuestionExist], likeQuestion)
router.get("/:id/unlike", [getAccessToRoute, checkQuestionExist], undoLikeQuestion)
router.use("/:id/answers", checkQuestionExist , answer)
module.exports = router;