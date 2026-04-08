import "./BoardItem.scss"

function BoardItem({ title, content, onDelete }) {
    return (
        <li className="boardItem">
            <div className="textArea">
                <h4 className="itemTitle">{title}</h4>
                <p className="itemContent">{content}</p>
            </div>
            <button className="deleteBtn" onClick={onDelete}>삭제</button>
        </li>
    )
}

export default BoardItem;