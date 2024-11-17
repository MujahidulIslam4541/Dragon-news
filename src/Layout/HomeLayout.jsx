import React from 'react'
import Header from '../Components/Header'
import LatestNews from '../Components/LatestNews'
import Navbar from '../Components/Navbar'
import LeftAside from '../Components/LayoutComponent/LeftAside'
import RightAside from '../Components/LayoutComponent/RightAside'

export default function HomeLayout() {
    return (
        <div>
            {/* Header section */}

            <Header></Header>

            <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
            </section>


            {/* nav section */}
            <section className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
            </section>



            {/* Main section */}
            <main className='w-11/12 mx-auto pt-10 grid md:grid-cols-12 gap-2'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'> Main content</section>


                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>


        </div>
    )
}
