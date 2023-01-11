import type { NextPage } from "next";

import Layout from "../components/Layout";

import AboutUsPage from "../components/About-Us";

const AboutUs: NextPage = () => {
  return (
    <Layout title="Vine-Studio about us info here">
      <AboutUsPage />
    </Layout>
  );
};

export default AboutUs;
