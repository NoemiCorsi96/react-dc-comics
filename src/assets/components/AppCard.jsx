import ComicCard from './ComicCard'
export default function AppCard({ list_comics }) {
    return (
        <div className="card-container">
            {list_comics.map((comic) => (
                <ComicCard
                    key={comic.id}
                    image={comic.thumb}
                    series={comic.series}
                />
            ))}


        </div>
    )
}