
import jumbotron from '../img/jumbotron.jpg';
import AppCard from "./AppCard";
export default function AppContent({ list_comics }) {
    return (
        <>

            <section className="contents">

                <div className="hero-image">
                    <img src={jumbotron} alt="DC Hero Banner" />
                    <h2>Current Series</h2>
                </div>
                <AppCard list_comics={list_comics} />

                <button className="loadMore">Load More</button>
            </section >

        </>
    )
}