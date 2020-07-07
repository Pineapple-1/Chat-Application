import React  from 'react'
import './infobar.css'

import onlineIcon from '../images/onlineIcon.png'
import closeIcon from '../images/closeIcon.png'
const InfoBar=({Room})=>{


    return (
        <div className='infoBar '>
             <div className='leftInnerContainer'>
                <img className='onlineIcon' src={onlineIcon} alt="online icon"/>
                <h3>{Room}</h3>


             </div>


             <div className='rightInnerContainer'>
                 <a href="/"><img src={closeIcon} alt="close icon"/></a>
                
                


             </div>
        </div>
        
        )
}
export default InfoBar