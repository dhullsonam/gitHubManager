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
import {Button, ButtonGroup, Box, IconButton} from '@chakra-ui/react';
import {AiTwotoneDelete} from "@react-icons/all-files/ai/AiTwotoneDelete";


const Sugar = require('sugar');

const Cell = (props) => {
    const {id, name, created_at: date} = props.data
    let datee = Sugar.Date.create(date)
    let formattedDate = Sugar.Date(datee).full().raw
    // console.log(formattedDate.yyyymmdd())


    let cellStyle = {
        display: "inline-grid",
        gridGap: '20px',
        gridTemplateColumns: "auto",
        padding: '10px',
        height: '200px',
        width: '500px'
    }
    let gridItems = {
        backgroundColor: "teal",
        padding: '20px',
        borderRadius: '10px'
    }
    let dataInside = {
        padding:'10px'
    }

    const deleteButtonHandler = () => {
        DeleteRepoHeaders(name, (res) => {
            props.deleteHandler(id)
        })
    }

    return (
        <div style={cellStyle}>
            <div style={gridItems}>
                <h2 style={dataInside}>{name}</h2>
                <h6 style={dataInside}>{formattedDate}</h6>
                <Popover>
                    <PopoverTrigger>

                            <IconButton colorScheme='red' fontSize='15px' size={"xs"}
                                        icon={<AiTwotoneDelete/>} ></IconButton>


                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow/>
                        <PopoverCloseButton/>
                        <PopoverBody>Are you sure you want to Delete this Repo</PopoverBody>
                        <ButtonGroup size='sm'>
                            <Button colorScheme='green'>Cancel</Button>
                            <Button colorScheme='blue' onClick={deleteButtonHandler}>
                                Confirm
                            </Button>
                        </ButtonGroup>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default Cell;