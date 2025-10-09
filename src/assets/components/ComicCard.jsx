export default function ComicCard(props) {
    console.log(props);

    return (

        <div className="comic-card">
            <img src={props.image} alt="" />
            <h5>{props.name}</h5>
        </div>

    )
}