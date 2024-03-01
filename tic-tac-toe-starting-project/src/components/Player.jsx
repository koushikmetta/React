import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {

    const [playerName, setPlayername] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleEdit() {
        setIsEditing(edit => !edit)
    }

    function handleChange(event) {
        setPlayername(event.target.value);
    }

    let editPlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editPlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}