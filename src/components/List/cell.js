import React, {useState} from 'react';
import DeleteRepoHeaders from "./DeleteRepoHeaders";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'
import {Button, ButtonGroup,Box} from '@chakra-ui/react'

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
        backgroundColor: "lightgray",
        margin: "10px",
        wordSpacing: "5px"
    }

    const deleteButtonHandler = () => {
        DeleteRepoHeaders(name, (res) => {
            props.deleteHandler(id)
        })
    }

    return (
        <div style={{display: 'inline-flex'}} >
            <Box width={"95%"} height={'auto'} bgColor={"gray.200"} borderRadius={'10px'} border={'1px solid black'} margin="10px"  padding={'10px'}>
            <h2>{name}</h2>
            <h6>{formattedDate}</h6>
            <Popover>
                <PopoverTrigger>
                    <Button colorScheme='orange' size='xs'>Delete</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow/>
                    <PopoverCloseButton/>
                    <PopoverHeader>Confirmation!</PopoverHeader>
                    <PopoverBody>Are you sure you want to Delete this Repo</PopoverBody>
                    <ButtonGroup size='sm'>
                        <Button colorScheme='green' >Cancel</Button>
                        <Button colorScheme='blue' onClick={deleteButtonHandler}>
                            Confirm
                        </Button>
                    </ButtonGroup>
                </PopoverContent>
            </Popover>
            </Box>
        </div>
    );
};

export default Cell;