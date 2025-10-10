export default function ComicCard({ image, series }) {


    return (

        <div className="comic-card">
            <img src={image} alt="" />
            <h5>{series}</h5>
        </div>

    )
}