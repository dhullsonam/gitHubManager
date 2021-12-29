import React, {useState} from 'react';
import Sugar from "sugar";

Date.prototype.yyyymmdd = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
        (mm>9 ? '' : '0') + mm,
        (dd>9 ? '' : '0') + dd
    ].join('-');
};


const Cell = (props) => {
    const {name, created_at: date} = props.data
    let formattedDate = new Date(date)
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

    return (
        <div style={cellStyle}>
            <h2>{name}</h2>
            <h6>{formattedDate.yyyymmdd()}</h6>
            <button>delete</button>
        </div>
    );
};

export default Cell;