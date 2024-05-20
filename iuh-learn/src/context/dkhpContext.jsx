'use client'
const { createContext } = require("react");
import Notification from '@/components/notification';
import { kiemTrLichTrung } from '@/utils/dkhp';

import React, { useEffect, useState } from 'react'
export const dkhpContext = createContext();

const DkhpProvider = ({ children }) => {

    const [step, setStep] = useState(1)
    const [hocPhanHienTai, setHocPhanHienTai] = useState()
    const [dsHocPhanDaDangKy, setDsHocPhanDaDangKy] = useState([])
    const [dsHocPhan, setDsHocPhan] = useState([])

    const kiemTraLichTrung = (tietLyThuyet, tietThucHanh) => {
        return kiemTrLichTrung(tietLyThuyet, tietThucHanh, dsHocPhanDaDangKy)
    }

    const data = {
        step,
        hocPhanHienTai,
        dsHocPhanDaDangKy,
        dsHocPhan
    }

    const handler = {
        setStep,
        setHocPhanHienTai,
        setDsHocPhanDaDangKy,
        kiemTraLichTrung,
        setDsHocPhan
    }

    return (
        <dkhpContext.Provider value={{ dkhpData: data, dkhpHandler: handler }}>
            {children}
        </dkhpContext.Provider>
    )
}

export default DkhpProvider