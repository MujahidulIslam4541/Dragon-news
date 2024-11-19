
import Header from "../Components/Header";
import RightAside from "../Components/LayoutComponent/RightAside";
import NewsDetail from "../Components/NewsDetail";


export default function NewsDetails() {
    
    
    return (
        <div>
            {/* header section */}
            <Header></Header>

            {/* main section */}
            <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-2">
                
                <section className="col-span-9">
                    <h1 className="text-xl font-bold">Dragon News</h1>
                        <NewsDetail></NewsDetail>
                </section>

                <aside className="col-span-3">
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    )
}
