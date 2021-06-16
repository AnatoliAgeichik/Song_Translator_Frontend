function sendRequest (data, url, method) {
        const requestOptions = {
            method: method,
            headers:{'Content-Type': 'application/json',
                     'Authorization': 'Token ' + localStorage.getItem("token")},
            body: JSON.stringify(data)
        };
        fetch(url, requestOptions)
    }
export default sendRequest
