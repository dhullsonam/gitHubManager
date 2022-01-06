import text from '../token'

const ApiHeaders = () => {
    let txt = text
    console.log("my token : ",txt)


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", txt);
    return myHeaders
}

export default ApiHeaders;