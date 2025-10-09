import logo from '../img/dc-logo.png'
import AppNav from './AppNav'
/*import menu from '../components/data/header_menu'*/
export default function AppHeader({ menu }) {
    return (
        <>
            <header>
                <div className='logo'>
                    <img src={logo} alt="DC logo" />
                </div>
                <AppNav menu={menu} />
            </header>
        </>
    )
}