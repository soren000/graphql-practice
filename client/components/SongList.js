import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const SongList = ({data}) => {
    const { songs, loading } = data;
    return (
        <div className="collection">
            {loading && <div>Loading...</div>}
            {songs && songs.map((song, index) => <p key={index} className="collection-item">{song.title}</p>)}
        </div>
    )
};

const query = gql`
    {
        songs {
            title
        }
    }
`;

export default graphql(query)(SongList);