const express = require('express')
const router = express.Router()
const { addRecord,getAllRecords} = require('../controllers/records')
router.post('/add-record/', addRecord)
router.get('/get-records/:id/', getAllRecords)

module.exports = router