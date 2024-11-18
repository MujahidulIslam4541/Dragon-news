import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function AuthLayout() {
    return (
        <div className="bg-[#F3F3F3]">
            <header className="w-11/12 mx-auto py-3 ">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    )
}
