
const ThongTinDangKyHocPhan = require("../models/thongTinDangKyHocPhan")

class studyService {

    createThongTinDangKyHocPhan = async (thongtin) => {
        return await ThongTinDangKyHocPhan.create(thongtin)
    }

    gelAllThongTinHocPhan = async () => {
        return await ThongTinDangKyHocPhan.find()
    }

    getByHocKyAndMSSV = async (mssv, maHocKy) => {
        return await ThongTinDangKyHocPhan.find({ 'sinhVien.mssv': mssv, 'hocPhan.hocKy.maHocKy': Number(maHocKy) })
    }

    getByHocKyAndMon = async (maMon, maHocKy) => {
        return await ThongTinDangKyHocPhan.find({ 'hocPhan.monHoc.maMon': maMon, 'hocPhan.hocKy.maHocKy': Number(maHocKy) })
    }

    getByHocKy = async (maHocKy) => {
        return await ThongTinDangKyHocPhan.find({ 'hocPhan.hocKy.maHocKy': maHocKy })
    }

    deleteThongTinHocPhan = async (id) => {
        return await ThongTinDangKyHocPhan.findByIdAndDelete(id)
    }

}

module.exports = new studyService