import logo from '../img/dc-logo.png'
export default function AppHeader() {
    return (
        <>
            <header>
                <div className='logo'>
                    <img src={logo} alt="DC logo" />
                </div>
                <nav>
                    <ul>
                        <li>CHARACTERS</li>
                        <li>COMICS</li>
                        <li>MOVIES</li>
                        <li>TV</li>
                        <li>GAMES</li>
                        <li>COLLECTIBLES</li>
                        <li>VIDEOS</li>
                        <li>FANS</li>
                        <li>NEWS</li>
                        <li>SHOP</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}