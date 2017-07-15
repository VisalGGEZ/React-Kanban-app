/**
 * Created by v.suos on 7/15/2017.
 */
import React, {Component} from 'react'
import ListItem from './ListItem'

class KanbanBoard extends Component{
    render(){
        return(
            <div className="app">

                <ListItem id='todo' title="To Do" cards={
                    this.props.cards.filter((card) => card.status === "todo")
                } />

                <ListItem id='in-progress' title="In Progress" cards={
                    this.props.cards.filter((card) => card.status === "in-progress")
                } />

                <ListItem id='done' title='Done' cards={
                    this.props.cards.filter((card) => card.status === "done")
                } />
            </div>
        );
    }
}

export default KanbanBoard;
