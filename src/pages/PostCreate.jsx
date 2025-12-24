import { useState } from "react"
import { useNavigate } from "react-router";

const PostCreate = () => {


    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const navigateTo = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()


      let post = {
        title: title,
        content: content,
        created_at: new Date().toLocaleDateString()
      }


      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(post)
      })
      .then(res => console.log(res.status))
      .then(() => navigateTo('/'))
    }

  return (

    <>
      <h1>Create a new post</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid p-2">
            <label htmlFor="title">Post title</label>
            <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="p-2 rounded border border-gray-500 bg-white" />
          </div>
          <div className="grid p-2">
            <label htmlFor="content">Post content</label>
            <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} type="text" className="p-2 rounded border border-gray-500 bg-white"></textarea>
          </div>

          <div className="px-2">
            <button className="bg-blue-950 cursor-pointer text-white rounded w-full p-2 hover:opacity-85">Create</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostCreate;
