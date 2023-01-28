import * as React from "react";
import { useState } from "react";
//プロジェクト配下で良かったのか？
import axios from "axios";
import { toast } from 'react-toastify';

export const CreateThread = () => {
  const [thread, setThread] = useState({ title: "" });

  const onClickPostButton = async (e) => {
    e.preventDefault();
    toast.success('新しいスレッドが作られました!')
    await axios.post(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      thread,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setThread({ title: "" })
  }; 


  return (
    <form onSubmit={onClickPostButton}>
      <label>
        投稿をここに書いてね:
        <textarea
          id="textarea"
          placeholder="ここに書いてください"
          value={thread.title}
          onChange={(e) => {
            setThread({ title: e.target.value });
          }}
          required
        ></textarea>
      </label>
      <input type="submit" value="投稿する"></input>
    </form>
  );
};
