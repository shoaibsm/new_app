import React, { useRef } from 'react'
import './Navbar.scss'
import brandLogo from '../../assets/HN_logo.png'
import { IoSearchOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { fetchData } from '../../redux/slices/newsSlice';
import { setUserInput } from '../../redux/slices/userInputSlice'

function Navbar() {
    const dispatch = useDispatch();
    const userInputRef = useRef(null)

    function handleFechData() {
        const inputText = userInputRef.current.value
        dispatch(setUserInput(inputText))
        dispatch(fetchData())
    }

    return (
        <div className='Navbar'>
            <div className="Navbar__logoContainer">
                <img className='Navbar__logo' src={brandLogo} alt="Hindustan Times" />
            </div>
            <div className="Navbar__searchBox">
                <div className="searchLogo">
                    <IoSearchOutline />
                </div>
                <input type="text" ref={userInputRef} />
                <button className='Navbar__btn--search' onClick={handleFechData}>Search</button>
            </div>
            <div className="Navbar__rightSide">
                <div className="Navbar__bellIcon">
                    <FaBell />
                </div>
                <div className="Navbar__userProfile">
                    <FaUserCircle />
                </div>
            </div>
        </div>
    )
}

export default Navbar