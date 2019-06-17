import React, { Component } from 'react';
import {Players} from './../api/players';

class AddPlayer extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        let playerName = e.target.playerName.value;
        if(playerName) {
            e.target.playerName.value = '';
            Players.insert({
                name: playerName,
                score: 0
            });
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player Name"/>
                    <button type="submit">Add Player</button>
                </form>
            </div>
        )
    }
}

export default AddPlayer;