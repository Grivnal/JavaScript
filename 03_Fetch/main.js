
const gitHubUsersAPI = "https://api.github.com/users";



async function showGitHubUsers()
{
    const response = await fetch(gitHubUsersAPI);
    console.log(json);
}







// function fetchUserProfile() {
//     // Get the username from the input field
//     const username = document.getElementById('username').value;
//     const profileDiv = document.getElementById('profile');

//     // Check if the username is empty
//     if (!username) {
//         profileDiv.innerHTML = '<p>Please enter a username.</p>';
//         return;
//     }

//     // Clear any previous profile information
//     profileDiv.innerHTML = '<p>Loading...</p>';

//     // Define the GitHub API URL for the user
//     const apiUrl = `https://api.github.com/users/${username}`;

//     // Fetch user data from GitHub API
//     fetch(apiUrl)
//         .then(response => {
//             // Check if the user exists
//             if (!response.ok) {
//                 throw new Error('User not found');
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Extract user information from the response
//             const { avatar_url, name, login, html_url, blog, location, email, followers, following } = data;

//             // Build the profile HTML content
//             const profileContent = `
//                 <div>
//                     <img src="${avatar_url}" alt="${login}'s avatar">
//                 </div>
//                 <div class="profile-info">
//                     <h2>${name ? name : login}</h2>
//                     <p><strong>Login:</strong> ${login}</p>
//                     <p><strong>Profile URL:</strong> <a href="${html_url}" target="_blank">${html_url}</a></p>
//                     <p><strong>Blog URL:</strong> <a href="${blog}" target="_blank">${blog || 'N/A'}</a></p>
//                     <p><strong>Location:</strong> ${location || 'N/A'}</p>
//                     <p><strong>Email:</strong> ${email || 'N/A'}</p>
//                     <p><strong>Followers:</strong> ${followers}</p>
//                     <p><strong>Following:</strong> ${following}</p>
//                 </div>
//             `;

//             // Insert the profile content into the page
//             profileDiv.innerHTML = profileContent;
//         })
// } підказка чатажпт яку я не поняв нічо