import cardStyle from './Card.module.css';
import React, { useState } from 'react';



const Card = ({data}) => {
  const [lgImg, setlgImg] = useState(true)
  const {name, img, options} = data
  return (
    <div className={cardStyle['container']}> 
          
          <div className={cardStyle['card']} onClick={()=> setlgImg(!lgImg)} >
            {lgImg && <div><img src={img} alt={name} />
            <p>{name}</p> </div> }
            { !lgImg && <div >
            <ul className={cardStyle['propList']} >
             {
                options.map((item)=>{
                    return <li>{item}</li>
                })
            }
            </ul></div> }
        </div>
    </div>
  )
}

export default Card;