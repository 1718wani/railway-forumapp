import * as React from "react";
import { useEffect, useState } from "react";
//プロジェクト配下で良かったのか？
import axios from "axios";

export const PostListContainer = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(
          "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0"
        );
        const fetchedData = await response.data;
        const fetchedDataList = [];
        fetchedData.map((e) => {
          fetchedDataList.push(e["title"]);
        });
        setPostList(fetchedDataList);
      } catch (e) {
        console.log("error");
      }
    };
    fetchList();
  }, []);

  return (
    <div>
      <table>
        <tbody>
          {postList.map((onepost) => {
            return (
              <tr key={onepost}>
                <td className="insideTableParagraph">{onepost}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
