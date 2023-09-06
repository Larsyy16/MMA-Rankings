import React from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4} from 'uuid'

export default function Fighters() {
    const [fighters,setFighters] = useState([])


  useEffect(() => {
    fetch('api/data')
      .then(res => res.json())
      .then(data => setFighters(data.rankings[0].competitor_rankings))
    },[])



   const pfpName = fighters.map((ranking,index)=> (

    <div key={uuidv4()} className='pfp'>
        <h3><span>#{index + 1} </span>{ranking.competitor.name}</h3>



    </div>
   ))

    return(
        <>        
    <h4> {pfpName}</h4>
        </>
    )
}