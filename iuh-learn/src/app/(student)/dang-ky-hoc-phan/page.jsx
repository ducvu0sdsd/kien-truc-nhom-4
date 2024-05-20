'use client'
import Header from '@/components/header'
import Navbar from '@/components/menu/navbar'
import XemHocPhan from '@/components/student/dang-ky-hoc-phan/xemHocPhan'
import XemThongTinHocPhan from '@/components/student/dang-ky-hoc-phan/xemThongTinHocPhan'
import { dkhpContext } from '@/context/dkhpContext'
import React, { useContext, useState } from 'react'

const DangKyHocPhan = () => {

    const { dkhpData, dkhpHandler } = useContext(dkhpContext)

    return (
        <section className='h-screen w-full flex'>
            <Navbar />
            <div className='w-full h-full px-[20px] pb-[10px] flex flex-col gap-3'>
                <Header image={'/signup.png'} text={'Đăng Ký Học Phần'} />
                {dkhpData.step === 1 ?
                    <XemHocPhan />
                    : dkhpData.step === 2 &&
                    <XemThongTinHocPhan />
                }
            </div>
        </section>
    )
}

export default DangKyHocPhan