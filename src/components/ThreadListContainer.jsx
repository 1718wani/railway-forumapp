import * as React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { fetchedThreadObjListAtom } from "../atoms/Atoms";
import { baseUrl } from "../const";

export const ThreadListContainer = () => {
  const [threadList, setThreadList] = useState([]);
  const [dataListObject, setDataListObject] = useState();
  const setFetchedThreadList = useSetRecoilState(fetchedThreadObjListAtom);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}threads?offset=0`
        );
        const fetchedData = await response.data;
        setDataListObject(fetchedData);
        console.log(fetchedData);
        setFetchedThreadList(fetchedData);
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
                <td className="insideTableParagraph">
                  {onethread}
                  <Link
                    to={`/threads/${
                      dataListObject.find(({ title }) => title === onethread).id
                    }`}
                  >
                    スレッド詳細を見る
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
