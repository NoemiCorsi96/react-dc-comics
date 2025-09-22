
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/img/dc-logo.png'

function App() {

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
      <main>
        <h2>--&gt; Content goes here &lt;--</h2>
      </main>
      <section className='blueBar'>
        <ul>
          <li>DIGITAL COMICS</li>
          <li>DC MERCHANDISE</li>
          <li>SUBSCRIPTION</li>
          <li>COMIC SHOP LOCATOR</li>
          <li>DC POWER VISA</li>
        </ul>
      </section>

      <footer>
        <div className='links'>
          <div>
            <h4>DC COMICS</h4>
            <ul>
              <li>Characters</li>
              <li>Comics</li>
              <li>Movies</li>
              <li>TV</li>
              <li>Games</li>
              <li>Videos</li>
              <li>News</li>
            </ul>
          </div>
          <div>
            <h4>DC</h4>
            <ul>
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
              <li>Ad Choices</li>
              <li>Advertising</li>
              <li>Jobs</li>
              <li>Subscriptions</li>
              <li>Talent Workshops</li>
              <li>Ratings</li>
              <li>Shop Help</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4>SITES</h4>
            <ul>
              <li>DC</li>
              <li>MAD Magazine</li>
              <li>DC Kids</li>
              <li>DC Universe</li>
              <li>DC Power Visa</li>
            </ul>
          </div>

          <div>
            <h4>SHOP</h4>
            <ul>
              <li>Shop DC</li>
              <li>Shop DC Collectibles</li>
            </ul>
          </div>
          <div className="footer-bottom">
            <button>SIGN-UP NOW!</button>
            <div className="social">
              <span>FOLLOW US</span>
              {/* Qui potrai mettere le icone delle social img */}
            </div>
          </div>
        </div>


      </footer>
    </>
  )
}

export default App
