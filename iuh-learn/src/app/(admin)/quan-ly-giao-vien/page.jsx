'use client'
import ListGiaoVien from '@/components/admin/giao-vien-management/listGiaoVien'
import Header from '@/components/header'
import Navbar from '@/components/menu/navbar'
import { adminContext } from '@/context/adminContext'
import { TypeHTTP, api } from '@/utils/api'
import { ports } from '@/utils/routes'
import React, { useContext, useEffect, useState } from 'react'

const GiaoVienManagement = () => {
    const [dsGiaoVien, setDsGiaoVien] = useState([])
    const { adminData, adminHandler } = useContext(adminContext)

    useEffect(() => {
        api({ port: ports.otherServiceURL, sendToken: true, type: TypeHTTP.GET, path: '/giaovien' })
            .then(giaovien => {
                setDsGiaoVien(giaovien)
            })
    }, [])

    return (
        <section className='h-screen w-full flex z-0'>
            <Navbar />
            <div className='w-full h-screen relative pl-[20px] pr-[250px] pb-[10px] flex flex-col gap-3'>
                <Header image={'/calendar.png'} text={'Quản Lý Giáo Viên'} />
                <ListGiaoVien dsGiaoVien={dsGiaoVien} />
                <button onClick={() => adminHandler.showCreateGiaoVienForm()} className='fixed px-4 py-1 rounded-md top-4 right-3 text-[14px] bg-[green] text-[white]'>+ Thêm Giáo Viên</button>
            </div>
        </section>
    )
}

export default GiaoVienManagement