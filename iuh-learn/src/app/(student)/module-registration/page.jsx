import React from 'react'

const ModuleRegistration = () => {
    return (
        <section className='h-screen w-full flex'>
            <Navbar />
            <div className='w-full h-screen px-[20px] pb-[10px] flex flex-col gap-3'>
                <Header image={'/student.png'} text={'Đăng Ký Học Phần'} />

            </div>
        </section>
    )
}

export default ModuleRegistration