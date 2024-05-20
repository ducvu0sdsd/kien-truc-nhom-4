
const ThongTinHocPhan = require('../models/thongTinHocPhan')
const ThongTinHocTap = require("../models/thongTinHocTap")

class studyService {

    createThongTinHocPhan = async (thongtin) => {
        return await ThongTinHocPhan.create(thongtin)
    }

    gelAllThongTinHocPhan = async () => {
        return await ThongTinHocPhan.find()
    }

    deleteThongTinHocPhan = async (id) => {
        return await ThongTinHocPhan.findByIdAndDelete(id)
    }

    createThongTinHocTap = async (thongtin) => {
        return await ThongTinHocTap.create(thongtin)
    }

    gelThongTinHocTapByMSSV = async (mssv) => {
        console.log(mssv)
        return await ThongTinHocTap.findOne({ mssv })
    }
}

module.exports = new studyService