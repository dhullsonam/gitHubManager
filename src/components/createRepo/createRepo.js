import React, {useRef, useState} from 'react';
import RepoDataHandler from "./RepoDataHandler";
// import './createRepo.css'
import GithubManagerButton from "../UIElements/GithubManagerButton";
import {Button, ButtonGroup, Input, Stack} from '@chakra-ui/react';
import {Radio, RadioGroup} from '@chakra-ui/react'
import {logDOM} from "@testing-library/react";

const CreateRepo = () => {
    const refToNewRepo = useRef('');
    const [items, setItemsValue] = useState('')
    const [value, setValue] = useState('public')

    const eventHandler = () => {
        const itmValue = refToNewRepo.current.value
        if (itmValue != '') {
            setItemsValue(itmValue)
            console.log(" : " + itmValue)
            if (value === 'private') {
                RepoDataHandler(itmValue, true)
            } else {
                RepoDataHandler(itmValue, false)
            }

        }
    }

    return (
        <div style={{
            width: '400px',
            display: 'inline-block',
            height: '300px',
            // border: "1px solid gray",
            marginLeft: '200px',
            borderRadius: '10px',
            backgroundColor: "lemonchiffon"
        }}>
            <h1 style={{margin: '20px'}}>Create A New Repo</h1>
            <br/>
            <div style={{margin: '10px', display: 'inline-block'}}>
                <Input
                    variant='filled'
                    placeholder={"Enter Repo name"}
                    ref={refToNewRepo}
                    style={{width: "300px"}}
                    size='sm'
                />
                <Button
                    onClick={eventHandler}
                    colorScheme='green'
                    size='sm'>
                    Create
                </Button>
                {/*<GithubManagerButton onClick={eventHandler} title="Create" />*/}
            </div>
            <h2 style={{margin: '10px'}}>Select a Repo Type</h2>
            <div style={{margin: '10px'}}>
                <RadioGroup onChange={setValue} value={value}>
                    <Stack>
                        <Radio value='public'>Public</Radio>
                        <Radio value='private'>Private</Radio>
                    </Stack>
                </RadioGroup>
            </div>
            {console.log(value)}

        </div>
    );
};

export default CreateRepo;
