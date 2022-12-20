import "../styles/globals.css";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { AppPropsWithLayout, RegioneInt } from "../types/types";
import NextApp, { AppContext } from "next/app";
import { ThemeContextProvider } from "../context/ThemeContext";
import NavbarMobile from "../components/nabarMobile/navbarMobile";
import { NavbarContextProvider } from "../context/NavbarMobileContext";

export default function App({
  Component,
  pageProps,
  navigation,
}: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <ThemeContextProvider>
          <NavbarContextProvider>
            <Header navigationData={navigation} />
            <NavbarMobile navigationData={navigation} />
          </NavbarContextProvider>
          <Component {...pageProps} />
          <Footer />
        </ThemeContextProvider>
      </>
    );
  }

  return (
    <>
      <ThemeContextProvider>
        <NavbarContextProvider>
          <Header navigationData={navigation} />
          <NavbarMobile navigationData={navigation} />
        </NavbarContextProvider>
        <Component {...pageProps} />
        <Footer />
      </ThemeContextProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const response = await fetch("http://localhost:3000/api/regione");
  const data: RegioneInt[] = await response.json();
  const appProps = await NextApp.getInitialProps(appContext);
  const navigation: RegioneInt[] = data;
  return { ...appProps, navigation };
};
