import React, {useEffect, useState} from 'react';
import Cell from "./cell";

const List = (props) => {
    let valueFromSearchBar = props.filterByValue
    let [items, setItems] = useState([])


    useEffect(() => {
        console.log("useEffect List")
        fetch("https://api.github.com/users/dhullSonam/repos")
            .then(response => response.json())
            .then(data => {
                setItems(data)
            })
    }, [])


    if (valueFromSearchBar != '') {
        items = items.filter((obj) => {
            return obj.name.includes(valueFromSearchBar)
        })
    }
    const repoNameDeleteHandler = async (id) => {
        var updateItems = items.filter( (i) => {
            return i.id != id
        } );
        await setItems( updateItems )
    }

    return (
        <>
            {
                items.map((i ,index) => {
                    return <Cell key={i.id} data={i} index={index} deleteHandler ={repoNameDeleteHandler}/>
                })
            }
        </>
    )
}

export default List;