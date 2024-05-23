import BooksContainer from "../../components/BooksContainer/BooksContainer";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-3xl font-bold text-center mt-8">Books</h2>
      <BooksContainer></BooksContainer>
    </div>
  );
};

export default Home;
