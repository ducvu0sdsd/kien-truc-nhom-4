import { adminContext } from '@/context/adminContext'
import { globalContext, notifyType } from '@/context/globalContext'
import { TypeHTTP, api } from '@/utils/api'
import { convertISODateToString } from '@/utils/others'
import { ports } from '@/utils/routes'
import React, { useContext } from 'react'

const ListGiaoVien = ({ dsGiaoVien }) => {

    const { globalHandler } = useContext(globalContext)
    const { adminHandler } = useContext(adminContext)

    const handleDeleteGiaoVien = (id) => {
        globalHandler.notify(notifyType.LOADING, "Đang Xóa Giáo Viên")
        api({ port: ports.otherServiceURL, type: TypeHTTP.DELETE, sendToken: true, path: `/giaovien/${id}` })
            .then(res => {
                globalHandler.notify(notifyType.SUCCESS, "Xóa Giáo Viên Thành Công")
                globalHandler.reload()
            })
    }

    return (
        <div className='w-full h-[90%] overflow-auto mt-2'>
            <table className="text-sm text-[15px] text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="sticky top-0 left-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Họ và tên
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ngày sinh
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Số Điện Thoại
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nơi sinh
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Giới tính
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Địa chỉ
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Dân tộc
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Khoa
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Các Thao Tác
                        </th>
                    </tr>
                </thead>
                <tbody className=' bg-black'>
                    {dsGiaoVien.map((giaovien, index) => (
                        <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 whitespace-nowrap">{giaovien.hoTen}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{convertISODateToString(giaovien.ngaySinh)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{giaovien.soDienThoai}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{giaovien.noiSinh}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{giaovien.gioiTinh === true ? "Nam" : "Nữ"}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{giaovien.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{giaovien.diaChi}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{giaovien.danToc}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{giaovien.khoa.tenKhoa}</td>
                            <td className="px-6 py-4 flex items-center gap-1">
                                <button onClick={() => adminHandler.showUpdateGiaoVienForm(giaovien)} className='px-4 py-1 rounded-md text-[14px] bg-[blue] text-white'>Sửa</button>
                                <button onClick={() => handleDeleteGiaoVien(giaovien.maGiaoVien)} className='px-4 py-1 rounded-md text-[14px] bg-[red] text-white'>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListGiaoVien