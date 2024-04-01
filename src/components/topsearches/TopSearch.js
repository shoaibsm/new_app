import React, { useRef } from 'react'
import './TopSearch.scss'
import { useDispatch } from 'react-redux'
import { setUserInput } from '../../redux/slices/userInputSlice'

function TopSearch() {
    const userInputRef = useRef(null)
    const dispatch = useDispatch()

    const handleListItemClick = (text) => {
        dispatch(setUserInput(text))
    }

    return (
        <div className='TopSearch'>
            <ul ref={userInputRef} className="TopSearch__lists">
                <li className="TopSearch__listsItems" onClick={() => handleListItemClick('Top News')}>
                    Top News
                </li>
                <li className="TopSearch__listsItems" onClick={() => handleListItemClick('Finance')}>
                    Finance
                </li>
                <li className="TopSearch__listsItems" onClick={() => handleListItemClick('Technology')}>
                    Technology
                </li>
                <li className="TopSearch__listsItems" onClick={() => handleListItemClick('Science')}>
                    Science
                </li>
                <li className="TopSearch__listsItems" onClick={() => handleListItemClick('Politics')}>
                    Politics
                </li>
            </ul>
        </div>
    )
}

export default TopSearch