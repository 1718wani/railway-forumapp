import * as React from "react";
import { useEffect, useState } from "react";
//プロジェクト配下で良かったのか？
import axios from "axios";

export const PostListContainer = () => {
  const [postList, setPostList] = useState([
    "以下はリストが0のときだけ表示されるダミーデータです。",
    "推しについて語るスレ",
    "今期覇権アニメ",
    "TechTrainってどうなの？",
    "暇な人雑談しませんか",
    "Rustについて語るスレ",
    "自宅警備員だけどなんか質問ある？",
    "大阪でおすすめのラーメン教えて",
  ]);

  useEffect(() => {
    const fetchList = async () => {
      const response = await axios.get(
        "https://virtserver.swaggerhub.com/INFO_3/BulletinBoardApplication/1.0.0/threads/1/posts?offset=0"
      );
      const fetchedData = await response.data.posts;
      const fetchedDataList = [];
      fetchedData.map((e) => {
        fetchedDataList.push(e["post"]);
      });
      console.log(fetchedDataList);
      console.log(typeof fetchedDataList);
      if (fetchedDataList.length == 1) {
        return;
      } else {
        setPostList(fetchedDataList);
      }
    };
    fetchList();
  }, []);

  return (
    <div>
      {postList.map((onepost) => {
        return (
          <table key={onepost}>
            <tbody>
              <tr >
                <td  className="insideTableParagraph">{onepost}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};
