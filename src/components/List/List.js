import React, {useEffect, useState} from 'react';

const List = (props) => {
    let valueFromSearchBar = props.filterByValue
   let [items, setItems] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/dhullSonam/repos")
            .then(response => response.json())
            .then(data => {
                setItems(data)
            })
    }, [])



    if(valueFromSearchBar != ''){
       items = items.filter( (obj) => {
            return obj.name.includes(valueFromSearchBar)
        })
    }
    return (
        <>
            <ul>
                {items.map((i) => <li key={i.id} style={{
                    height: '70px',
                    border: "1px solid black",
                    borderRadius:'10px',
                    width: '350px',
                    display: "inline-block",
                    padding: '10px',
                    backgroundColor:"lightsteelblue",
                    margin:"10px",
                    wordSpacing:"5px"
                }}>RepoName : {i.name} <br></br> Date : {i.created_at}</li>)}
            </ul>

        </>

    );


};

export default List;