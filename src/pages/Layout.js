import { Outlet, Link } from 'react-router-dom';
import logoKasa from '../img/logoKasa.svg'

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><img src={logoKasa} alt="Logo Kasa" /></li>
                </ul>
                <ul className='linkNav'>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/About">A propos</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;