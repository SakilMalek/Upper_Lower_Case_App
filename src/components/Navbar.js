import React from 'react'
// import Propstypes from 'Proptypes's
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Demo-Web</a> */}
                    <Link className="navbar-brand" to="/">Demo-Web</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                                {/* <a className="nav-link" href="/About">About</a> */}
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-warning" type="submit">Search</button>
                        </form>
                        <div className={`form-check form-switch mx-1 my-3  text-${props.Mode === 'light' ? 'black' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.Text}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
