import { useState, useEffect } from 'react'
import { v4 as uuidv4} from 'uuid'

export default function Fighters() {
    const [fighters,setFighters] = useState([])
    useEffect(() => {
        fetch('api/data')
            .then(res => res.json())
            .then(data => setFighters(data.rankings[0].competitor_rankings))
    },[])

    // const pfp = fighters[0].map((fighter) => (
    //     <p key={uuidv4()}> {fighter.rank}</p>
    // ))
    
    // const pfp = fighters[0].competitor_rankings
//     console.log(typeof(fighters))
    console.log(fighters)

   const pfp = fighters.map((ranking) => (
    ranking.rank
   ))

   const pfpName = fighters.map((ranking)=> (

    <div key={uuidv4()} className='pfp'>
        <h3>{ranking.competitor.name}</h3>



    </div>
   ))
   console.log(typeof(pfp))

    return(
        <>        

            {pfpName}
        </>
    )
}