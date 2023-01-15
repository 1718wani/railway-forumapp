import { CreateThread } from "../components/CreateThread";
import { Header } from "../components/Header";

export const ThreadNew = () => {
  return (
    <div>
      <Header title="投稿ページです" />
      <CreateThread />
    </div>
  );
};
export default ThreadNew;
