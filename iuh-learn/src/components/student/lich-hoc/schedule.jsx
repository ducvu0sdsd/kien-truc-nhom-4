"use client"
import React, { useState } from 'react'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const Schedule = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className='flex flex-col overflow-x-auto gap-1'>
            <div className='flex gap-5 px-[2rem] w-full'>
                <div className='flex items-center gap-1'>
                    <input type='radio' className='translate-y-[2px]' />
                    <label className='text-[14px]'>Tất cả</label>
                </div>
                <div className='flex items-center gap-1'>
                    <input type='radio' className='translate-y-[2px]' />
                    <label className='text-[14px]'>Lịch học</label>
                </div>
                <div className='flex items-center gap-1'>
                    <input type='radio' className='translate-y-[2px]' />
                    <label className='text-[14px]'>Lịch Thi</label>
                </div>
                <div className='relative'>
                    <DatePicker className='text-[13px] rounded-md border-[1px] px-2 py-1 w-[120px]' selected={startDate} onChange={(date) => setStartDate(date)} />
                    <i className='bx bx-calendar absolute right-[10px] top-[50%] translate-y-[-50%]'></i>
                </div>
                <button className='px-3 py-[2px] rounded-md border-[1px] text-[14px] bg-[#149d14] text-[white]'>Trở về</button>
                <button className='px-3 py-[2px] rounded-md border-[1px] text-[14px] bg-[#df762f] text-[white]'>Tiếp</button>
            </div>
            <div className='w-[1000px] h-screen overflow-auto'>
                <div className='w-[1200px] justify-items-stretch grid grid-cols-8 items-stretch rounded-md overflow-hidden mt-5 ' >
                    <div className='border-[1px] font-semibold border-[#bbb] h-[70px] flex items-center justify-center'>
                        Ca Học
                    </div>
                    <div className='text-[14px] border-[1px] border-[#bbb] h-[70px] flex flex-col items-center justify-center'>
                        <span>Thứ 2</span>
                        <span>22/12/2024</span>
                    </div>
                    <div className='text-[14px] border-[1px] border-[#bbb] h-[70px] flex flex-col items-center justify-center'>
                        <span>Thứ 2</span>
                        <span>22/12/2024</span>
                    </div>
                    <div className='text-[14px] border-[1px] border-[#bbb] h-[70px] flex flex-col items-center justify-center'>
                        <span>Thứ 2</span>
                        <span>22/12/2024</span>
                    </div>
                    <div className='text-[14px] border-[1px] border-[#bbb] h-[70px] flex flex-col items-center justify-center'>
                        <span>Thứ 2</span>
                        <span>22/12/2024</span>
                    </div>
                    <div className='text-[14px] border-[1px] border-[#bbb] h-[70px] flex flex-col items-center justify-center'>
                        <span>Thứ 2</span>
                        <span>22/12/2024</span>
                    </div>
                    <div className='text-[14px] border-[1px] border-[#bbb] h-[70px] flex flex-col items-center justify-center'>
                        <span>Thứ 2</span>
                        <span>22/12/2024</span>
                    </div>
                    <div className='text-[14px] border-[1px] border-[#bbb] h-[70px] flex flex-col items-center justify-center'>
                        <span>Thứ 2</span>
                        <span>22/12/2024</span>
                    </div>
                    <div className='border-[1px] font-semibold border-[#bbb] flex flex-col items-center justify-center'>
                        Sáng
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                        <div className='bg-[#f7f7f7] p-2 rounded-lg gap-1 flex flex-col items-center justify-center'>
                            <span className='font-medium text-[14px] text-start w-full'>Kiến trúc phần mềm</span>
                            <span className='text-[13px] text-start w-full'>DHKTPM16DTT - 422000191404</span>
                            <span className='text-[13px] text-start w-full'>Tiết 4-6</span>
                            <span className='text-[13px] text-start w-full'>Phòng V14.01</span>
                            <span className='text-[13px] text-start w-full'>GV: Võ Văn Hải</span>
                        </div>
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                        <div className='bg-[#f7f7f7] p-2 rounded-lg gap-1 flex flex-col items-center justify-center'>
                            <span className='font-medium text-[14px] text-start w-full'>Kiến trúc phần mềm</span>
                            <span className='text-[13px] text-start w-full'>DHKTPM16DTT - 422000191404</span>
                            <span className='text-[13px] text-start w-full'>Tiết 4-6</span>
                            <span className='text-[13px] text-start w-full'>Phòng V14.01</span>
                            <span className='text-[13px] text-start w-full'>GV: Võ Văn Hải</span>
                        </div>
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                        <div className='bg-[#f7f7f7] p-2 rounded-lg gap-1 flex flex-col items-center justify-center'>
                            <span className='font-medium text-[14px] text-start w-full'>Kiến trúc phần mềm</span>
                            <span className='text-[13px] text-start w-full'>DHKTPM16DTT - 422000191404</span>
                            <span className='text-[13px] text-start w-full'>Tiết 4-6</span>
                            <span className='text-[13px] text-start w-full'>Phòng V14.01</span>
                            <span className='text-[13px] text-start w-full'>GV: Võ Văn Hải</span>
                        </div>
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                        <div className='bg-[#f7f7f7] p-2 rounded-lg gap-1 flex flex-col items-center justify-center'>
                            <span className='font-medium text-[14px] text-start w-full'>Kiến trúc phần mềm</span>
                            <span className='text-[13px] text-start w-full'>DHKTPM16DTT - 422000191404</span>
                            <span className='text-[13px] text-start w-full'>Tiết 4-6</span>
                            <span className='text-[13px] text-start w-full'>Phòng V14.01</span>
                            <span className='text-[13px] text-start w-full'>GV: Võ Văn Hải</span>
                        </div>
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                        <div className='bg-[#f7f7f7] p-2 rounded-lg gap-1 flex flex-col items-center justify-center'>
                            <span className='font-medium text-[14px] text-start w-full'>Kiến trúc phần mềm</span>
                            <span className='text-[13px] text-start w-full'>DHKTPM16DTT - 422000191404</span>
                            <span className='text-[13px] text-start w-full'>Tiết 4-6</span>
                            <span className='text-[13px] text-start w-full'>Phòng V14.01</span>
                            <span className='text-[13px] text-start w-full'>GV: Võ Văn Hải</span>
                        </div>
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                        <div className='bg-[#f7f7f7] p-2 rounded-lg gap-1 flex flex-col items-center justify-center'>
                            <span className='font-medium text-[14px] text-start w-full'>Kiến trúc phần mềm</span>
                            <span className='text-[13px] text-start w-full'>DHKTPM16DTT - 422000191404</span>
                            <span className='text-[13px] text-start w-full'>Tiết 4-6</span>
                            <span className='text-[13px] text-start w-full'>Phòng V14.01</span>
                            <span className='text-[13px] text-start w-full'>GV: Võ Văn Hải</span>
                        </div>
                    </div>
                    <div className='border-[1px] font-semibold border-[#bbb] flex flex-col items-center justify-center'>
                        Chiều
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                        <div className='bg-[#f7f7f7] p-2 rounded-lg gap-1 flex flex-col items-center justify-center'>
                            <span className='font-medium text-[14px] text-start w-full'>Kiến trúc phần mềm</span>
                            <span className='text-[13px] text-start w-full'>DHKTPM16DTT - 422000191404</span>
                            <span className='text-[13px] text-start w-full'>Tiết 4-6</span>
                            <span className='text-[13px] text-start w-full'>Phòng V14.01</span>
                            <span className='text-[13px] text-start w-full'>GV: Võ Văn Hải</span>
                        </div>
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                        <div className='bg-[#f7f7f7] p-2 rounded-lg gap-1 flex flex-col items-center justify-center'>
                            <span className='font-medium text-[14px] text-start w-full'>Kiến trúc phần mềm</span>
                            <span className='text-[13px] text-start w-full'>DHKTPM16DTT - 422000191404</span>
                            <span className='text-[13px] text-start w-full'>Tiết 4-6</span>
                            <span className='text-[13px] text-start w-full'>Phòng V14.01</span>
                            <span className='text-[13px] text-start w-full'>GV: Võ Văn Hải</span>
                        </div>
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                        <div className='bg-[#f7f7f7] p-2 rounded-lg gap-1 flex flex-col items-center justify-center'>
                            <span className='font-medium text-[14px] text-start w-full'>Kiến trúc phần mềm</span>
                            <span className='text-[13px] text-start w-full'>DHKTPM16DTT - 422000191404</span>
                            <span className='text-[13px] text-start w-full'>Tiết 4-6</span>
                            <span className='text-[13px] text-start w-full'>Phòng V14.01</span>
                            <span className='text-[13px] text-start w-full'>GV: Võ Văn Hải</span>
                        </div>
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                        <div className='bg-[#f7f7f7] p-2 rounded-lg gap-1 flex flex-col items-center justify-center'>
                            <span className='font-medium text-[14px] text-start w-full'>Kiến trúc phần mềm</span>
                            <span className='text-[13px] text-start w-full'>DHKTPM16DTT - 422000191404</span>
                            <span className='text-[13px] text-start w-full'>Tiết 4-6</span>
                            <span className='text-[13px] text-start w-full'>Phòng V14.01</span>
                            <span className='text-[13px] text-start w-full'>GV: Võ Văn Hải</span>
                        </div>
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                        <div className='bg-[#f7f7f7] p-2 rounded-lg gap-1 flex flex-col items-center justify-center'>
                            <span className='font-medium text-[14px] text-start w-full'>Kiến trúc phần mềm</span>
                            <span className='text-[13px] text-start w-full'>DHKTPM16DTT - 422000191404</span>
                            <span className='text-[13px] text-start w-full'>Tiết 4-6</span>
                            <span className='text-[13px] text-start w-full'>Phòng V14.01</span>
                            <span className='text-[13px] text-start w-full'>GV: Võ Văn Hải</span>
                        </div>
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                        <div className='bg-[#f7f7f7] p-2 rounded-lg gap-1 flex flex-col items-center justify-center'>
                            <span className='font-medium text-[14px] text-start w-full'>Kiến trúc phần mềm</span>
                            <span className='text-[13px] text-start w-full'>DHKTPM16DTT - 422000191404</span>
                            <span className='text-[13px] text-start w-full'>Tiết 4-6</span>
                            <span className='text-[13px] text-start w-full'>Phòng V14.01</span>
                            <span className='text-[13px] text-start w-full'>GV: Võ Văn Hải</span>
                        </div>
                    </div>
                    <div className='border-[1px] font-semibold border-[#bbb] flex flex-col items-center justify-center'>
                        Tối
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                        <div className='bg-[#f7f7f7] p-2 rounded-lg gap-1 flex flex-col items-center justify-center'>
                            <span className='font-medium text-[14px] text-start w-full'>Kiến trúc phần mềm</span>
                            <span className='text-[13px] text-start w-full'>DHKTPM16DTT - 422000191404</span>
                            <span className='text-[13px] text-start w-full'>Tiết 4-6</span>
                            <span className='text-[13px] text-start w-full'>Phòng V14.01</span>
                            <span className='text-[13px] text-start w-full'>GV: Võ Văn Hải</span>
                        </div>
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                        <div className='bg-[#f7f7f7] p-2 rounded-lg gap-1 flex flex-col items-center justify-center'>
                            <span className='font-medium text-[14px] text-start w-full'>Kiến trúc phần mềm</span>
                            <span className='text-[13px] text-start w-full'>DHKTPM16DTT - 422000191404</span>
                            <span className='text-[13px] text-start w-full'>Tiết 4-6</span>
                            <span className='text-[13px] text-start w-full'>Phòng V14.01</span>
                            <span className='text-[13px] text-start w-full'>GV: Võ Văn Hải</span>
                        </div>
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                        <div className='bg-[#f7f7f7] p-2 rounded-lg gap-1 flex flex-col items-center justify-center'>
                            <span className='font-medium text-[14px] text-start w-full'>Kiến trúc phần mềm</span>
                            <span className='text-[13px] text-start w-full'>DHKTPM16DTT - 422000191404</span>
                            <span className='text-[13px] text-start w-full'>Tiết 4-6</span>
                            <span className='text-[13px] text-start w-full'>Phòng V14.01</span>
                            <span className='text-[13px] text-start w-full'>GV: Võ Văn Hải</span>
                        </div>
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                        <div className='bg-[#f7f7f7] p-2 rounded-lg gap-1 flex flex-col items-center justify-center'>
                            <span className='font-medium text-[14px] text-start w-full'>Kiến trúc phần mềm</span>
                            <span className='text-[13px] text-start w-full'>DHKTPM16DTT - 422000191404</span>
                            <span className='text-[13px] text-start w-full'>Tiết 4-6</span>
                            <span className='text-[13px] text-start w-full'>Phòng V14.01</span>
                            <span className='text-[13px] text-start w-full'>GV: Võ Văn Hải</span>
                        </div>
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                        <div className='bg-[#f7f7f7] p-2 rounded-lg gap-1 flex flex-col items-center justify-center'>
                            <span className='font-medium text-[14px] text-start w-full'>Kiến trúc phần mềm</span>
                            <span className='text-[13px] text-start w-full'>DHKTPM16DTT - 422000191404</span>
                            <span className='text-[13px] text-start w-full'>Tiết 4-6</span>
                            <span className='text-[13px] text-start w-full'>Phòng V14.01</span>
                            <span className='text-[13px] text-start w-full'>GV: Võ Văn Hải</span>
                        </div>
                    </div>
                    <div className='border-[1px] gap-2 p-2 text-start border-[#bbb] flex flex-col items-center justify-center'>
                        <div className='bg-[#f7f7f7] p-2 rounded-lg gap-1 flex flex-col items-center justify-center'>
                            <span className='font-medium text-[14px] text-start w-full'>Kiến trúc phần mềm</span>
                            <span className='text-[13px] text-start w-full'>DHKTPM16DTT - 422000191404</span>
                            <span className='text-[13px] text-start w-full'>Tiết 4-6</span>
                            <span className='text-[13px] text-start w-full'>Phòng V14.01</span>
                            <span className='text-[13px] text-start w-full'>GV: Võ Văn Hải</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule