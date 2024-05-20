import { dkhpContext } from '@/context/dkhpContext'
import { globalContext, notifyType } from '@/context/globalContext'
import { TypeHTTP, api } from '@/utils/api'
import { ports } from '@/utils/routes'
import React, { useContext, useEffect, useState } from 'react'
import XemHocPhanDaDangKy from './xemHocPhanDaDangKy'

const XemThongTinHocPhan = () => {
    const [dsHocPhan, setDsHocPhan] = useState([])
    const { dkhpData, dkhpHandler } = useContext(dkhpContext)
    const { globalData, globalHandler } = useContext(globalContext)
    const [currentHocPhan, setCurrenHocPhan] = useState()
    const [hocPhanDangKy, setHocPhanDangKy] = useState({
        sinhVien: {
            mssv: globalData.student.mssv
        },
        hocPhan: null,
        nhomLyThuyet: null,
        nhomThucHanh: null
    })

    useEffect(() => {
        if (!currentHocPhan) {
            setHocPhanDangKy({
                sinhVien: {
                    mssv: globalData.student.mssv
                },
                hocPhan: null,
                nhomLyThuyet: null,
                nhomThucHanh: null
            })
        } else {
            setHocPhanDangKy({
                sinhVien: {
                    mssv: globalData.student.mssv
                },
                hocPhan: currentHocPhan,
                nhomLyThuyet: null,
                nhomThucHanh: null
            })
        }
    }, [currentHocPhan])

    useEffect(() => {
        api({ port: ports.otherServiceURL, type: TypeHTTP.GET, sendToken: true, path: `/hocphan/mhk-mm?maHocKy=${dkhpData.hocPhanHienTai.hocKy.maHocKy}&maMon=${dkhpData.hocPhanHienTai.monHoc.maMon}` })
            .then(hocphans => {
                api({ port: ports.studyServiceURL, sendToken: true, type: TypeHTTP.GET, path: '/study/get-all-thong-tin-hoc-phan' })
                    .then(dsLichHoc => {
                        api({ type: TypeHTTP.GET, sendToken: true, port: ports.dkhpServiceURL, path: `/dkhp` })
                            .then(dkhps => {
                                setDsHocPhan(() => {
                                    return hocphans.filter(hocphan => {
                                        const lich = dsLichHoc.filter(item => item.maHocPhan + "" === hocphan.maHocPhan + "")[0]
                                        if (lich) {
                                            hocphan.thongTin = { tietLyThuyet: lich.tietLyThuyet, tietThucHanh: lich.tietThucHanh, batBuoc: lich.batBuoc, tienQuyet: lich.tienQuyet, hocTruoc: lich.hocTruoc, songHanh: lich.songHanh, trangThai: lich.trangThai }
                                        }
                                        hocphan.thongTin.tietLyThuyet[0].siSo = dkhps.filter(item => item.hocPhan.maHocPhan === hocphan.maHocPhan).length
                                        hocphan.thongTin.tietThucHanh.map(item => {
                                            item.siSo = dkhps.filter(item1 => item1.nhomThucHanh._id === item._id).length
                                            return item
                                        })
                                        return hocphan
                                    })
                                })
                            })
                    })
            })
    }, [dkhpData.hocPhanHienTai])

    const handleSubmitDangKy = async () => {
        const tietLyThuyet = await currentHocPhan.thongTin.tietLyThuyet.filter(item => {
            return item._id === hocPhanDangKy.nhomLyThuyet._id
        })[0]
        const tietThucHanh = await currentHocPhan.thongTin.tietThucHanh.filter(item => item._id === hocPhanDangKy.nhomThucHanh._id)[0]
        const result = dkhpHandler.kiemTraLichTrung(tietLyThuyet, tietThucHanh)
        if (result.status === true) {
            globalHandler.notify(notifyType.LOADING, "Đang Đăng Ký Học Phần")
            api({ port: ports.dkhpServiceURL, type: TypeHTTP.POST, sendToken: true, path: '/dkhp', body: hocPhanDangKy })
                .then(res => {
                    globalHandler.notify(notifyType.SUCCESS, "Đăng Ký Học Phần Thành Công")
                    globalHandler.reload()
                })
        } else {
            globalHandler.notify(notifyType.WARNING, result.message)
        }
    }

    return (
        <div className='w-full h-screen flex flex-col overflow-y-auto gap-4 pr-[240px]'>
            <div className='flex w-full gap-2'>
                <div className='flex w-full flex-col'>
                    <h3 className='text-[18px] mb-2 font-semibold'>Lớp học phần chờ đăng ký</h3>
                    <div className='overflow-y-auto max-h-[380px] mt-2'>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="sticky top-0 left-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        STT
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Thông tin học phần
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Số lượng đăng ký
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=' w-full bg-black'>
                                {dsHocPhan.map((hocphan, index) => (
                                    <tr onClick={() => {
                                        if (hocphan.thongTin.trangThai === 'Mở Lớp') {
                                            setCurrenHocPhan(hocphan)
                                        } else {
                                            globalHandler.notify(notifyType.FAIL, "Học Phần Này Không Được Phép Đăng Ký")
                                        }
                                    }} style={currentHocPhan?.maHocPhan === hocphan?.maHocPhan ? { backgroundColor: '#f3f3f3' } : {}} key={index} className="hover:bg-[#f3f3f3] transition-all cursor-pointer odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <td scope="row" className="w-[50px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {index + 1}
                                        </td>
                                        <td scope="row" className="px-6 py-4 flex flex-col gap-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <span className='text-[14px] font-semibold'>{hocphan.monHoc.tenMon} - {hocphan.lop.tenLop}</span>
                                            <span className='text-[13px]'>Trạng Thái: {hocphan.thongTin.trangThai}</span>
                                        </td>
                                        <td scope="row" className="px-6 text-[14px] py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {hocphan.thongTin.tietLyThuyet[0].siSo}/{hocphan.thongTin.tietLyThuyet[0].siSoToiDa}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='transition-all relative overflow-hidden' style={currentHocPhan ? { width: '1000px', padding: '0 8px' } : { width: 0 }}>
                    <button onClick={() => setCurrenHocPhan(undefined)} className='text-[22px] flex items-center justify-center absolute right-5 rounded-full bg-[#e7e7e7] text-[#999] h-[25px] w-[25px] top-1'><i className='bx bx-x'></i></button>
                    <h3 className='text-[16px] mb-4 font-semibold'> Chi Tiết Lớp Học Phần {`(${currentHocPhan?.lop?.tenLop})`}</h3>
                    <div className='overflow-y-auto max-h-[380px] mt-2'>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="sticky top-0 left-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Trạng Thái: Mở Lớp
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Sỉ Số Tối Đa
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=' w-full bg-black'>
                                <tr style={hocPhanDangKy.nhomLyThuyet?._id === currentHocPhan?.thongTin?.tietLyThuyet[0]?._id ? { backgroundColor: '#f1f1f1' } : {}} onClick={() => { currentHocPhan?.thongTin?.tietLyThuyet[0]?.siSo >= currentHocPhan?.thongTin?.tietLyThuyet[0]?.siSoToiDa ? globalHandler.notify(notifyType.WARNING, "Học Phần Đã Đủ Số Lượng Đăng Ký") : setHocPhanDangKy({ ...hocPhanDangKy, nhomLyThuyet: currentHocPhan?.thongTin?.tietLyThuyet[0] }) }} className="hover:bg-[#f3f3f3] transition-all cursor-pointer odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <td scope="row" className="px-6 py-4 flex flex-col gap-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <span>Lý Thuyết - Thứ {currentHocPhan?.thongTin?.tietLyThuyet[0]?.ngay} {`(Tiết ${currentHocPhan?.thongTin?.tietLyThuyet[0]?.tiet})`} {`(Phòng ${currentHocPhan?.thongTin?.tietLyThuyet[0]?.phong.tenPhong})`}</span>
                                        <span>Giáo Viên: {currentHocPhan?.thongTin?.tietLyThuyet[0]?.giaoVien?.tenGiaoVien}</span>
                                    </td>
                                    <td scope="row" className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {currentHocPhan?.thongTin?.tietLyThuyet[0]?.siSo}/{currentHocPhan?.thongTin?.tietLyThuyet[0]?.siSoToiDa}
                                    </td>
                                </tr>

                                {currentHocPhan?.thongTin?.tietThucHanh.map((tiet, index) => (
                                    <tr style={hocPhanDangKy.nhomThucHanh?._id === tiet?._id ? { backgroundColor: '#f1f1f1' } : {}} onClick={() => { tiet?.siSo >= tiet?.siSoToiDa ? globalHandler.notify(notifyType.WARNING, "Học Phần Đã Đủ Số Lượng Đăng Ký") : setHocPhanDangKy({ ...hocPhanDangKy, nhomThucHanh: { ...tiet, nhom: index + 1 } }) }} key={index} className="hover:bg-[#f3f3f3] transition-all cursor-pointer odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <td scope="row" className="px-6 py-4 flex flex-col gap-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <span>Thực Hành - Thứ {tiet?.ngay} {`(Tiết ${tiet?.tiet})`} {`(Phòng ${tiet?.phong.tenPhong})`}</span>
                                            <span>Giáo Viên: {tiet?.giaoVien?.tenGiaoVien}</span>
                                        </td>
                                        <td scope="row" className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {tiet?.siSo}/{tiet?.siSoToiDa}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='w-full flex justify-end mt-3'>
                        <button onClick={() => handleSubmitDangKy()} className='px-6 py-2 rounded-md text-[15px] bg-[blue] font-semibold text-white'>Đăng Ký</button>
                    </div>
                </div>
            </div>
            <XemHocPhanDaDangKy dsHocPhan={dkhpData.dsHocPhanDaDangKy} />
        </div>
    )
}

export default XemThongTinHocPhan