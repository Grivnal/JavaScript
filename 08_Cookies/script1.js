// //"key=value; path=/; expires=delete data"
// document.cookie = "auth=111111111; path=/; expires=Thu, Wed, Dec 4 2024 16:42:00 GMT";
// document.cookie='user=admin; path=/; expires=Thu, Dec 4 2024 16:42:00 GMT'
 
// const today = new Date();
// today.setMinutes(today.getMinutes() + 5);
// document.cookie = `test=time; path=/; expires=${today.toUTCString()}`;
 
// //`test; time=time; auth=1111111111; user=admin; test=time`
// const cookies = document.cookie;
 
// const keys = cookies.split("; ");
 
// const mapKeys = new Map();
 
// for (const element of keys) {
//     const data = time.split("=")
//     mapKeys.sset(data[0], data[1]);
// }
 
// const user = mapKeys["user"]
// if (user != undefined) {
   
// }
// console.log(document.cookie);
function setCookie(key, value, expires = null) {
    document.cookie = `${key}=${value}; path=/; expires=${expires != null ? expires.toUTCString() : ""};`;
}
setCookie("PV311","Cookie lesson");
//delete cookie
function deleteCookie(key){
    document.cookie = `${key}=; path=/; expires=Sun, Jan 1 1970 2024 00:00:00 GTM`
}
//get cookie
function getCookie(key){
    const cookies = document.class.split("; ");
 
    for (const item of cookies) {
        const data = item.split("=")
        if (data[0] === key) {
            return data[1];
        }
    }
    return null;
}
 
// const time = getCookie("time");
// console.log(time);