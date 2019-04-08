import React from 'react';
import style from './TodoList.css';

const TodoList = props =>

    <div className={style.ListOfTasks}>

        {props.data.map(task =>
            <div key={task.id}
                // Tutaj jest problem
                onClick={() => { props.onClick(task.id) }} className={style.SingleTask}>

                <div >{task.id}</div> <div>{task.text}</div>

            </div>)}

    </div>

export default TodoList;