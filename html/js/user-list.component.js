let users = [];

$().ready(()=>{
    
    list()
        .done((res)=>{
            users = res.data;
            console.log(res);
            display(users)
    });

    $("#add").click(()=>{
        document.location.href="user-add.component.html";
    });

});

const display = (users) => {
    let tbody=$("#tbody");
    tbody.html("");
    for(user of users){
        let tr = $("<tr></tr>");
        tr.append(`<td>${user.id}</td>`);
        tr.append(`<td>${user.username}</td>`);
        tr.append(`<td>${user.firstName} ${user.lastName}</td>`);
        tr.append(`<td>${user.phone}</td>`);
        tr.append(`<td>${user.email}</td>`);
        tr.append(`<td>${user.reviewer ? "Yes" : "No"}</td>`);
        tr.append(`<td>${user.admin ? "Yes" : "No"}</td>`);
        let td = $("<td></td>");
        td.append(`<a href='user-detail.component.html?id=${user.id}'>Detail</a> | `)
        td.append(`<a href='user-edit.component.html?id=${user.id}'>Edit</a>`)
        tr.append(td);
        tbody.append(tr);
    }
}
