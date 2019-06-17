import React, { Component } from 'react';
import {Players} from './../api/players';

class RenderPlayers extends Component {
    renderPlayers = (playersList) => {
        return playersList.map((player) => {
            return (
                <p key={player._id}>{player.name} has {player.score} points(s)
                    <button onClick={() => Players.update({_id: player._id}, {$inc:{score: -1}})}>-</button>
                    <button onClick={() => Players.update({_id: player._id}, {$inc:{score: 1}})}>+</button>
                    <button onClick={() => Players.remove({_id: player._id})}>&times;</button>
                </p>
            );
        });
    }
    render() {
        let players = Players.find().fetch();
        return (
            <div>
                {this.renderPlayers(players)}            
            </div>
        )
    }
}

export default RenderPlayers;
