'use client'
import ListPhong from '@/components/admin/phong-management/listPhong'
import Header from '@/components/header'
import Navbar from '@/components/menu/navbar'
import { adminContext } from '@/context/adminContext'
import { TypeHTTP, api } from '@/utils/api'
import { ports } from '@/utils/routes'
import React, { useContext, useEffect, useState } from 'react'

const PhongManagement = () => {
    const [dsPhong, setDsPhong] = useState([])
    const { adminData, adminHandler } = useContext(adminContext)

    useEffect(() => {
        api({ port: ports.otherServiceURL, sendToken: true, type: TypeHTTP.GET, path: '/phong' })
            .then(phongs => {
                setDsPhong(phongs)
            })
    }, [])
    return (
        <section className='h-screen w-full flex z-0'>
            <Navbar />
            <div className='w-full h-screen relative pl-[20px] pr-[200px] pb-[10px] flex flex-col gap-3'>
                <Header image={'/calendar.png'} text={'Quản Lý Phòng'} />
                <ListPhong dsPhong={dsPhong} />
                <button onClick={() => adminHandler.showCreatePhongForm()} className='fixed px-4 py-1 rounded-md top-4 right-3 text-[14px] bg-[green] text-[white]'>+ Thêm Phòng Học</button>
            </div>
        </section>
    )
}

export default PhongManagement