import React, {useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react';
import RepoDataHandler from "./RepoDataHandler";
// import './createRepo.css'
import GithubManagerButton from "../UIElements/GithubManagerButton";
import {Button, ButtonGroup, Input, Stack} from '@chakra-ui/react';
import {Radio, RadioGroup} from '@chakra-ui/react'
import CreatedRepoInfo from "./CreatedRepoInfo";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react'

const CreateRepo = () => {
    const refToNewRepo = useRef('');
    const [value, setValue] = useState('public')

    const [isOpen, setIsOpen] = React.useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = React.useRef()

    const eventHandler = () => {
        const itmValue = refToNewRepo.current.value
        if (itmValue != '') {
            console.log(" : " + itmValue)
            let isPrivate = false
            if (value === 'private') {
                isPrivate = true
            }
            RepoDataHandler(itmValue, isPrivate, successResult, errorResult)
        }
        refToNewRepo.current.value = ''
    }

    const successResult = () => {
        console.log("successfully created a new repo")
        setIsOpen(true)
    }

    const errorResult = () => {
        console.log("error in successfully created a new repo")
    }

    useEffect(() => {
        console.log("Use effect on CreateRepo: "+ value)
        return () => {
            console.log("cleaned up");
        };
    },[])


    var alert =  <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}>
        <AlertDialogOverlay>
            <AlertDialogContent>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                    successfully created a new repo
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                        Ok
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialogOverlay>
    </AlertDialog>


    return (
        <>
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
            </div>
            { isOpen ? alert : null }
        </>
    );
};

export default CreateRepo;
