import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { fetchedThreadObjListAtom } from "../atoms/Atoms";
import { baseUrl } from "../const";

export const ThreadListContainer = () => {
  const [dataListObject, setDataListObject] = useState([]);
  const setFetchedThreadList = useSetRecoilState(fetchedThreadObjListAtom);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(`${baseUrl}threads?offset=0`);
        const fetchedData = await response.data;
        // APIから取得したオブジェクト配列を状態として持つ。
        setDataListObject(fetchedData);
        setFetchedThreadList(fetchedData);
      } catch (e) {
        console.log("error");
      }
    };
    fetchList();
  });

  return (
    <div>
      <table>
        <tbody>
          {dataListObject.map((oneobj) => {
            return (
              <tr key={oneobj.id}>
                <td className="insideTableParagraph">
                  {oneobj.title}
                  <Link to={`/threads/${oneobj.id}`}>スレッド詳細を見る</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
