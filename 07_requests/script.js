const apiKey = "886ebf7e";
const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=`;
 
async function swapiGet(page) {    
    try {
        const title = document.getElementById("search-form").value;
        const type = document.getElementById("typeSelect").value;

        const response = await fetch(url + title + "&page=" + page + "&type=" + type);
        const data = await response.json();
 
        const pageCount = Math.ceil(data.totalResults / 10);
        const pagination = document.getElementById("pagination");
 
        pagination.innerHTML = "";
 
        let prevPage = page - 1;
        if(page === "1") {
            prevPage = "1";
        }
 
        let nextPage = parseInt(page) + 1;
        if(page == pageCount) {
            nextPage = pageCount.toString();
        }
 
        pagination.innerHTML += `<li class="page-item" onclick="swapiGet('${prevPage}')"><a class="page-link" href="#">prev</a></li>`;
        for(let i = 1; i <= pageCount; i++) {
            pagination.innerHTML += `<li class="page-item" onclick="swapiGet('${i}')"><a class="page-link" href="#">${i}</a></li>`;
        }
        pagination.innerHTML += `<li class="page-item" onclick="swapiGet('${nextPage}')"><a class="page-link" href="#">next</a></li>`;
 
        console.log(data.Search);
       
        const tbody = document.getElementById("tbody");
        tbody.innerHTML = "";
        for (let i = 0; i < data.Search.length; i++) {
            const film = data.Search[i];
            tbody.innerHTML += `<tr>
                <td>${film.Title}</td>
                <td>${film.Year}</td>
                <td>${film.Type}</td>
                <td><img height="150px" src="${film.Poster}"/></td>
            </tr>`;
        }
    } catch (error) {
        console.log(error);
    }
}
 
// swapiGet("1");
// // "Name": "C-3PO",
// // "Year": "167",
// // "Info": "75",
// document.getElementById('search-form').addEventListener('submit', async function(event) {
//     event.preventDefault();
//     const title = document.getElementById('search-input').value;
//     const response = await fetch(url + title);
//     const data = await response.json();
   
//     if (data.Response === "True") {
//         displayResults(data.Search);
//     } else {
//         alert(data.Error);
//     }
//     });
   
// function displayResults(movies) {
// const tbody = document.getElementById('results-tbody');
// tbody.innerHTML = "";
// movies.forEach(movie => {
// tbody.innerHTML += `
//     <tr>
//         <td>${movie.Title}</td>
//     </tr>`;
//     });
// };
// async function swapiGet(page) {    
//         try {
//             const response = await fetch(url + page);
//             const data = await response.json();
   
//             const pageCount = Math.ceil(data.count / 10);
//             const pagination = document.getElementById("pagination");
   
//             pagination.innerHTML = "";
   
//             let prevPage = page - 1;
//             if(page === "1") {
//                 prevPage = "1";
//             }
   
//             let nextPage = parseInt(page) + 1;
//             if(page == pageCount) {
//                 nextPage = pageCount.toString();
//             }
   
//             pagination.innerHTML += `<li class="page-item" onclick="swapiGet('${prevPage}')"><a class="page-link" href="#">prev</a></li>`;
//             for(let i = 1; i <= pageCount; i++) {
//                 pagination.innerHTML += `<li class="page-item" onclick="swapiGet('${i}')"><a class="page-link" href="#">${i}</a></li>`;
//             }
//             pagination.innerHTML += `<li class="page-item" onclick="swapiGet('${nextPage}')"><a class="page-link" href="#">next</a></li>`;
   
//             console.log(data.results);
           
//             const tbody = document.getElementById("tbody");
//             tbody.innerHTML = "";
//             for (let i = 0; i < data.results.length; i++) {
//                 const person = data.results[i];
//                 tbody.innerHTML += `<tr>
//                     <td>${person.name}</td>
//                     <td>${person.hair_color}</td>
//                     <td>${person.eye_color}</td>
//                 </tr>`;
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }
   
//     swapiGet("1");    
// document.getElementById('search-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const query = document.getElementById('search-form').value;
//     fetchMovies(query, type, 1);
// });
// function fetchMovies(query, type, page) {
//     const url = `${url}?apikey=${apiKey}&type=${type}&page=${page}`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             if (data.Response === 'True') {
//                 renderMovies(data.Search);
//                 renderPagination(query, page, data.totalResults);
//             } else {
//                 document.getElementById('results').innerHTML = '<p>Р¤С–Р»СЊРјРё РЅРµ Р·РЅР°Р№РґРµРЅРѕ!</p>';
//                 document.getElementById('pagination').innerHTML = '';
//             }
//         })
//         .catch(err => console.error('РџРѕРјРёР»РєР°:', err));
// }
 