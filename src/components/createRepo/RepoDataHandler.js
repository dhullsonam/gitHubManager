
 function RepoDataHandler(props){
    const repoName = props
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "token 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");

    var raw = JSON.stringify({
        "name": repoName,
        "private": false
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api.github.com/user/repos", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

};

export default RepoDataHandler;
//https://api.github.com/user/repos
//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