import {useState, useEffect} from 'react'



export default function Test () {

    const    [rankings,setRankings] = useState([]);

    useEffect(() => {
        fetch(`http://api.sportradar.us/mma/trial/v2/en/rankings.json?api_key=${import.meta.env.VITE_API_KEY}`)
        .then(res=>res.json())
        .then(data=>setRankings(data))
    },[])

console.log(rankings)

}