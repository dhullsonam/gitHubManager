import ApiHeaders from "../../Helpers/ApiHeaders";
import FetchRequest from "../../Helpers/ApiFetchHelper";

function DeleteRepoHeaders(name ,success) {
    console.log('DeleteRepoHeaders')

    var requestOptions = {
        method: 'DELETE',
        headers: ApiHeaders(),
        redirect: 'follow'
    };
    const url = "https://api.github.com/repos/dhullsonam/"+name

    FetchRequest(url, requestOptions, success)
}
export default DeleteRepoHeaders