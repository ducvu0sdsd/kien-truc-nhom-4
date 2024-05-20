const studyService = require("../services/dkhpService")


class studyController {

    createThongTinDangKyHocPhan = (req, res) => {
        const { hocPhan, nhomLyThuyet, nhomThucHanh, sinhVien } = req.body
        studyService.createThongTinDangKyHocPhan({ hocPhan, nhomLyThuyet, nhomThucHanh, sinhVien })
            .then(ThongTinHocPhan => {
                return res.status(201).json(ThongTinHocPhan)
            })
            .catch(error => {
                console.log(error)
            })
    }

    getAllThongTinDangKyHocPhan = (req, res) => {
        studyService.gelAllThongTinHocPhan()
            .then(ThongTinHocPhans => {
                return res.status(200).json(ThongTinHocPhans)
            })
            .catch(error => {
                console.log(error)
            })
    }

    getByHocKyAndMSSV = (req, res) => {
        const { maHocKy, mssv } = req.query;
        studyService.getByHocKyAndMSSV(mssv, maHocKy)
            .then(ThongTinHocPhans => {
                console.log(ThongTinHocPhans)
                return res.status(200).json(ThongTinHocPhans)
            })
            .catch(error => {
                console.log(error)
            })
    }

    getByHocKyAndMon = (req, res) => {
        const { maHocKy, maMon } = req.query;
        studyService.getByHocKyAndMon(maMon, maHocKy)
            .then(ThongTinHocPhans => {
                console.log(ThongTinHocPhans)
                return res.status(200).json(ThongTinHocPhans)
            })
            .catch(error => {
                console.log(error)
            })
    }


    getByHocKy = (req, res) => {
        const { maHocKy, maMon } = req.params;
        studyService.getByHocKy(maHocKy)
            .then(ThongTinHocPhans => {
                return res.status(200).json(ThongTinHocPhans)
            })
            .catch(error => {
                console.log(error)
            })
    }

    deleteThongTinHocPhan = (req, res) => {
        const { id } = req.params
        studyService.deleteThongTinHocPhan(id)
            .then(ThongTinHocPhan => {
                return res.status(200).json(ThongTinHocPhan)
            })
            .catch(error => {
                console.log(error)
            })
    }

}

module.exports = new studyController