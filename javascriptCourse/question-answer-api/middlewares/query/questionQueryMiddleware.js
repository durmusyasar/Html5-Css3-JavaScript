const asyncErrorWrapper = require("express-async-handler")
const { searchHelper, populateHelper, questionSortHelper, paginationHelper } = require("./questionQueryHelper")

const userQueryMiddlware = function(model, options) {
    return asyncErrorWrapper(async function(req, res, next){
        let query = model.find()
        query = searchHelper("name", query, req)
        let total = await model.countDocuments()
        const paginationResult = await paginationHelper(total, query, req)
        query = paginationResult.query
        const pagination = paginationResult.pagination

        const queryResults = await query.find()

        res.queryResults = {
            success: true,
            count: queryResults.length,
            pagination: pagination,
            data: queryResults
        }
        next()
    })
}

module.exports = userQueryMiddlware