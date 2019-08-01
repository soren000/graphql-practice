import React, { Component, useState } from 'react';

const SongCreate = () => {
    const [songTitle, setSongTitle] = useState("");

    return (
        <div>
            <h3>Create a New Song</h3>
            <form>
                <label>Song Title:</label>
                <input onChange={(e) => setSongTitle(e.target.value)} value={songTitle}/>
            </form>
        </div>
    )
};

export default SongCreate;