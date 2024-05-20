import { adminContext } from '@/context/adminContext'
import { globalContext, notifyType } from '@/context/globalContext'
import { TypeHTTP, api } from '@/utils/api'
import { ports } from '@/utils/routes'
import React, { useContext, useEffect, useState } from 'react'

const ListHeDaoTao = ({ dsHeDaoTao }) => {

    const { globalHandler } = useContext(globalContext)
    const { adminHandler } = useContext(adminContext)


    const handleDeleteHeDaoTao = (id) => {
        globalHandler.notify(notifyType.LOADING, "Đang Xóa Hệ Đào Tạo")
        api({ port: ports.otherServiceURL, type: TypeHTTP.DELETE, sendToken: true, path: `/hedaotao/${id}` })
            .then(res => {
                globalHandler.notify(notifyType.SUCCESS, "Xóa Hệ Đào Tạo Thành Công")
                globalHandler.reload()
            })
    }

    return (
        <div className='w-[96%] h-[90%] overflow-y-auto mt-2'>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="sticky top-0 left-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 w-[90%]">
                            Tên Hệ Đào Tạo
                        </th>
                        <th scope="col" className="px-6 py-3 w-[90%]">
                            Đơn Giá
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Các Thao Tác
                        </th>
                    </tr>
                </thead>
                <tbody className=' w-full bg-black'>
                    {dsHeDaoTao.map((heDaoTao, index) => (
                        <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {heDaoTao.tenHeDaoTao}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {heDaoTao.giaTien}
                            </td>
                            <td className="px-6 py-4 flex items-center gap-1">
                                <button onClick={() => adminHandler.showUpdateHeDaoTaoForm(heDaoTao)} className='px-4 py-1 rounded-md text-[14px] bg-[blue] text-white'>Sửa</button>
                                <button onClick={() => handleDeleteHeDaoTao(heDaoTao.maHeDaoTao)} className='px-4 py-1 rounded-md text-[14px] bg-[red] text-white'>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListHeDaoTao