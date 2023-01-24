import {atom} from 'recoil'
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: sessionStorage,
});

export const fetchedThreadObjListAtom = atom({
    key: "fetchedThreadObjListAtom",
    default: [
      {
        id: 0,
        title: "テスト",
      },
    ],
    effects_UNSTABLE: [persistAtom],
  });