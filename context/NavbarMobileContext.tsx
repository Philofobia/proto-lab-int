import { createContext, useContext, useState } from "react";
import { NavbarContextInt } from "../types/types";

export const NavbarContext = createContext<NavbarContextInt>({
  navbar: false,
  switchNavbar: () => {},
});

export const NavbarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [navbar, setNavbar] = useState<boolean>(false);

  const switchNavbar = () => {
    if (navbar === false) {
      setNavbar(true), scroll(0, 0), document.body.classList.add("no-scroll");
    } else {
      setNavbar(false), document.body.classList.remove("no-scroll");
    }
  };

  return (
    <NavbarContext.Provider value={{ navbar, switchNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const NavbarConsumer = () => {
  return useContext(NavbarContext);
};
function preventDefaultForScrollKeys(this: Window, ev: KeyboardEvent) {
  throw new Error("Function not implemented.");
}
