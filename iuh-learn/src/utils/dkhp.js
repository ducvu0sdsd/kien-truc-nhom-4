export const kiemTrLichTrung = (tietLyThuyet, tietThucHanh, dsHocPhanDaDangKy) => {
    const ds = dsHocPhanDaDangKy.map(item => {
        const ly = {
            ngay: item.hocPhan.thongTin.tietLyThuyet[0].ngay,
            tiet: item.hocPhan.thongTin.tietLyThuyet[0].tiet,
            mon: item.hocPhan.monHoc
        }
        const th = {
            ngay: item.hocPhan.thongTin.tietThucHanh.filter(item1 => item1._id === item.nhomThucHanh._id)[0]?.ngay,
            tiet: item.hocPhan.thongTin.tietThucHanh.filter(item1 => item1._id === item.nhomThucHanh._id)[0].tiet,
            mon: item.hocPhan.monHoc
        }
        return [ly, th]
    }).flat()
    if (tietLyThuyet) {
        const tietCuaHocPhan = ds.filter(item => item.ngay === tietLyThuyet.ngay)
        if (!tietCuaHocPhan) {
            return { status: true, message: '' }
        }
        const gioLyThuyet = tietLyThuyet.tiet.split('-').map(item => Number(item))
        const gioCuaHocPhan = tietCuaHocPhan.map((item => {
            return {
                ...item,
                gio: item.tiet.split('-').map(item => Number(item))
            }
        }))
        for (let i = 0; i < gioCuaHocPhan.length; i++) {
            const gio = gioCuaHocPhan[i]
            console.log(gio.gio[0], gioLyThuyet[0], gio.gio[0], gioLyThuyet[1])
            console.log(gio.gio[1], gioLyThuyet[0], gio.gio[1], gioLyThuyet[1])
            if (gio.gio[0] >= gioLyThuyet[0] && gio.gio[0] <= gioLyThuyet[1])
                return { status: false, message: `Đã trùng lịch với môn ${gio.mon.tenMon}` }
            if (gio.gio[1] >= gioLyThuyet[0] && gio.gio[1] <= gioLyThuyet[1])
                return { status: false, message: `Đã trùng lịch với môn ${gio.mon.tenMon}` }
        }
    }
    if (tietThucHanh) {
        const tietCuaHocPhan = ds.filter(item => item.ngay === tietThucHanh.ngay)
        if (!tietCuaHocPhan) {
            return { status: true, message: '' }
        }
        const gioThucHanh = tietThucHanh.tiet.split('-').map(item => Number(item))
        const gioCuaHocPhan = tietCuaHocPhan.map((item => {
            return {
                ...item,
                gio: item.tiet.split('-').map(item => Number(item))
            }
        }))
        for (let i = 0; i < gioCuaHocPhan.length; i++) {
            const gio = gioCuaHocPhan[i]
            if (gio.gio[0] >= gioThucHanh[0] && gio.gio[0] <= gioThucHanh[1])
                return { status: false, message: `Đã trùng lịch với môn ${gio.mon.tenMon}` }
            if (gio.gio[1] >= gioThucHanh[0] && gio.gio[1] <= gioThucHanh[1])
                return { status: false, message: `Đã trùng lịch với môn ${gio.mon.tenMon}` }
        }
    }
    return { status: true, message: '' }
}



export const kiemTraPhongTrung = (dsTiet, dsHocPhan) => {
    dsTiet = dsTiet.map(item => {
        return {
            ngay: Number(item.ngay),
            tiet: item.tiet.split('-').map(item1 => Number(item1))
        }
    })
    const dsTietDaCo = [...dsHocPhan.map(item => {
        const lt = item.thongTin.tietLyThuyet.map(item1 => {
            return {
                ngay: Number(item1.ngay),
                tiet: item1.tiet.split('-').map(item2 => Number(item2)),
                hocPhan: item
            }
        })
        const th = item.thongTin.tietLyThuyet.map(item1 => {
            return {
                ngay: Number(item1.ngay),
                tiet: item1.tiet.split('-').map(item2 => Number(item2)),
                hocPhan: item
            }
        })
        return [...lt, ...th]
    })].flat()
    for (let i = 0; i < dsTiet.length; i++) {
        const tiet = dsTiet[i]
        const hocphanTheoNgay = dsTietDaCo.filter(item => item.ngay === tiet.ngay)
        for (let j = 0; j < hocphanTheoNgay; j++) {
            const tietDaCo = hocphanTheoNgay[j]
            if (tiet.tiet[0] >= tietDaCo[0] && tiet.tiet[0] <= tietDaCo[1]) {
                return { status: false, message: `Phòng Đã Bị Trùng Giờ Với Học Phần ${tietDaCo.hocPhan.maHocPhan}` }
            }
            if (tiet.tiet[1] >= tietDaCo[0] && tiet.tiet[1] <= tietDaCo[1]) {
                return { status: false, message: `Phòng Đã Bị Trùng Giờ Với Học Phần ${tietDaCo.hocPhan.maHocPhan}` }
            }
        }
    }
    return { status: true, message: `ok` }
}