import React, {useRef, useState} from 'react';
import RepoDataHandler from "./RepoDataHandler";
import './createRepo.css'


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
        <div className="container">
            <h1>Create A New Repo</h1>
            <input placeholder={"Enter Repo name"} ref={refToNewRepo}/>
            <button onClick={eventHandler}>create</button>
        </div>
    );
};

export default CreateRepo;
