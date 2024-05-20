
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ThongTinHocPhan = new Schema({
    maHocPhan: {
        type: Number
    },
    tietLyThuyet: {
        type: [{
            ngay: Number,
            tiet: String,
            phong: {
                maPhong: Number,
                tenPhong: String
            },
            giaoVien: {
                maGiaoVien: Number,
                tenGiaoVien: String
            },
            siSoToiDa: Number
        }]
    },
    tietThucHanh: {
        type: [{
            ngay: Number,
            tiet: String,
            phong: {
                maPhong: Number,
                tenPhong: String
            },
            giaoVien: {
                maGiaoVien: Number,
                tenGiaoVien: String
            },
            siSoToiDa: Number
        }]
    },
    tienQuyet: {
        type: Boolean
    },
    batBuoc: {
        type: Boolean
    },
    hocTruoc: {
        type: [{
            maMon: Number,
            tenMon: String
        }]
    },
    songHanh: {
        type: [{
            maMon: Number,
            tenMon: String
        }]
    },
    trangThai: {
        type: String,
        enum: ["Mở Lớp", "Đã Khóa", "Lên Kế Hoạch"],
        default: "Mở Lớp"
    }
}, { timestamps: true })

module.exports = mongoose.model('thongtinhocphan', ThongTinHocPhan)