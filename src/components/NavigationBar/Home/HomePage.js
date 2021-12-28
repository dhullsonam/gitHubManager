import React, {useState} from 'react';
import SearchBar from "../../SearchBar/SearchBar";
import List from "../../List/List";

const HomePage = () => {
    const [val, setVal] = useState('')
    const getValueFromSearchBar = (inputVal) => {
        console.log("getting value")
        setVal(inputVal)
    }
    return (
        <div>
            <SearchBar getValueFromSearchBar={getValueFromSearchBar}/>
            <List filterByValue={val}/>
        </div>
    );
};

export default HomePage;