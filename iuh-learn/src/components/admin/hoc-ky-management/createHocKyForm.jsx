import { adminContext } from '@/context/adminContext'
import { globalContext, notifyType } from '@/context/globalContext'
import { TypeHTTP, api } from '@/utils/api'
import { ports } from '@/utils/routes'
import React, { useContext, useEffect, useState } from 'react'

const CreateHocKyForm = ({ visible }) => {
    const { adminHandler } = useContext(adminContext)
    const { globalHandler } = useContext(globalContext)
    const [tenHocKy, setTenHocKy] = useState('')
    const [choPhepDangKy, setChoPhepDangKy] = useState(false)

    const handleCreateHocKy = () => {
        if (tenHocKy === '') {
            globalHandler.notify(notifyType.WARNING, 'Tên Học Kỳ Không Hợp Lệ')
            return
        }
        const body = {
            tenHocKy,
            choPhepDangKy
        }
        globalHandler.notify(notifyType.LOADING, "Đang Tạo Học Kỳ")
        api({ port: ports.otherServiceURL, sendToken: true, type: TypeHTTP.POST, body, path: '/hocky' })
            .then(res => {
                adminHandler.hiddenWrapper()
                globalHandler.notify(notifyType.SUCCESS, "Tạo Học Kỳ Thành Công")
                globalHandler.reload()
            })
    }

    return (
        <div style={visible ? { width: '800px', height: 'auto', padding: '20px' } : { width: 0, height: 0, padding: 0 }} className='bg-[white] flex flex-col gap-2 z-50 fixed top-[50%] left-[50%] translate-x-[-50%] transition-all translate-y-[-50%] rounded-lg overflow-hidden'>
            <div className='flex gap-2 items-center w-full mb-2'>
                {/* <img src={image} width={'35px'} /> */}
                <span className='text-[19px] font-medium'>Thêm Học Kỳ</span>
            </div>
            <div className='flex justify-evenly mb-1'>
                <input value={tenHocKy} onChange={e => setTenHocKy(e.target.value)} placeholder='Tên Học Kỳ' className='w-[45%] text-[14px] focus:outline-0 px-[10px] h-[35px] border-[#c1c1c1] border-[1px] rounded-md' />
                <select value={choPhepDangKy} onChange={e => setChoPhepDangKy(e.target.value)} className='w-[45%] text-[14px] focus:outline-0 px-[10px] h-[35px] border-[#c1c1c1] border-[1px] rounded-md'>
                    <option value={true}>Cho Phép</option>
                    <option value={false}>Không Cho Phép</option>
                </select>
            </div>
            <div className='flex justify-end gap-2 mb-1'>
                <button onClick={() => adminHandler.hiddenWrapper()} className='px-4 py-1 rounded-md text-[14px] bg-red-500 text-white'>Thoát </button>
                <button onClick={() => handleCreateHocKy()} className='px-4 py-1 rounded-md text-[14px] bg-green-500 text-white'>Thêm </button>
            </div>
        </div>

    )
}

export default CreateHocKyForm