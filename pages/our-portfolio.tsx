import type { NextPage } from "next";

import Layout from "../components/Layout";
import LoginPage from "../components/Login";
import Footer from "../components/Footer";

const OurPortfolio: NextPage = () => {
  return (
    <Layout title="Vine-Studio login info here">
      <LoginPage />
    </Layout>
  );
};

export default OurPortfolio;
