import * as React from "react";
import { useEffect, useState } from "react";
//プロジェクト配下で良かったのか？
import axios from "axios";

export const ThreadListContainer = () => {
  const [threadList, setThreadList] = useState([]);

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
        setThreadList(fetchedDataList);
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
          {threadList.map((onethread) => {
            return (
              <tr key={onethread}>
                <td className="insideTableParagraph">{onethread}<button >スレッド詳細を見る</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
