const ApiHeaders = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "token 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");
    return myHeaders
}

export default ApiHeaders;