import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
    return <>
        <div className="d-flex  mb-6  fs-6" id="navbar">
            <NavLink to="/" className= "m-4 text-light text-decoration-none mx-5">🏡 Home</NavLink>
            <NavLink to="/Contact" className= "m-4 text-light text-decoration-none mx-5">📒 Contacto</NavLink>
            <div className="ms-auto p-4 text-light mx-5">Happy Cake 🍰</div>
        </div>
    </>
}