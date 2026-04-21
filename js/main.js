import { fetchBlogs } from "./api.js";
import { renderBlogs } from "./render.js";

async function init() {
    const res = await fetchBlogs();

    if (res.code === 200){
        renderBlogs(res.data.content);
    } else {
        alert("加载失败")
    }
}

init();