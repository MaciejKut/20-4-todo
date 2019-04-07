import React from 'react';
import style from './Title.css';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskQuantity: this.props.taskQuantity
        };
    }

    render() {
        return (
            <div className={style.TitleClass}>
                <h2>Liczba zadań do wykonania: {this.props.taskQuantity}</h2>
            </div>
        )
    }
}

export default Title;