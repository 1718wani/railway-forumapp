import * as React from "react";
import {useState } from "react";
//プロジェクト配下で良かったのか？
import axios from "axios";

export const CreatePost = () => {
  const [post, setPost] = useState("");

  const data = {
    "post": "ダミーポスト",
  };

  const onClickPostButton = () => {
    axios.post(
      "https://virtserver.swaggerhub.com/INFO_3/BulletinBoardApplication/1.0.0/threads/1/posts",
      data
    );
  };

  return (
    <form onSubmit={onClickPostButton}>
      <label>
        投稿をここに書いてね:
        <textarea
          id="textarea"
          placeholder="ここに書いてください"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
      </label>
      <input type="submit" value="投稿する"></input>
    </form>
  );
};
