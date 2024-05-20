import { globalContext, notifyType } from '@/context/globalContext'
import { TypeHTTP, api } from '@/utils/api'
import { ports } from '@/utils/routes'
import React, { useContext } from 'react'

const ListHocPhan = ({ dsHocPhan }) => {
    console.log(dsHocPhan)
    const { globalHandler } = useContext(globalContext)

    const handleDeleteHocPhan = (id, _id) => {
        globalHandler.notify(notifyType.LOADING, "Đang Xóa Học Phần")
        api({ port: ports.otherServiceURL, type: TypeHTTP.DELETE, sendToken: true, path: `/hocphan/${Number(id)}` })
            .then(res => {
                api({ port: ports.studyServiceURL, type: TypeHTTP.DELETE, sendToken: true, path: `/study/delete-thong-tin-hoc-phan/${_id}` })
                    .then(res => {
                        globalHandler.notify(notifyType.SUCCESS, "Xóa Học Phần Thành Công")
                        globalHandler.reload()
                    })
            })
    }

    return (
        <div className='w-[96%] h-[90%] overflow-y-auto mt-2'>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="sticky top-0 left-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Môn Học
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Lớp Học
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Bắt Buộc
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Môn Tiên Quyết
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Học Trước
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Song Hành
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tiết Lý Thuyết
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tiết Thực Hành
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Học Kỳ
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
                                {hocphan?.monHoc.tenMon}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {hocphan?.lop.tenLop}
                            </td>
                            <td scope="row" style={{ color: hocphan?.thongTin.batBuoc ? "green" : 'black' }} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {hocphan?.thongTin.batBuoc ? "Bắt Buộc" : "Không Bắt Buộc"}
                            </td>
                            <td scope="row" style={{ color: hocphan?.thongTin.tienQuyet ? "green" : 'black' }} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {hocphan?.thongTin.tienQuyet ? "Tiên Quyết" : "Không Tiên Quyết"}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {hocphan?.thongTin.hocTruoc.map((item, index) => (
                                    <span>{`${index > 0 ? ', ' : ''}${item.tenMon}`}</span>
                                ))}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {hocphan?.thongTin.songHanh.map((item, index) => (
                                    <span>{`${index > 0 ? ', ' : ''}${item.tenMon}`}</span>
                                ))}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {hocphan?.thongTin?.tietLyThuyet.map((item) => `Thứ ${item.ngay} - Tiết (${item.tiet}) - Phòng (${item.phong.tenPhong}) `)}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium flex flex-col text-gray-900 whitespace-nowrap dark:text-white">
                                {hocphan?.thongTin?.tietThucHanh.map((item, index) => (
                                    <span>{`${hocphan?.thongTin?.tietThucHanh.length > 1 ? `Nhóm (${index + 1}) - ` : ''}${item.ngay === 1 ? 'Chủ Nhật' : 'Thứ ' + item.ngay} - Tiết (${item.tiet}) - Phòng (${item.phong.tenPhong})`}</span>
                                ))}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {hocphan?.hocKy.tenHocKy}
                            </td>
                            <td className="px-6 py-4 flex items-center gap-1">
                                <button className='px-4 py-1 rounded-md text-[14px] bg-[blue] text-white'>Sửa</button>
                                <button onClick={() => handleDeleteHocPhan(hocphan?.maHocPhan, hocphan?.thongTin?._id)} className='px-4 py-1 rounded-md text-[14px] bg-[red] text-white'>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListHocPhan