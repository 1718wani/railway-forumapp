import * as React from "react";
import { useState } from "react";
//プロジェクト配下で良かったのか？
import axios from "axios";

export const CreatePost = () => {
  const [post, setPost] = useState({ title: "" });

  const onClickPostButton = async () => {
    await axios.post(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      post,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <form onSubmit={onClickPostButton}>
      <label>
        投稿をここに書いてね:
        <textarea
          id="textarea"
          placeholder="ここに書いてください"
          value={post.title}
          onChange={(e) => setPost({ title: e.target.value })}
        ></textarea>
      </label>
      <input type="submit" value="投稿する"></input>
    </form>
  );
};
