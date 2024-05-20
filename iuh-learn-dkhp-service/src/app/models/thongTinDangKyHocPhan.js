
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ThongTinDangKyHocPhan = new Schema({
    hocPhan: mongoose.Schema.Types.Mixed,
    nhomLyThuyet: mongoose.Schema.Types.Mixed,
    nhomThucHanh: mongoose.Schema.Types.Mixed,
    sinhVien: mongoose.Schema.Types.Mixed
}, { timestamps: true })

module.exports = mongoose.model('thongtinhocphan', ThongTinDangKyHocPhan)