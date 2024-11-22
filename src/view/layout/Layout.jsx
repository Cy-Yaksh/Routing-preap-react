import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import '../layout/layout.css'


export default function Layout(){
    
    return (
        <>
        <section>
            <header>
                <Navbar/>
            </header>
            {/* main */}
            <main>
                <Outlet/>
            </main>
            {/* footer */}
            <Footer/>
        
        </section>
        </>
    )
}