const studyController = require('../app/controllers/studyController')

const router = require('express').Router()

router.post("/create-thong-tin-hoc-phan", studyController.createThongTinHocPhan)
router.post("/create-thong-tin-hoc-tap", studyController.createThongTinHocTap)
router.get("/get-all-thong-tin-hoc-phan", studyController.getAllThongTinHocPhan)
router.delete("/delete-thong-tin-hoc-phan/:id", studyController.deleteThongTinHocPhan)
router.get("/get-thong-tin-hoc-tap-by-mssv/:mssv", studyController.getThongTinHocTapByMSSV)

module.exports = router