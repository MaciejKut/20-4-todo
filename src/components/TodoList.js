import React from 'react';
import style from './TodoList.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
            }, {
                id: 2,
                text: 'wash the dishes'
            }, {
                id: 3,
                text: 'feed my cat'
            }]
        };

    }
    get tasks() {
        return this.state.data.map(task => <div key={task.id} className={style.SingleTask}><div >{task.id}</div> <div>{task.text}</div></div>);
    }


    render() {
        return (
            <div className={style.ListOfTasks}>
                {this.tasks}
            </div>
        )
    }
}

export default TodoList;