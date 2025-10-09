export default function AppMainNav({ mainMenu }) {
    return (
        <div className="links">
            {mainMenu.map(section => (
                <div key={section.id} >
                    <h4>{section.title}</h4>
                    <ul>
                        {section.links.map(link => (
                            <li key={link.id}>
                                <a href={link.link}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
