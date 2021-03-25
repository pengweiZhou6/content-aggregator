function handleErrors(response) {
    if (!response.ok) {
        if (response.status === 422) {
            return response.text().then((text) => JSON.parse(text))
                .then((msg) => {
                    throw Error(msg.errors[0].msg);
                })
        } else {
            return response.text().then(function (text) {
                throw Error(text);
            })
        }
    }
    return response;
}

module.exports = { handleErrors }