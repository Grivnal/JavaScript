// const task = new Promise((resolve,reject)=>{
   
//     setTimeout(()=>
//     {
//         console.log("Do hard work!!!");
//     },4000);
//     if(Math.random()> 0.5)
//         resolve();
//     else
//         reject();
// })


// task.then(()=>{
//     console.log("Everything is good!");
// }).catch(()=>{
//     console.log("Something went wrong!")
// })
 


// console.log("Continue work!!!");


// const gitHubUsersAPI = "https://api.github.com/users";


// fetch(gitHubUsersAPI).then((response)=>{
//     console.log(response.status);
//     return repponse.json(); 
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })



const UsersAPI = "https://jsonplaceholder.typicode.com/users";

const tableBody = document.getElementById("users-list")
fetch(UsersAPI).then((response)=>
{
    console.log(response.status);
    return response.json(); 
}).then((data)=>
{
    console.log(data);

    for (const u of data) {
        tableBody.innerHTML +=`
           <li>
                  ${u.id}  ${u.username}
           </li>`
    }
    
    

}).catch((error)=>
{
    console.log(error);
})