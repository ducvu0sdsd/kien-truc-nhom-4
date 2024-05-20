
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ThongTinHocTap = new Schema({
    mssv: {
        type: String
    },
    hocPhanDaHoc: [
        {
            maMon: Number,
            tenMon: String,
            soTinChi: Number
        }
    ]

}, { timestamps: true })

module.exports = mongoose.model('thongtinhoctap', ThongTinHocTap)