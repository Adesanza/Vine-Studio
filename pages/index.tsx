import type { NextPage } from "next";
// import Footer from '../components/footer';
import Landing from "../components/Landing";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Vine-Studio info here">
      <Landing />
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
