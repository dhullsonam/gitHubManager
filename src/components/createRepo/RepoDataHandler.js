import ApiHeaders from "../../Helpers/ApiHeaders";
import ConvertToJson from "../../Helpers/ConvertToJson";

function RepoDataHandler(props){
    const [repoName , value]= props

    var raw = ConvertToJson({
        "name": repoName,
        "private": value
    });

    var requestOptions = {
        method: 'POST',
        headers: ApiHeaders(),
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