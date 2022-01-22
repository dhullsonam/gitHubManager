import React ,{useState ,useRef} from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader, AlertDialogFooter, Button
} from "@chakra-ui/react";
import List from './List'
const RepoNotFound = (props) => {
    const [isOpen, setIsOpen] = React.useState(props.dia)
    const onClose = () => {
        setIsOpen(false)
        props.refresh()
    }
    const cancelRef = React.useRef()

    return (
        <>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            No Records found
                        </AlertDialogHeader>

                        <AlertDialogFooter>
                            <Button colorScheme='red' onClick={onClose} ml={3}>
                                Ok
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export default RepoNotFound;