import ApiHeaders from "../../Helpers/ApiHeaders";
import ConvertToJson from "../../Helpers/ConvertToJson";

function RepoDataHandler(argu, isPrivate,success, err) {
    const repoName = argu
    console.log("value of :", isPrivate)

    var raw = ConvertToJson({
        "name": repoName,
        "private": isPrivate
    });

    var requestOptions = {
        method: 'POST',
        headers: ApiHeaders(),
        body: raw,
        redirect: 'follow'
    };


    fetch("https://api.github.com/user/repos", requestOptions)
        .then(response => response.text())
        .then(result =>success(result))
        .catch((error) => {
            console.log('error', error)
            err()
        });

};

export default RepoDataHandler;
//https://api.github.com/user/repos
//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