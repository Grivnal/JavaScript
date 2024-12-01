const api = "https://api.github.com/users";

const tableBody = document.getElementById("users-table-body")
fetch(api).then((response)=>
{
    console.log(response.status);
    return repponse.json(); 
}).then((data)=>
{
    console.log(data);

    // for (const u of data) {
    //     tableBody.innerHTML +=`
    //         <tr>
    //             <td>${dat.id}</td>
    //             <td>${data.login}</td>
    //             <td>${data.followers_url}</td>
    //             <td>${data.following_url}</td>
    //         </tr>`
    // }
    
    

}).catch((error)=>
{
    console.log(error);
})