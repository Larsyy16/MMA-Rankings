import React from 'react'
import Fighters from '../components/Fighters'
import GifComponent from '../components/GifComponent'
import {Link} from 'react-router-dom'

export default function Welterweight () {

return (
<div className='container'>


    <div className="description-container">
        
        <h1 className='fighterHeader'>Leon Rocky Edwards</h1>
        <GifComponent
        src="https://giphy.com/embed/8RyyRkHMCKVllgbk9R"
        title="Leon gif"
      />

<p className="fighterParagraph">Leon Edwards is an English professional mixed martial artist who competes in the Welterweight division in the Ultimate Fighting Championship (UFC). He was born on August 25, 1991, in Kingston upon Thames, London, England. He has an impressive record of 20-3-0 (W-L-D) with 6 wins by knockout, 2 wins by submission, and 12 wins by decision. Leon Edwards is truly a great fighter!</p>


        <Link className='fighterNextButton' to='/middleweight'> Next: Middleweight</Link>

    </div>
    <Fighters weightClass={'welterweight'}/>


</div>
)


}
