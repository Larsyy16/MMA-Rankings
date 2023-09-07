import React from 'react'
import Fighters from '../components/Fighters'
import GifComponent from '../components/GifComponent'
import {Link} from 'react-router-dom'

export default function Wsw () {

return (
<div className='container'>

    <div className="description-container">
        
        <h1 className='fighterHeader'>Alexa Grasso</h1>
        <GifComponent
        src="https://giphy.com/embed/YluBsIsI9q2byEjijb"
        title="Alexa Grasso Sticker"
      />

        <p className='fighterParagraph'>Alexa Grasso is a Mexican professional mixed martial artist who competes in the women’s Flyweight division of the Ultimate Fighting Championship (UFC). She has an impressive record of 16 wins and 3 losses in her professional career1. Grasso made her professional MMA debut in December 2012 in her native Mexico. During the first eighteen months of her career, she amassed an undefeated record of 5 wins (3 by TKO, 2 by decision) and 0 losses1. She is also a UFC analyst for UFC Español for Spanish broadcasts1.
Grasso has had many triumphs throughout her career. She defeated Valentina Shevchenko for the flyweight championship at UFC 2862. She is also ranked #1 in the UFC women’s pound-for-pound rankings.</p>

        
        <Link className='fighterNextButton' to='/womens_bantamweight'> Next: Women's Bantamweight</Link>

    </div>
    <Fighters weightClass={'womens_flyweight'}/>


</div>
)


}
