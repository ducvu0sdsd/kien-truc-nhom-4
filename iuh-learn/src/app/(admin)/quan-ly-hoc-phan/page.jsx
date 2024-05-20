'use client'
import Header from '@/components/header'
import ListHocPhan from '@/components/admin/hoc-phan-management/listHocPhan'
import Navbar from '@/components/menu/navbar'
import { adminContext } from '@/context/adminContext'
import { TypeHTTP, api } from '@/utils/api'
import { ports } from '@/utils/routes'
import React, { useContext, useEffect, useState } from 'react'
import { dkhpContext } from '@/context/dkhpContext'

const HocPhanManagement = () => {
    const [dsHocPhan, setDsHocPhan] = useState([])
    const { adminData, adminHandler } = useContext(adminContext)
    const { dkhpHandler } = useContext(dkhpContext)

    useEffect(() => {
        api({ port: ports.otherServiceURL, sendToken: true, type: TypeHTTP.GET, path: '/hocphan' })
            .then(hocphans => {
                api({ port: ports.studyServiceURL, sendToken: true, type: TypeHTTP.GET, path: '/study/get-all-thong-tin-hoc-phan' })
                    .then(dsLichHoc => {
                        setDsHocPhan(() => {
                            const r = hocphans.map(hocphan => {
                                const lich = dsLichHoc.filter(item => item.maHocPhan + "" === hocphan.maHocPhan + "")[0]
                                if (lich) {
                                    hocphan.thongTin = { _id: lich._id, tietLyThuyet: lich.tietLyThuyet, tietThucHanh: lich.tietThucHanh, batBuoc: lich.batBuoc, tienQuyet: lich.tienQuyet, hocTruoc: lich.hocTruoc, songHanh: lich.songHanh }
                                }
                                return hocphan
                            })
                            dkhpHandler.setDsHocPhan(r)

                            return r;
                        })
                    })
            })
    }, [])

    return (
        <section className='h-screen w-full flex z-0'>
            <Navbar />
            <div className='w-full h-screen relative pl-[20px] pr-[200px] pb-[10px] flex flex-col gap-3'>
                <Header image={'/calendar.png'} text={'Quản Lý Học Phần'} />
                <ListHocPhan dsHocPhan={dsHocPhan} />
                <button onClick={() => adminHandler.showCreateHocPhanForm()} className='fixed px-4 py-1 rounded-md top-4 right-3 text-[14px] bg-[green] text-[white]'>+ Thêm Học Phần</button>
            </div>
        </section>
    )
}

export default HocPhanManagement