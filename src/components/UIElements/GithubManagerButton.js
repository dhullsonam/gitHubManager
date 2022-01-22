import React from 'react';

const GithubManagerButton = (props) => {
    let {title, onClick} = props

    const eventHandler = () => {
        onClick()
    }

    return (
        <div>
            <button onClick={eventHandler}>{title}</button>
        </div>
    );
};

export default GithubManagerButton;