export default function AppNav({ menu }) {


    return (

        <nav>
            <ul>
                {menu.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>




        </nav>

    )
}