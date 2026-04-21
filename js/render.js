export function renderBlogs(blogs){
    const container = document.getElementById("blog-list");

    container.innerHTML = blogs.map(blog => `
        <div class="card">
            <h3>${blog.title}</h3>
            <p>${blog.summary}</p>
            <span>${blog.author} | ${blog.createTime}</span>
            <br>
            <span>${blog.category}</span>
        </div>
        `);
}