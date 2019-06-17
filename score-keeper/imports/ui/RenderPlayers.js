import React, { Component } from 'react';
import {Players} from './../api/players';

class RenderPlayers extends Component {
    renderPlayers = (playersList) => {
        return playersList.map((player) => {
            return (
                <p key={player._id}>
                    <div className="player">
                        <h3 className="player__name">{player.name}</h3> has 
                        <p className="player__stats">{player.score}</p> points(s)
                        <div className="player__actions">
                            <button className="button button-round" onClick={() => Players.update({_id: player._id}, {$inc:{score: -1}})}>-</button>
                            <button className="button button-round" onClick={() => Players.update({_id: player._id}, {$inc:{score: 1}})}>+</button>
                            <button className="button button-round" onClick={() => Players.remove({_id: player._id})}>&times;</button>
                        </div>
                    </div>
                </p>
            );
        });
    }
    render() {
        let players = Players.find({}, {sort: {score: -1}}).fetch();
        return (
            <div>
                {this.renderPlayers(players)}            
            </div>
        )
    }
}

export default RenderPlayers;
