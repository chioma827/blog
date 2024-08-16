document.getElementById('postForm').addEventListener('submit', function (e) {  
    e.preventDefault(); // Prevent the form from submitting  

    // Get title and content values  
    const title = document.getElementById('title').value;  
    const content = document.getElementById('content').value;  

    // Create a post object  
    const post = {  
        title,  
        content,  
        id: Date.now()  
    };  

    // Save post to local storage  
    let posts = JSON.parse(localStorage.getItem('posts')) || [];  
    posts.push(post);  
    localStorage.setItem('posts', JSON.stringify(posts));  

    // Clear the form  
    this.reset();  

    // Render posts  
    renderPosts();  
});  

function renderPosts() {  
    const postsContainer = document.getElementById('posts');  
    postsContainer.innerHTML = ""; // Clear previous posts  

    const posts = JSON.parse(localStorage.getItem('posts')) || [];  

    posts.forEach(post => {  
        const postDiv = document.createElement('div');  
        postDiv.classList.add('post');  
        postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;  
        postsContainer.appendChild(postDiv);  
    });  
}  

// Initial render of posts  
renderPosts();  