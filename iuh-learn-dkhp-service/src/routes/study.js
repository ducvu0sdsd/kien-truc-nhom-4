
const dkhpController = require('../app/controllers/dkhpController')

const router = require('express').Router()

router.post("/", dkhpController.createThongTinDangKyHocPhan)
router.get("/get-by-mhk-mssv", dkhpController.getByHocKyAndMSSV)
router.get("/get-by-mhk-mm", dkhpController.getByHocKyAndMon)
router.get("/", dkhpController.getAllThongTinDangKyHocPhan)
router.delete("/:id", dkhpController.deleteThongTinHocPhan)

module.exports = router