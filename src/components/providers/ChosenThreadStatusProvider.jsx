import { createContext, useState } from "react";

export const ChosenThreadStatusContext = createContext({});

export const ChosenThreadStatusProvider = props =>{
    const {children} = props;
    // とってきたAPIのタイトルを設定する
    const [fetchedThreadObjList,setFetchedThreadObjList] = useState([]);

    // ContextオブジェクトとしてuseStateの値を設定

    return (
        <ChosenThreadStatusContext.Provider value={{fetchedThreadObjList,setFetchedThreadObjList}}>
            {children}
        </ChosenThreadStatusContext.Provider>
    )
}

