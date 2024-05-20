const studyService = require("../services/studyService")


class studyController {

    createThongTinHocPhan = (req, res) => {
        const { maHocPhan, trangThai, tietLyThuyet, tietThucHanh, batBuoc, hocTruoc, songHanh, tienQuyet } = req.body
        console.log(batBuoc)
        studyService.createThongTinHocPhan({ maHocPhan, trangThai, tietLyThuyet, tietThucHanh, batBuoc, hocTruoc, songHanh, tienQuyet })
            .then(ThongTinHocPhan => {
                return res.status(201).json(ThongTinHocPhan)
            })
            .catch(error => {
                console.log(error)
            })
    }

    getAllThongTinHocPhan = (req, res) => {
        studyService.gelAllThongTinHocPhan()
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

    createThongTinHocTap = (req, res) => {
        const { mssv, hocPhanDaHoc } = req.body
        studyService.createThongTinHocTap({ mssv, hocPhanDaHoc })
            .then(ThongTinHocPhan => {
                return res.status(201).json(ThongTinHocPhan)
            })
            .catch(error => {
                console.log(error)
            })
    }

    getThongTinHocTapByMSSV = (req, res) => {
        const { mssv } = req.params
        studyService.gelThongTinHocTapByMSSV(mssv)
            .then(ThongTinHocTap => {
                return res.status(201).json(ThongTinHocTap)
            })
            .catch(error => {
                console.log(error)
            })
    }

}

module.exports = new studyController