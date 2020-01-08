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
                url:`${url}/users/${user.id}`,
                data: JSON.stringify(user),
                content: "json",
                contentType: "application/json"
             })
}