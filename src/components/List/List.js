import React, {useEffect, useState} from 'react';
import Cell from "./cell";
import {Box, Spinner} from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react'
import ApiHeaders from "../../Helpers/ApiHeaders";
import ii from '../../token'

const List = (props) => {
    let valueFromSearchBar = props.filterByValue
    let [items, setItems] = useState([])

    var requestOptions = {
        method: 'GET',
        headers: { 'Authorization' : ii }
    };

    useEffect(() => {
        console.log("useEffect List")
        fetch("https://api.github.com/users/dhullSonam/repos",requestOptions)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => setItems(data), 5000)
            })
    }, [])

    console.log(items)

    if (valueFromSearchBar != '') {
        items = items.filter((obj) => {
            return obj.name.includes(valueFromSearchBar)
        })
    }
    const repoNameDeleteHandler = async (id) => {
        var updateItems = items.filter((i) => {
            return i.id != id
        });
        await setItems(updateItems)
    }

    if (items.length <= 0) {
        return (
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                marginLeft='600px'
                marginTop='200px'
            />
        )
    }

    return (
        <>
            <SimpleGrid columns={4} spacing={10} padding={10} >
            {
                items.map((i, index) => {
                    return <>
                        <Box height='auto' border='1px solid' borderRadius='10px' bgColor={"white"} >
                            <Cell key={i.id}
                                  data={i}
                                  index={index}
                                  deleteHandler={repoNameDeleteHandler}
                            />
                        </Box>
                    </>
                })
            }
            </SimpleGrid>
        </>
    )
}

export default List;