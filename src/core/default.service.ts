


export const postRequest = (url: any, data: object) => {
    const headers = {
        "content-type": "application/json",
        // Authorization: `Bearer ${sessionStorage.getItem("token")}`
    }
    return fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(data)
    });
};