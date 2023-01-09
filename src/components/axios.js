import axios from "axios";

export const instance = axios.create({
  baseURL:
    "https://virtserver.swaggerhub.com/INFO_3/BulletinBoardApplication/1.0.0",
});
