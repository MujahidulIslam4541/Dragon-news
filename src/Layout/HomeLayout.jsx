import React from 'react'
import Header from '../Components/Header'
import LatestNews from '../Components/LatestNews'
import Navbar from '../Components/Navbar'

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
                <aside className='col-span-3'>Lest side</aside>
                <section className='col-span-6'> Main content</section>
                <aside className='col-span-3'>right side</aside>
            </main>


        </div>
    )
}
