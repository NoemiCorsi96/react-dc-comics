import AppMainNav from './AppMainNav'
/*import mainMenu from '../components/data/main_menu'*/
export default function AppMain({ mainMenu }) {
    return (

        <main>
            <AppMainNav mainMenu={mainMenu} />
        </main>

    )
}