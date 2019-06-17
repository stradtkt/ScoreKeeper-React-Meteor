import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import TitleBar from './../imports/ui/TitleBar';
import {Tracker} from 'meteor/tracker';
import AddPlayer from '../imports/ui/AddPlayer';
import RenderPlayers from '../imports/ui/RenderPlayers';

Meteor.startup(() => {
    Tracker.autorun(() => {
        let jsx = (
            <div>
                <TitleBar/>
                <RenderPlayers/>
                <AddPlayer/>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});
