
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/img/dc-logo.png'
import AppHeader from './assets/components/AppHeader'
import AppContent from './assets/components/AppContent'
import AppBar from './assets/components/AppBar'
import AppMain from './assets/components/AppMain'
import AppFooter from './assets/components/AppFooter'
import menu from './assets/components/data/header_menu'
import mainMenu from './assets/components/data/main_menu'
import list_comics from './assets/components/data/list_comics'
function App() {

  return (
    <>
      <AppHeader menu={menu} />
      <AppContent list_comics={list_comics} />
      <AppBar />
      <AppMain mainMenu={mainMenu} />
      <AppFooter />
    </>
  )
}

export default App
