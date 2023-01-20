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

/**

    @function
    @async
    @param {AppContext} context - The context of the Next.js app.
    @returns {Promise<{[propName: string]: any}>} - An object containing any initial props for the component.
    */
App.getInitialProps = async (appContext: AppContext) => {
  const response = await fetch('http://localhost:9999/regioni');
  const data: RegioneInt[] = await response.json();
  const appProps = await NextApp.getInitialProps(appContext);
  const navigation: RegioneInt[] = data;
  return { ...appProps, navigation };
};