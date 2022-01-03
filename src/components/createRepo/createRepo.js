import React, {useRef, useState} from 'react';
import RepoDataHandler from "./RepoDataHandler";
// import './createRepo.css'
import GithubManagerButton from "../UIElements/GithubManagerButton";
import {Button, ButtonGroup, Stack} from '@chakra-ui/react'

const CreateRepo = () => {
    const refToNewRepo = useRef('');
    const [items, setItemsValue] = useState('')

    const eventHandler = () => {
        const itmValue = refToNewRepo.current.value
        if(itmValue != ''){
            setItemsValue(itmValue)
            console.log(" : " + itmValue)
            RepoDataHandler(itmValue)
        }
    }

    return (
        <div>
            <h1>Create A New Repo</h1>
            <input placeholder={"Enter Repo name"} ref={refToNewRepo}/>
            <button onClick={eventHandler}>create</button>

            {/*<GithubManagerButton onClick={eventHandler} title="Create" />*/}
        </div>
    );
};

export default CreateRepo;
