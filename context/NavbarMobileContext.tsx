import { createContext, useContext, useState } from "react";
import { NavbarContextInt } from "../types/types";

export const NavbarContext = createContext<NavbarContextInt>({
    navbar: false,
    switchNavbar: () => {}
});

export const NavbarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [navbar, setNavbar] = useState<boolean>(false);

  const switchNavbar = () => {
    if (navbar === false) setNavbar(true);
    else setNavbar(false)
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
