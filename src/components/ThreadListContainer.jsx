import * as React from "react";
import { useEffect, useState,useContext } from "react";
//プロジェクト配下で良かったのか？
import axios from "axios";
import { Link } from "react-router-dom";
import { ChosenThreadStatusContext } from "./providers/ChosenThreadStatusProvider";



export const ThreadListContainer = () => {
  const [threadList, setThreadList] = useState([]);
  const [dataListObject, setDataListObject] = useState();
  const {fetchedThreadObjList, setFetchedThreadObjList} = useContext(ChosenThreadStatusContext)
  console.log(dataListObject)
  console.log(fetchedThreadObjList)


  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(
          "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0"
        );
        const fetchedData = await response.data;
        setDataListObject(fetchedData)
        console.log(fetchedData)
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
    setFetchedThreadObjList(dataListObject);
  }, []);

  return (
    <div>
      
      <table>
        <tbody>
          {threadList.map((onethread) => {
            return (
              <tr key={onethread}>
                <td className="insideTableParagraph">
                  {onethread}
                  <Link to={`/threads/${dataListObject.find(({title}) => title === onethread ).id}`}>スレッド詳細を見る</Link>  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
