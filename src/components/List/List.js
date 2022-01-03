import React, {useEffect, useState} from 'react';
import Cell from "./cell";
import {Box, Spinner} from "@chakra-ui/react";

const List = (props) => {
    let valueFromSearchBar = props.filterByValue
    let [items, setItems] = useState([])


    useEffect(() => {
        console.log("useEffect List")
        fetch("https://api.github.com/users/dhullSonam/repos")
            .then(response => response.json())
            .then(data => {
                setTimeout(()=> setItems(data), 5000)
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

    if (items.length <= 0) {
        return (
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        )
    }

    return (
        <>


            {
                items.map((i ,index) => {
                    return <Cell key={i.id}
                                 data={i}
                                 index={index}
                                 deleteHandler ={repoNameDeleteHandler}
                    />
                })
            }

        </>
    )
}

export default List;