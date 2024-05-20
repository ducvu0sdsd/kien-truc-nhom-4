'use client'
import { globalContext, notifyType } from '@/context/globalContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

const Navbar = () => {
    const { globalHandler, globalData } = useContext(globalContext)
    const router = useRouter()

    const handleSignOut = () => {
        globalHandler.notify(notifyType.LOADING, "Go Out")
        globalThis.localStorage.removeItem('accessToken')
        setTimeout(() => {
            globalHandler.notify(notifyType.NONE, "")
            router.push("/")
        }, 1000);
    }

    return (
        <div className='w-[250px] z-10 bg-[white] border-r-[1px] h-full border-[#e0e0e0] pt-[10px] flex flex-col gap-3 px-[15px] shadow-xl'>
            <div className='flex w-full items-center justify-start gap-4 mb-[15px]'>
                <img src='/logo.png' width={'45px'} />
                <span className='text-[12px] w-[200px] font-medium translate-y-[5px]'>INDUSTRIAL UNIVERSITY OF HOCHIMINH CITY</span>
            </div>
            {!globalData.student?.username?.includes('admin') ?
                (<>
                    <Link href={'/thong-tin-chung'}>
                        <div className='flex w-full items-center justify-start gap-2 cursor-pointer'>
                            <img src='/student.png' width={'32px'} />
                            <span className='hover:underline text-[13px] font-medium w-[200px] translate-y-[5px]'>Thông Tin Chung</span>
                        </div>
                    </Link>
                    <Link href={"/dang-ky-hoc-phan"}>
                        <div className='flex w-full items-center justify-start gap-2 cursor-pointer'>
                            <img src='/signup.png' width={'32px'} />
                            <span className='hover:underline text-[13px] font-medium w-[200px] translate-y-[5px]'>Đăng Ký Học Phần</span>
                        </div>
                    </Link>
                </>)
                :
                (<>
                    <Link href={'/quan-ly-sinh-vien'}>
                        <div className='flex w-full items-center justify-start gap-2 cursor-pointer'>
                            <img src='/sinhvien.png' width={'32px'} />
                            <span className='hover:underline text-[13px] font-medium w-[200px] translate-y-[5px]'>Quản Lý Sinh Viên</span>
                        </div>
                    </Link>
                    <Link href={'/quan-ly-khoa'}>
                        <div className='flex w-full items-center justify-start gap-2 cursor-pointer'>
                            <img src='/khoa.png' width={'32px'} />
                            <span className='hover:underline text-[13px] font-medium w-[200px] translate-y-[5px]'>Quản Lý Khoa</span>
                        </div>
                    </Link>
                    <Link href={'/quan-ly-chuyen-nganh'}>
                        <div className='flex w-full items-center justify-start gap-2 cursor-pointer'>
                            <img src='/chuyennganh.png' width={'32px'} />
                            <span className='hover:underline text-[13px] font-medium w-[200px] translate-y-[5px]'>Quản Lý Chuyên Ngành</span>
                        </div>
                    </Link>
                    <Link href={'/quan-ly-he-dao-tao'}>
                        <div className='flex w-full items-center justify-start gap-2 cursor-pointer'>
                            <img src='/hedaotao.png' width={'32px'} />
                            <span className='hover:underline text-[13px] font-medium w-[200px] translate-y-[5px]'>Quản Lý Hệ Đào Tạo</span>
                        </div>
                    </Link>
                    <Link href={'/quan-ly-phong'}>
                        <div className='flex w-full items-center justify-start gap-2 cursor-pointer'>
                            <img src='/phong.png' width={'32px'} />
                            <span className='hover:underline text-[13px] font-medium w-[200px] translate-y-[5px]'>Quản Lý Phòng</span>
                        </div>
                    </Link>
                    <Link href={'/quan-ly-lop'}>
                        <div className='flex w-full items-center justify-start gap-2 cursor-pointer'>
                            <img src='/lop.png' width={'32px'} />
                            <span className='hover:underline text-[13px] font-medium w-[200px] translate-y-[5px]'>Quản Lý Lớp</span>
                        </div>
                    </Link>
                    <Link href={'/quan-ly-giao-vien'}>
                        <div className='flex w-full items-center justify-start gap-2 cursor-pointer'>
                            <img src='/teacher.png' width={'32px'} />
                            <span className='hover:underline text-[13px] font-medium w-[200px] translate-y-[5px]'>Quản Lý Giáo Viên</span>
                        </div>
                    </Link>
                    <Link href={'/quan-ly-mon-hoc'}>
                        <div className='flex w-full items-center justify-start gap-2 cursor-pointer'>
                            <img src='/monhoc2.png' width={'32px'} />
                            <span className='hover:underline text-[13px] font-medium w-[200px] translate-y-[5px]'>Quản Lý Môn Học</span>
                        </div>
                    </Link>
                    <Link href={'/quan-ly-hoc-ky'}>
                        <div className='flex w-full items-center justify-start gap-2 cursor-pointer'>
                            <img src='/hocky.png' width={'32px'} />
                            <span className='hover:underline text-[13px] font-medium w-[200px] translate-y-[5px]'>Quản Lý Học Kỳ</span>
                        </div>
                    </Link>
                    <Link href={'/quan-ly-hoc-phan'}>
                        <div className='flex w-full items-center justify-start gap-2 cursor-pointer'>
                            <img src='/hocphan.png' width={'32px'} />
                            <span className='hover:underline text-[13px] font-medium w-[200px] translate-y-[5px]'>Quản Lý Học Phần</span>
                        </div>
                    </Link>
                </>)
            }
            <div onClick={() => handleSignOut()} className='flex w-full items-center justify-start gap-2 cursor-pointer'>
                <img src='/signout.png' width={'32px'} />
                <span className='hover:underline text-[13px] font-medium w-[200px] translate-y-[5px]'>Đăng Xuất</span>
            </div>
        </div>
    )
}

export default Navbar