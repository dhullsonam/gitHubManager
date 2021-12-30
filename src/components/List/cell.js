import React, {useState} from 'react';
import DeleteRepoHeaders from "./DeleteRepoHeaders";

const Sugar = require('sugar');

const Cell = (props) => {
    const {id, name, created_at: date} = props.data
    let datee = Sugar.Date.create(date)
    let formattedDate = Sugar.Date(datee).full().raw
    // console.log(formattedDate.yyyymmdd())

    let cellStyle = {
        height: "auto",
        border: "1px solid black",
        borderRadius: '10px',
        width: '350px',
        display: "inline-block",
        padding: '10px',
        backgroundColor: "lightsteelblue",
        margin: "10px",
        wordSpacing: "5px"
    }

    const deleteButtonHandler = () => {
        DeleteRepoHeaders(name, (res) => {
            props.deleteHandler(id)
        })
    }

    return (
        <div style={cellStyle}>
            <h2>{name}</h2>
            <h6>{formattedDate}</h6>
            <button onClick={deleteButtonHandler}>delete</button>
        </div>
    );
};

export default Cell;