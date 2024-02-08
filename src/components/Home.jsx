import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [title, setTitle] = useState("");
  const [view, setView] = useState("");
  const [search, setSearch] = useState("");
  const [Data, setData] = useState([]);

  const [Editid, serEditid] = useState(null);

  useEffect(() => {
    // (async () => {
    //   const res = await axios.get("http://localhost:5000/posts");
    //   setData(res.data);
    // })();
    fetch();
  }, []);

  async function fetch() {
    const res = await axios.get("http://localhost:5000/posts");
    setData(res.data);
  }
  async function submit(e) {
    if (Editid) {
      await axios.put(`http://localhost:5000/posts/${Editid}`, {
        title,
        view,
      });
    } else {
      await axios.post("http://localhost:5000/posts", { title, view });
    }
    serEditid(null);
    fetch();
  }
  const filterd = Data.filter((item) => item.title);
  async function searchFun(e) {
    setSearch(e.target.value);
    console.log(search);

    console.log(filterd);
  }
  async function dataDelete(id) {
    await axios.delete(`http://localhost:5000/posts/${id}`);
    await console.log(id);
    await fetch();
  }

  function editData(id, title, view) {
    serEditid(id);
    setTitle(title);
    setView(view);

    // await axios.put(`http://localhost:5000/posts/${id}`);
  }

  return (
    <div className="grid content-center">
      <h2>Form</h2>
      <div className="flex flex-col border-2 border-black p-4 w-64">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="views"
          value={view}
          onChange={(e) => setView(Number(e.target.value))}
        />
        <button onClick={submit}>{Editid ? "Edit Post" : "Post"}</button>
        {/* <button onClick={submit}>POST</button> */}
      </div>
      <div className="flex flex-col border-2 border-black p-4 w-64">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={searchFun}
        />
        {filterd.map((item) => {
          return (
            <li key={item.id}>
              {item.title}{" "}
              <button
                onClick={() => {
                  dataDelete(item.id);
                }}
              >
                Delete
              </button>{" "}
              <button
                onClick={() => {
                  editData(item.id, item.title, item.view);
                }}
              >
                Edit
              </button>{" "}
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
