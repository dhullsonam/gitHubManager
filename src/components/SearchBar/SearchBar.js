import React, { useRef, useState} from 'react';
import List from "../List/List";

const SearchBar = () => {
    const [inputValue ,setInputValue] = useState('')
    const refToMySearchedValue = useRef('')
    const inputHandler = () =>{
        const val =refToMySearchedValue.current.value
        console.log(val)
        setInputValue(val)
    }
    return (
        <div>
            <input placeholder={"search"} ref={refToMySearchedValue} />
            <button onClick={inputHandler}>search</button>
            <br/>
            <List searcheditem ={inputValue}/>
        </div>
    );
};

export default SearchBar;