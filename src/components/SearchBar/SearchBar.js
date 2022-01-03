import React, {useRef, useState} from 'react';
import {Button} from '@chakra-ui/react'
import {Input} from '@chakra-ui/react'


const SearchBar = (props) => {
    const [inputValue, setInputValue] = useState('')
    const refToMySearchedValue = useRef('')
    const inputHandler = () => {
        const val = refToMySearchedValue.current.value
        console.log(val)
        setInputValue(val)
        props.getValueFromSearchBar(val)
    }
    return (
        <div style={{marginLeft: "50px", marginTop: "30px"}}>
            <Input variant='filled'
                   placeholder={"search"}
                   size='sm'
                   ref={refToMySearchedValue}
                   onKeyPress={(e) => e.key === 'Enter' && inputHandler()}
                   style={{width:"300px"}}

            />
            {/*<button onClick={inputHandler}>search</button>*/}
            <Button colorScheme='teal' variant='ghost' onClick={inputHandler}>
                Search
            </Button>


        </div>
    );
};

export default SearchBar;