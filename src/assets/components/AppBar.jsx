import comicIcon from '../img/buy-comics-digital-comics.png';
import merchIcon from '../img/buy-comics-merchandise.png';
import subIcon from '../img/buy-comics-subscriptions.png';
import shopIcon from '../img/buy-comics-shop-locator.png';
import visaIcon from '../img/buy-dc-power-visa.svg';
export default function AppBar() {
    return (
        <>
            <section className='blueBar'>
                <ul>
                    <li>
                        <img src={comicIcon} alt="Digital Comics" />
                        <span>DIGITAL COMICS</span>
                    </li>
                    <li>
                        <img src={merchIcon} alt="DC Merchandise" />
                        <span>DC MERCHANDISE</span>
                    </li>
                    <li>
                        <img src={subIcon} alt="Subscription" />
                        <span>SUBSCRIPTION</span>
                    </li>
                    <li>
                        <img src={shopIcon} alt="Comic Shop Locator" />
                        <span>COMIC SHOP LOCATOR</span>
                    </li>
                    <li>
                        <img src={visaIcon} alt="DC Power Visa" />
                        <span>DC POWER VISA</span>
                    </li>
                </ul>
            </section>
        </>
    )
}