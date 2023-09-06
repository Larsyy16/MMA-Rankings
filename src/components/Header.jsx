import {Link} from 'react-router-dom'


export default function Header() {

    return(
    <header>
        <img src='./src/assets/mma-logo.png' className='siteLogo'/>

    <nav>
    <Link className='site-logo' to='/'> UFC Rankings</Link>

    <Link to="https://www.ufc.com/events" className='ufcLink'>Next Event</Link>
    </nav>

    </header>
    )

}