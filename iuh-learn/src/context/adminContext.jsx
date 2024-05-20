'use client'
import CreateChuyenNganhForm from '@/components/admin/chuyen-nganh-management/createChuyenNganhFrom'
import UpdateChuyenNganhForm from '@/components/admin/chuyen-nganh-management/updateChuyenNganhForm'
import CreateGiaoVienForm from '@/components/admin/giao-vien-management/createGiaoVienFrom'
import UpdateGiaoVienForm from '@/components/admin/giao-vien-management/updateGiaoVienForm'
import CreateHeDaoTaoForm from '@/components/admin/he-dao-tao-management/createheDaoTaoForm'
import UpdateHeDaoTaoForm from '@/components/admin/he-dao-tao-management/updateHeDaoTaoForm'
import CreateHocKyForm from '@/components/admin/hoc-ky-management/createHocKyForm'
import UpdateHocKyForm from '@/components/admin/hoc-ky-management/updateHocKyForm'
import CreateHocPhanForm from '@/components/admin/hoc-phan-management/createHocPhanForm'
import CreateKhoaForm from '@/components/admin/khoa-management/createKhoaForm'
import UpdateKhoaForm from '@/components/admin/khoa-management/updateKhoaForm'
import UpdateUserForm from '@/components/admin/khoa-management/updateKhoaForm'
import CreateLopForm from '@/components/admin/lop-management/createLopForm'
import UpdateLopForm from '@/components/admin/lop-management/updateLopForm'
import CreateMonHocForm from '@/components/admin/mon-hoc-management/createMonHocForm'
import UpdateMonHocForm from '@/components/admin/mon-hoc-management/updateMonHocForm'
import CreatePhongForm from '@/components/admin/phong-management/createPhongForm'
import UpdatePhongForm from '@/components/admin/phong-management/updatePhongForm'
import CreateUserForm from '@/components/admin/student-management/createUserForm'
import UpdateStudentForm from '@/components/admin/student-management/updateStudentForm'
import Wrapper from '@/components/wrapper'
import React, { createContext, useRef, useState } from 'react'

export const adminContext = createContext()

const AdminProvider = ({ children }) => {
    const [visibleCreateUserForm, setVisibleCreateUserForm] = useState(false)
    const [visibleCreateLopForm, setVisibleCreateLopForm] = useState(false)
    const [visibleCreateKhoaForm, setVisibleCreateKhoaForm] = useState(false)
    const [visibleCreateHocKyForm, setVisibleCreateHocKyForm] = useState(false)
    const [visibleCreateHocPhanForm, setVisibleCreateHocPhanForm] = useState(false)
    const [visibleCreateMonHocForm, setVisibleCreateMonHocForm] = useState(false)
    const [visibleCreateGiaoVienForm, setVisibleCreateGiaoVienForm] = useState(false)
    const [visibleCreateHeDaoTaoForm, setVisibleCreateHeDaoTaoForm] = useState(false)
    const [visibleCreateChuyenNganhForm, setVisibleCreateChuyenNganhForm] = useState(false)
    const [visibleCreatePhongForm, setVisibleCreatePhongForm] = useState(false)
    const [visibleWrapper, setVisibleWrapper] = useState(false)

    // update
    const [dataUpdateKhoa, setDataUpdateKhoa] = useState(undefined)
    const [dataUpdateGiaoVien, setDataUpdateGiaoVien] = useState(undefined)
    const [dataUpdateHeDaoTao, setDataUpdateHeDaoTao] = useState(undefined)
    const [dataUpdatePhong, setDataUpdatePhong] = useState(undefined)
    const [dataUpdateLop, setDataUpdateLop] = useState(undefined)
    const [dataUpdateMonHoc, setDataUpdateMonHoc] = useState(undefined)
    const [dataUpdateHocKy, setDataUpdateHocKy] = useState(undefined)
    const [dataUpdateStudent, setDataUpdateStudent] = useState(undefined)
    const [dataUpdateChuyenNganh, setDataUpdateChuyenNganh] = useState(undefined)

    const showWrapper = () => {
        setVisibleWrapper(true)
    }

    const hiddenWrapper = () => {
        setVisibleWrapper(false)
        setVisibleCreateKhoaForm(false)
        setVisibleCreateLopForm(false)
        setVisibleCreateUserForm(false)
        setVisibleCreateChuyenNganhForm(false)
        setVisibleCreateHocKyForm(false)
        setVisibleCreateMonHocForm(false)
        setVisibleCreateHocPhanForm(false)
        setVisibleCreateGiaoVienForm(false)
        setVisibleCreateHeDaoTaoForm(false)
        setVisibleCreatePhongForm(false)
        //update
        setDataUpdateKhoa(undefined)
        setDataUpdateGiaoVien(undefined)
        setDataUpdateHeDaoTao(undefined)
        setDataUpdatePhong(undefined)
        setDataUpdateLop(undefined)
        setDataUpdateMonHoc(undefined)
        setDataUpdateHocKy(undefined)
        setDataUpdateStudent(undefined)
        setDataUpdateChuyenNganh(undefined)
    }

    const showCreateUserForm = () => {
        showWrapper();
        setVisibleCreateUserForm(true)
    }

    const showCreateKhoaForm = () => {
        showWrapper();
        setVisibleCreateKhoaForm(true)
    }

    const showCreateLopForm = () => {
        showWrapper();
        setVisibleCreateLopForm(true)
    }

    const showCreateChuyenNganhForm = () => {
        showWrapper();
        setVisibleCreateChuyenNganhForm(true)
    }

    const showCreateMonHocForm = () => {
        showWrapper();
        setVisibleCreateMonHocForm(true)
    }

    const showCreateHocKyForm = () => {
        showWrapper();
        setVisibleCreateHocKyForm(true)
    }

    const showCreateHocPhanForm = () => {
        showWrapper();
        setVisibleCreateHocPhanForm(true)
    }

    const showCreateGiaoVienForm = () => {
        showWrapper();
        setVisibleCreateGiaoVienForm(true)
    }
    const showCreateHeDaoTaoForm = () => {
        showWrapper();
        setVisibleCreateHeDaoTaoForm(true)
    }

    const showCreatePhongForm = () => {
        showWrapper();
        setVisibleCreatePhongForm(true)
    }

    const showUpdateKhoaForm = (data) => {
        showWrapper();
        setDataUpdateKhoa(data)
    }
    const showUpdateGiaoVienForm = (data) => {
        showWrapper();
        setDataUpdateGiaoVien(data)
    }
    const showUpdateHeDaoTaoForm = (data) => {
        showWrapper();
        setDataUpdateHeDaoTao(data)
    }
    const showUpdatePhong = (data) => {
        showWrapper();
        setDataUpdatePhong(data)
    }
    const showUpdateLop = (data) => {
        showWrapper();
        setDataUpdateLop(data)
    }
    const showUpdateMonHocForm = (data) => {
        showWrapper();
        setDataUpdateMonHoc(data)
    }
    const showUpdateHocKyForm = (data) => {
        showWrapper();
        setDataUpdateHocKy(data)
    }
    const showUpdateStudentForm = (data) => {
        showWrapper();
        setDataUpdateStudent(data)
    }
    const showUpdateChuyenNganhForm = (data) => {
        showWrapper();
        setDataUpdateChuyenNganh(data)
    }

    const adminData = {
        visibleCreateKhoaForm,
        visibleCreateChuyenNganhForm,
        visibleCreateLopForm,
        visibleCreateMonHocForm,
        visibleCreateHocPhanForm,
        visibleCreateGiaoVienForm,
        visibleCreateHeDaoTaoForm,
        visibleCreatePhongForm,
        //update
        dataUpdateKhoa,
        dataUpdateGiaoVien,
        dataUpdateHeDaoTao,
        dataUpdatePhong,
        dataUpdateLop,
        dataUpdateMonHoc,
        dataUpdateHocKy,
        dataUpdateStudent,
        dataUpdateChuyenNganh
    }

    const adminHandler = {
        showCreateUserForm,
        showCreateKhoaForm,
        showCreateChuyenNganhForm,
        showCreateLopForm,
        showCreateMonHocForm,
        showCreateHocKyForm,
        showCreateHocPhanForm,
        showCreateGiaoVienForm,
        showCreateHeDaoTaoForm,
        //update
        showUpdateKhoaForm,
        showUpdateGiaoVienForm,
        showCreatePhongForm,
        showUpdateHeDaoTaoForm,
        showUpdatePhong,
        showUpdateLop,
        showUpdateMonHocForm,
        showUpdateHocKyForm,
        showUpdateStudentForm,
        showUpdateChuyenNganhForm,
        hiddenWrapper
    }

    return (
        <adminContext.Provider value={{ adminData, adminHandler }}>
            {children}
            <Wrapper onClick={() => hiddenWrapper()} visible={visibleWrapper} />
            <CreateUserForm visible={visibleCreateUserForm} />
            <CreateLopForm visible={visibleCreateLopForm} />
            <CreateKhoaForm visible={visibleCreateKhoaForm} />
            <CreateChuyenNganhForm visible={visibleCreateChuyenNganhForm} />
            <CreateMonHocForm visible={visibleCreateMonHocForm} />
            <CreateHocKyForm visible={visibleCreateHocKyForm} />
            <CreateHocPhanForm visible={visibleCreateHocPhanForm} />
            <CreateGiaoVienForm visible={visibleCreateGiaoVienForm} />
            <CreateHeDaoTaoForm visible={visibleCreateHeDaoTaoForm} />
            <CreatePhongForm visible={visibleCreatePhongForm} />
            <UpdateKhoaForm data={dataUpdateKhoa} />
            <UpdateGiaoVienForm data={dataUpdateGiaoVien} />
            <UpdateHeDaoTaoForm data={dataUpdateHeDaoTao} />
            <UpdatePhongForm data={dataUpdatePhong} />
            <UpdateLopForm data={dataUpdateLop} />
            <UpdateMonHocForm data={dataUpdateMonHoc} />
            <UpdateHocKyForm data={dataUpdateHocKy} />
            <UpdateStudentForm data={dataUpdateStudent} />
            <UpdateChuyenNganhForm data={dataUpdateChuyenNganh} />
        </adminContext.Provider>
    )
}

export default AdminProvider