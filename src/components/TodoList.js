import React from 'react';
import style from './TodoList.css';

class TodoList extends React.Component {

    render() {
        return (
            <div className={style.ListOfTasks}>

                {this.props.data.map(task =>
                    <div key={task.id}
                        // Tutaj jest problem
                        onClick={() => { this.props.onClick(task.id) }} className={style.SingleTask}>

                        <div >{task.id}</div> <div>{task.text}</div>

                    </div>)}

            </div>
        )
    }
}

export default TodoList;