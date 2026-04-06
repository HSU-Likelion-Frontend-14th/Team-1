import "./hobbyItem.css";

function HobbyItem({title, img, imgText}) {
    return (
        <li>
            <div className="hobbyTitle">{title}</div>
            <div className="hobbyContent">
                <img src={img} alt={imgText}/>
            </div>
        </li>
    )
}

export default HobbyItem;