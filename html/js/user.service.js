const url = "http://localhost:8080";

const list = () => {
    return $.getJSON(`${url}/users`);
}

const get = (id) => {
    return $.getJSON(`${url}/users/${id}`);
}

const change = (user) => {
    return $.ajax({
        method: "PUT",
        url: `${url}/users/${user.id}`,
        data: JSON.stringify(user),
        content: "json",
        contentType: "application/json"
    })
}

const insert = (user) => {
    return $.ajax({
        method: "POST",
        url: `${url}/users`,
        data: JSON.stringify(user),
        content: "json",
        contentType: "application/json"
    })
}

const remove = (user) => {
    return $.ajax({
        method: "DELETE",
        url: `${url}/users/${user.id}`,
        data: null,
        content: "json",
        contentType:"application/json"
    })
}