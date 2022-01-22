import React, {useEffect, useState} from 'react';
import Cell from "./cell";
import {Box, Spinner} from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react'

import RepoNotFound from "./RepoNotFound";
const List = (props) => {
    let {item:items} = props

    const repoNameDeleteHandler = (id) => {
        props.handleDeleteRepo(id)
    }


    if (items.length <= 0) {
        return (
            <div align='center'>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </div>

        )
    } else {
        return (
            <SimpleGrid columns={4} spacing={10} padding={10}>
                {
                    items.map((i, index) => {
                        return (
                            <Box key={i.id} height='auto' border='1px solid' borderRadius='10px' bgColor={"white"} >
                                <Cell
                                      data={i}
                                      index={index}
                                      deleteHandler={repoNameDeleteHandler}
                                />
                            </Box>
                        )
                    })
                }
            </SimpleGrid>
        )
    }


}

export default List;


