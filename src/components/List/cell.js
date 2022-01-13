import React from 'react';
import DeleteRepoHeaders from "./DeleteRepoHeaders";
import {Link, Text} from '@chakra-ui/react'

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,

} from '@chakra-ui/react'
import {Button, ButtonGroup, IconButton} from '@chakra-ui/react';
import {AiTwotoneDelete} from "@react-icons/all-files/ai/AiTwotoneDelete";


const Sugar = require('sugar');

const Cell = (props) => {
    const {id, name, created_at: date, visibility, html_url} = props.data
    let datee = Sugar.Date.create(date)
    let formattedDate = Sugar.Date(datee).full().raw
    // console.log(formattedDate.yyyymmdd())


    let cellStyle = {
        padding: '15px',
        textAlign: 'center'
    }


    const deleteButtonHandler = () => {
        DeleteRepoHeaders(name, (res) => {
            props.deleteHandler(id)
        })
    }
    return (
        <div style={cellStyle}>
            <Text fontSize='2xl' textOverflow={"ellipsis"}>{name}</Text>
            <Text fontSize='xs'>{formattedDate}</Text>
            {/*<Text fontSize='xl'>Repo is : {visibility}</Text>*/}
            <Link color='teal.500' href={html_url}>Repo-Link</Link>
            <Popover>
                <PopoverTrigger>
                    <IconButton colorScheme='red' fontSize='15px' float={"right"} size={"xs"} margin={2} icon={<AiTwotoneDelete/>}></IconButton>
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
    );
};

export default Cell;