import { Header } from "../components/Header";
import { Headline } from "../components/Headline";
import { ThreadListContainer } from "../components/ThreadListContainer";

const Home = () => {
  return (
    <div>
      <Header
        title="掲示板"
        buttonUrlofMovetoPost="/thread/new/"
        buttonNameofMovetoPost="スレッドをたてる"
      />
      <Headline headlineName="新着スレッド" />
      <ThreadListContainer />
    </div>
  );
};

export default Home;
