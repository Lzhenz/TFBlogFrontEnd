export function fetchBlogs_old() {
    return Promise.resolve({
        code:200,
        message:"success",
        data:{
            content:[
                {
                    id:1,
                    title: "iphone 全列表",
                    summary: "从2008～2026年的iPhone的全系列汇总",
                    author: "tokusei",
                    createTime: "2026-04-21",
                    category: "手机"
                },
                {
                    id:2,
                    title: "smartisan 全列表",
                    summary: "从2008～2018年的锤子的全系列汇总",
                    author: "tokusei",
                    createTime: "2026-04-19",
                    category: "手机" 
                }
            ],
            totalElements:2
        }
    });
}

export async function fetchBlogs(){
    // 从后端进行调用
    const res = await fetch("http://127.0.0.1:8080/api/blog");
    const data = await res.json();

    return data;
}