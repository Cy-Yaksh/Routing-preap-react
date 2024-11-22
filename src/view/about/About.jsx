import { NavLink, Outlet } from "react-router-dom";

export default function About(){
    return (
        <>
        <h1>hii from about</h1>
        <li> <NavLink to={'/about/company'}>child</NavLink></li>
        {/* <Outlet/> */}
        </>
    )
}