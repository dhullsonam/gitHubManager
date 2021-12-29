import React, {useEffect, useState} from 'react';
import Cell from "./cell";


const List = (props) => {
    let valueFromSearchBar = props.filterByValue
    let [items, setItems] = useState([])


    useEffect(() => {
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
    return (
        <>
            {
                items.map((i) => {
                    return <Cell key={i.id} data={i}/>
                })
            }
        </>
    )
}

export default List;