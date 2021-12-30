
const FetchRequest = (url,requestOptions, success) => {
    fetch(url, requestOptions)
        .then((res) => res.text())
        .then(data => success(data))
        .catch(error => console.log('error', error));
}

export default FetchRequest;