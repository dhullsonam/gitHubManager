import React, {useRef, useState} from 'react';
import {Button} from '@chakra-ui/react'
import {Input} from '@chakra-ui/react'


const SearchBar = (props) => {
    const [inputValue, setInputValue] = useState('')
    const refToMySearchedValue = useRef('')
    const inputHandler = () => {
        const val = refToMySearchedValue.current.value
        console.log("searchBar component", val)
        setInputValue(val)
        props.getValueFromSearchBar(val)
        refToMySearchedValue.current.value = ''
    }

    // This valirable contains SearchBar Stylling
    const SearchBarStyling = {
        divStyle: {
            marginBottom: "10px",
            marginLeft: "50px",
            marginTop: "30px",
            textAlign: "center"
        },
        inputStye: {
            width: "300px"
        }
    }

    const inputAttributes = {
        varient: 'filled',
        placeholder: "search",
        refToMySearch: refToMySearchedValue,
        onKeyPress: (e) => e.key === 'Enter' && inputHandler()
    }

    return (
        <div style={SearchBarStyling.divStyle}>
            <Input variant={inputAttributes.varient}
                   placeholder={inputAttributes.placeholder}
                   size='sm'
                   ref={inputAttributes.refToMySearch}
                   onKeyPress={inputAttributes.onKeyPress}
                   style={SearchBarStyling.inputStye}
            />
            {/*<button onClick={inputHandler}>search</button>*/}
            <Button colorScheme='teal' variant='ghost' size={'sm'} onClick={inputHandler}>
                Search
            </Button>
        </div>
    );
};

export default SearchBar;