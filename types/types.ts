import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

export interface RegioneInt {
  nome: string;
  id: number;
  descrizione: string[];
  immagini: string[];
  provincie: { nome: string; id: number; img: string }[];
  dataPres: {
    indicatori: string;
    alloggio: string;
    paeseRes: string;
    value: number;
    anno: number;
  }[];
}

export interface provsItalyInt {
  regId: number;
  prov: provInt[];
}

export interface provInt {
  id: number;
  nome: string;
  descrizione: string[];
  img: string[];
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
