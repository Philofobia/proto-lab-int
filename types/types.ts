import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

export interface RegioneInt {
  regione: {
    nomeRegione: string;
    id: number;
    descrizioneRegione: string;
    immagini: string[];
  };
  province: string[];
}

export interface DataInt {
  id: number;
  tipologiaDato: string;
  tipologiaAlloggio: string;
  provenienza: string;
  annoMese: string;
  valore: number;
}

export interface provInt {
  regione: string;
  provincia: {id: number;
  regione: number;
  nomeProvincia: string;
  descrizioneProvincia: string;}
}

//LAYOUT
type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
  navigation: RegioneInt[];
}

//THEME CONTEXT
export interface ThemeContextInt {
  theme: string;
  switchTheme: () => void;
}

export interface NavbarContextInt {
  navbar: boolean;
  switchNavbar: () => void;
}
