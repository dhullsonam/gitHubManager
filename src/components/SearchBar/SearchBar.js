import React, { useRef, useState} from 'react';


const SearchBar = (props) => {
    const [inputValue ,setInputValue] = useState('')
    const refToMySearchedValue = useRef('')
    const inputHandler = () =>{
        const val =refToMySearchedValue.current.value
        console.log(val)
        setInputValue(val)
        props.getValueFromSearchBar(val)
    }
    return (
        <div style={{marginLeft:"50px",marginTop:"30px"}}>
            <input placeholder={"search"} ref={refToMySearchedValue} onKeyPress={(e) => e.key === 'Enter' && inputHandler()}/>
            <button onClick={inputHandler}>search</button>

        </div>
    );
};

export default SearchBar;