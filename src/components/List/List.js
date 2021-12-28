import React, {useEffect, useState} from 'react';


const List = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/dhullSonam/repos")
            .then(response => response.json())
            .then(data => {
                setItems(data)
            })
    }, [])
        return (

            <ul>
                {items.map((i) => <li key={i.id}style={{height:'70px',border:"1px solid black",width:'350px',display:"inline-block",padding:'10px'}}>{i.name} {i.id}</li>)}
            </ul>

        );


};

export default List;