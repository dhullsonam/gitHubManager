import React, {useEffect, useState} from 'react';
import SearchBar from "../../SearchBar/SearchBar";
import List from "../../List/List";
import ii from "../../../token";
import RepoNotFound from "../../List/RepoNotFound";


let originalItems = [] // global scope

const HomePage = () => {
    const [isFiltered, setIsFiltered] = useState(false)
    let [items, setItems] = useState(originalItems)

    const getValueFromSearchBar = (inputVal) => {
        console.log("getting value from searchbar", inputVal)

        let filteredItems = originalItems.filter((obj) => {
            return obj.name.includes(inputVal)
        })

        if (filteredItems.length <= 0) {
            console.log("display Items")
            setItems(originalItems)
        } else  {
            console.log("display filteredItems")
            setItems(filteredItems)
        }
        setIsFiltered(!isFiltered)
    }
    let requestOptions = {
        method: 'GET',
        headers: {'Authorization': ii}
    };


    // console.log("Home Button Clicked")

    useEffect(() => {
        console.log("useEffect List")
        fetch("https://api.github.com/search/repositories?q=user:dhullsonam", requestOptions)
            .then(response => response.json())
            .then((data) => {
                console.log(data.items)
                originalItems = data.items.slice()
                setTimeout(() => setItems(data.items), 5000)
            })
    }, [])

    // let valueFromSearchBar = props.filterByValue

    const handleDeleteRepo = async (id) => {
        var updateItems = originalItems.filter((i) => {
            return i.id != id
        });
        await setItems(updateItems)
    }


    const sss = () => {
        console.log("called sss")
        console.log(items)
        // let aa = Array(items)

    }

    // if (val != '') {
    //     items = items.filter((obj) => {
    //         return obj.name.includes(val)
    //     })
    //     if (items.length <= 0) {
    //         return <RepoNotFound dia={true}
    //             refresh={sss}
    //         />
    //     } else {
    //         setItems(items)
    //     }
    // }


    return (
        <div>
            <SearchBar getValueFromSearchBar={getValueFromSearchBar}/>
            <List item={items} handleDeleteRepo={handleDeleteRepo}/>
            {
                isFiltered!=isFiltered ? <RepoNotFound dia={true} />: <span />
            }
        </div>
    );
};

export default HomePage;

