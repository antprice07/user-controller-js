let user = null;

$().ready(() => {

    let parms = getUrlParms();

    get(parms.id)
        .done((res) => {
            user = res.data;
            console.log(user);
            display(user);
        })

    $("#save").click(() => {
        save();
    })

})

const save = () => {
    let user = {};
    user.id=$("#pid").val();
    user.username = $("#uname").val();
    user.password = $("#pword").val();
    user.firstName = $("#fname").val();
    user.lastName = $("#lname").val();
    user.phone = $("#phone").val();
    user.email = $("#email").val();
    user.reviewer = $("#reviewer").prop("checked");
    user.admin = $("#admin").prop("checked");
    change(user)
        .done((res) => {
            console.log("Change:",res);
            window.location = "user-list.component.html";
        })
        .fail((err)=>{
            console.error(err);
        });
}


const display = (user) => {
    $("#pid").val(user.id);
    $("#uname").val(user.username);
    $("#pword").val(user.password);
    $("#fname").val(user.firstName);
    $("#lname").val(user.lastName);
    $("#phone").val(user.phone);
    $("#email").val(user.email);
    $("#reviewer").prop("checked", user.reviewer);
    $("#admin").prop("checked", user.admin);
}