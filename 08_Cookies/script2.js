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
document.cookie = "auth=Cookies; path=/; expires=Thu, Wed, Dec 9 2024 3:00:00 GMT";//idk чи правильно
function setCookie(key, value, expires = null) {
    document.cookie = `${key}=${value}; path=/; expires=${expires != null ? expires.toUTCString() : ""};`;
}
//saveToCookies(name, type, code);
//get cookie
function getCookie(key){
    const cookies = document.cookies.split("; ");
 
    for (const item of cookies) {
        const data = item.split("=")
        if (data[0] === key) {
            return data[1];
        }
    }
    return null;
}
document.getElementById("saveButton").addEventListener("click", function () {
    const name = document.getElementById("colorName").value.trim();
    const type = document.getElementById("colorType").value;
    const code = document.getElementById("colorCode").value.trim();
});


