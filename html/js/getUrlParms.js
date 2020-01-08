const getUrlParms = () => {
    //parse the url
    let url = document.URL;
    let parms = url.split("?")[1];
    let kvs = parms.split("&");
    let json = {};
    for(let kv of kvs){
        let keyValue = kv.split("=");
        json[keyValue[0]]=keyValue[1];
    }
    return json;
}