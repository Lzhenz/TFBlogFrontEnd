# TFGO Blog 前端

使用 HTML、CSS 和原生 JavaScript 编写的个人博客前端，练习 ES Modules、Fetch 请求和数据驱动页面渲染。

配套后端：[TFBlogBackEnd](https://github.com/Lzhenz/TFBlogBackEnd)。继续使用这个已有后端，无需另建 API 服务。

> 说明依据 2026-09-21 默认分支代码整理；本次仅更新文档，未执行浏览器联调。

## 当前功能与边界

- index.html 加载 ES Module 入口，展示博客列表。
- js/api.js 使用 Fetch 调用现有博客后端。
- js/main.js 判断业务 code，读取 data.content。
- js/render.js 展示标题、摘要、作者、时间和分类。
- 保留 fetchBlogs_old() 模拟数据函数，目前入口使用真实 HTTP 请求。
- schedule-system 下有独立的登录、注册表单练习，**尚未接入博客后端**。
- 尚无文章详情页、组件文件、发布管理页、登录态或数据库访问。

前端当前依赖后端的硬编码博客数据；HTTP 联通不等于已完成数据库持久化。

## 目录与阅读顺序

```text
index.html              页面入口
css/style.css           页面样式
js/api.js               接口请求及旧模拟数据
js/main.js              初始化与响应处理
js/render.js            列表渲染
schedule-system/        独立表单练习
PROJECT_CONTEXT.md      历史学习记录
```

建议按 [index.html](index.html) → [main.js](js/main.js) → [api.js](js/api.js) → [render.js](js/render.js) 阅读。

## 本地运行

1. 按后端 README 启动 TFBlogBackEnd，确认 `http://127.0.0.1:8080/api/blog` 能返回 JSON。
2. 在本仓库根目录启动静态文件预览。若已安装 Python 3，可执行：

```bash
python3 -m http.server 5500 --bind 127.0.0.1
```

3. 打开 `http://127.0.0.1:5500/index.html`。

静态预览仅用于提供本仓库文件，不是新增业务后端。也可使用已有编辑器的静态预览功能，但地址应保持相同。

不要通过 file:// 直接打开：页面使用 ES Modules，并需要遵守后端 CORS 来源设置。当前仓库没有 package.json，无需 npm 安装或前端打包。

## 接口约定

| 项目 | 当前值 |
| --- | --- |
| 方法 | GET |
| 地址 | http://127.0.0.1:8080/api/blog |
| 成功标记 | code === 200 |
| 列表位置 | data.content |
| 展示字段 | title、summary、author、createTime、category |

注意：这里 main.js 的 res 是解析后的 JSON，不是 Axios response。不要与 springBootSL-frontend 的 res.data 混淆。

PROJECT_CONTEXT.md 保留历史学习过程，其中 /api/blogs、计划中的返回类型等内容与当前代码可能不同；接口以 api.js 和后端 Controller 为准。

## 已发现的问题与练习顺序

1. **列表连接**：render.js 将 map() 产生的数组直接赋给 innerHTML，多条数据时会隐式插入逗号；可先补 join("")。
2. **文本输出**：博客字段插入 innerHTML，接入可编辑内容后应改用安全的文本节点或明确的内容清理策略。
3. **请求状态**：api.js 尚未检查 HTTP res.ok；main.js 尚无 try/catch、加载态和空列表提示。
4. **接口配置**：地址硬编码，后续集中管理 API 地址，保持与后端 CORS 一致。
5. **表单练习**：regist.html 的 onsubmit 没有 return，checkForm 也未调用确认密码校验；用户名正则中的 A-z 需要核对。这些页面不能视为完整注册功能。
6. **业务扩展**：数据库列表、文章详情和分类筛选需要先在现有博客后端补齐对应能力。

## 手动检查

- 浏览器 Network 中 /api/blog 返回 JSON。
- 列表字段能显示，控制台没有模块加载或 CORS 错误。
- 停止后端时，观察当前错误表现，作为补充错误提示的练习。
- 增加多条测试数据后检查卡片之间是否出现逗号。
- 当前没有自动化测试脚本；这些检查本次未执行。

## 历史设计参考

原 README 记录的配色保留为设计备忘，不代表已全部应用：

- 背景：Mulled Wine，#52496C。
- 前景：Cameo，#D4B99C。
- 历史另提及 Polo Blue，未给出明确色值。

项目包含 [Apache License 2.0](LICENSE)。
