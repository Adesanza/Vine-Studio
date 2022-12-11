import Head from "next/head";
import { FC, ReactNode } from "react";
import AppHeader from "../AppHeader";
import { LayoutContainer } from "./Layout.styled";
interface LayoutProp {
  children: ReactNode;
  title: string;
}

const Layout: FC<LayoutProp> = ({ children, title }: LayoutProp) => {
  return (
    <LayoutContainer>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=1"
        />
        <link rel="shortcut icon" href="/assets/VinePNGLogo.png" />
      </Head>
      <AppHeader />

      {children}
    </LayoutContainer>
  );
};

export default Layout;
