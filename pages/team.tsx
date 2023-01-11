import type { NextPage } from "next";

import Layout from "../components/Layout";
import LoginPage from "../components/Login";
import Footer from "../components/Footer";

const TheTeams: NextPage = () => {
  return (
    <Layout title="Vine-Studio teams info here">
      <LoginPage />
    </Layout>
  );
};

export default TheTeams;
