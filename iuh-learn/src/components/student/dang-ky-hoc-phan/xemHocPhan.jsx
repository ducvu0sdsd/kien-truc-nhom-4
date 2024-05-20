'use client'
import { dkhpContext } from '@/context/dkhpContext'
import { globalContext, notifyType } from '@/context/globalContext'
import { TypeHTTP, api } from '@/utils/api'
import { ports } from '@/utils/routes'
import React, { useContext, useEffect, useState } from 'react'
import XemHocPhanDaDangKy from './xemHocPhanDaDangKy'

const XemHocPhan = () => {

    const dsLoaiDangKy = {
        1: 'Đăng Ký Mới',
        2: 'Đăng Ký Học Lại',
        3: 'Đăng Ký Học Cải Thiện'
    }

    const [dsHocKy, setDsHocKy] = useState([])
    const [dsHocPhan, setDsHocPhan] = useState([])
    const { globalData, globalHandler } = useContext(globalContext)
    const { dkhpData, dkhpHandler } = useContext(dkhpContext)
    const [loaiDangKy, setLoaiDangKy] = useState(dsLoaiDangKy[1]);
    const [maHocKy, setMaHocKy] = useState('')
    const [dsHocPhanDaDangKy, setDsHocPhanDaDangKy] = useState([])
    const [dsMonDaHoc, setDsMonDaHoc] = useState([])

    useEffect(() => {
        api({ type: TypeHTTP.GET, sendToken: true, port: ports.dkhpServiceURL, path: `/dkhp/get-by-mhk-mssv?mssv=${globalData.student?.mssv}&maHocKy=${maHocKy}` })
            .then(hocphans => {
                dkhpHandler.setDsHocPhanDaDangKy(hocphans)
                setDsHocPhanDaDangKy(hocphans)
            })
    }, [maHocKy])


    useEffect(() => {
        api({ port: ports.otherServiceURL, sendToken: true, type: TypeHTTP.GET, path: '/hocky' })
            .then(res => setDsHocKy(res))
        api({ type: TypeHTTP.GET, sendToken: true, port: ports.studyServiceURL, path: `/study/get-thong-tin-hoc-tap-by-mssv/${globalData.student?.mssv}` })
            .then(res => {
                setDsMonDaHoc(res ? res.hocPhanDaHoc : [])
            })
    }, [globalData.student])

    useEffect(() => {
        api({ port: ports.otherServiceURL, sendToken: true, type: TypeHTTP.GET, path: '/hocphan' })
            .then(hocphans => {
                api({ port: ports.studyServiceURL, sendToken: true, type: TypeHTTP.GET, path: '/study/get-all-thong-tin-hoc-phan' })
                    .then(dsLichHoc => {
                        setDsHocPhan(() => {
                            const r = hocphans.filter(hocphan => {
                                const lich = dsLichHoc.filter(item => item.maHocPhan + "" === hocphan.maHocPhan + "")[0]
                                if (lich) {
                                    hocphan.thongTin = { tietLyThuyet: lich.tietLyThuyet, tietThucHanh: lich.tietThucHanh, batBuoc: lich.batBuoc, tienQuyet: lich.tienQuyet, hocTruoc: lich.hocTruoc, songHanh: lich.songHanh }
                                }
                                if (loaiDangKy === hocphan.loaiDangKy && hocphan.lop.chuyenNganh.maChuyenNganh === globalData.student?.lop.chuyenNganh.maChuyenNganh && hocphan.hocKy.maHocKy + "" === maHocKy + "") {
                                    return hocphan
                                }
                            })
                            const arr = []
                            r.forEach(item => {
                                if (!arr.map(item1 => item1.monHoc.maMon).includes(item.monHoc.maMon)) {
                                    arr.push(item)
                                }
                            })
                            return arr
                        })
                    })
            })
        if (dsHocKy) {
            if (dsHocKy.filter(item => item.maHocKy + "" === maHocKy + "")[0]?.choPhepDangKy === false) {
                globalHandler.notify(notifyType.FAIL, "Học kỳ này không cho phép đăng ký")
            }
        }
    }, [maHocKy, loaiDangKy])

    const handleGoToDetail = (hocphan) => {
        if (hocphan.thongTin.hocTruoc.length > 0) {
            api({ type: TypeHTTP.GET, sendToken: true, port: ports.studyServiceURL, path: `/study/get-thong-tin-hoc-tap-by-mssv/${globalData.student.mssv}` })
                .then(res => {
                    if (!res) {
                        globalHandler.notify(notifyType.WARNING, `Bạn Phải Hoàn Thành ${hocphan.thongTin.hocTruoc.map(item => item.tenMon).join(', ')} Trước Khi Đăng Ký Học Phần Này`)
                    } else {
                        let ok = []
                        hocphan.thongTin.hocTruoc.forEach((phaiHocTruoc) => {
                            if (res.hocPhanDaHoc.map(item => item.maMon).includes(phaiHocTruoc.maMon)) {
                                ok.push({
                                    maMon: phaiHocTruoc.maMon,
                                    tenMon: phaiHocTruoc.tenMon
                                })
                            }
                        })
                        if (ok.length === hocphan.thongTin.hocTruoc.length) {
                            dkhpHandler.setHocPhanHienTai(hocphan);
                            dkhpHandler.setStep(2)
                        } else {
                            const monChuaHoc = hocphan.thongTin.hocTruoc.filter(item => !ok.map(item1 => item1.maMon).includes(item.maMon))
                            globalHandler.notify(notifyType.WARNING, `Bạn Phải Hoàn Thành ${monChuaHoc.map(item => item.tenMon).toString()} Trước Khi Đăng Ký Học Phần Này`)
                        }
                    }
                })
        } else {
            dkhpHandler.setHocPhanHienTai(hocphan);
            dkhpHandler.setStep(2)
        }
    }

    return (
        <div className='w-full h-screen flex flex-col gap-5 overflow-y-auto'>
            <div className='flex w-full gap-20'>
                <div className='flex justify-center items-center'>
                    <span className='w-[200px] text-[15px] font-medium'>Học Kỳ Đăng Ký</span>
                    <select onChange={(e) => setMaHocKy(e.target.value)} className='w-full text-[14px] focus:outline-0 px-[10px] h-[35px] border-[#c1c1c1] border-[1px] rounded-md'>
                        <option value=''>Chọn Học Kỳ</option>
                        {dsHocKy.map((hocky, index) => (
                            <option key={index} value={hocky.maHocKy}>{hocky.tenHocKy}</option>
                        ))}
                    </select>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='flex justify-center gap-1 items-center'>
                        <input
                            type='radio'
                            onChange={() => setLoaiDangKy(dsLoaiDangKy[1])}
                            checked={loaiDangKy === dsLoaiDangKy[1]}
                            className='h-[15px] w-[15px]'
                        />
                        <span className='text-[14px] font-medium'>Học Mới</span>
                    </div>
                    <div className='flex justify-center gap-1 items-center'>
                        <input
                            type='radio'
                            onChange={() => setLoaiDangKy(dsLoaiDangKy[2])}
                            checked={loaiDangKy === dsLoaiDangKy[2]}
                            className='h-[15px] w-[15px]'
                        />
                        <span className='text-[14px] font-medium'>Học Lại</span>
                    </div>
                    <div className='flex justify-center gap-1 items-center'>
                        <input
                            type='radio'
                            onChange={() => setLoaiDangKy(dsLoaiDangKy[3])}
                            checked={loaiDangKy === dsLoaiDangKy[3]}
                            className='h-[15px] w-[15px]'
                        />
                        <span className='text-[14px] font-medium'>Học Cải Thiện</span>
                    </div>
                </div>

            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-[16px] font-medium'>Học Phần Phần Đang Chờ Đăng Ký</h3>
                <div className='w-full max-h-[500px] min-h-[180px] overflow-auto'>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="sticky top-0 left-0 text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Mã Học Phần
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Môn Học
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Số Tín Chỉ
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Bắt Buộc
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tiên Quyết
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Học Trước
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Song Hành
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Các Thao Tác
                                </th>
                            </tr>
                        </thead>
                        <tbody className=' w-full bg-black'>
                            {dsHocPhan.map((hocphan, index) => (
                                <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {hocphan.maHocPhan}
                                    </td>
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {hocphan.monHoc.tenMon}
                                    </td>
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {hocphan.monHoc.soTinChi}
                                    </td>
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {hocphan.thongTin.batBuoc ? <span className='text-[green]'>Bắt Buộc</span> : <span>Không Bắt Buộc</span>}
                                    </td>
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {hocphan.thongTin.tienQuyet && <span>Tiên Quyết</span>}
                                    </td>
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <span > {hocphan.thongTin.hocTruoc.map((item, index) => item.tenMon)}</span>
                                    </td>
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <span > {hocphan.thongTin.songHanh.map((item, index) => item.tenMon)}</span>
                                    </td>
                                    <td className="px-6 py-4 flex items-center gap-1">
                                        {dsHocKy.filter(item => item.maHocKy + "" === maHocKy + "")[0]?.choPhepDangKy === true ?
                                            (!dsHocPhanDaDangKy.filter(item => item.hocPhan.monHoc.maMon === hocphan.monHoc.maMon)[0] && !dsMonDaHoc.filter(item => item.maMon === hocphan.monHoc.maMon)[0]) ?
                                                <button onClick={() => handleGoToDetail(hocphan)} className='px-4 py-1 rounded-md text-[13px] bg-[blue] text-white'>Đăng Ký</button>
                                                :
                                                <></>
                                            :
                                            <></>
                                        }
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
            {maHocKy && <XemHocPhanDaDangKy dsHocPhan={dsHocPhanDaDangKy} />}
        </div>
    )
}

export default XemHocPhan