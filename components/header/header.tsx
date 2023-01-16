import Link from "next/link";
import { NavbarConsumer } from "../../context/NavbarMobileContext";
import { RegioneInt } from "../../types/types";
import ThemeButton from "../themeButton/themeButton";

const Header = ({ navigationData }: { navigationData: RegioneInt[] }) => {
  const { navbar, switchNavbar } = NavbarConsumer();

  return (
    <header className="navbar bg-base-100 shadow-xl fixed z-50 top-0 h-12">
      <div className="navbar-start sm:hidden">
        <button className="btn btn-ghost" onClick={switchNavbar}>
          {navbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          )}
        </button>
      </div>

      <div className="navbar-start hidden sm:inline-block">
      <Link
          href="/"
          className="mr-5 font-title antialiasing text-xl350 hover:text-primary"
        >
          Home
        </Link>
        <Link
          href="/statistics"
          className="mr-5 font-title antialiasing text-xl350 hover:text-primary"
        >
          Statistiche
        </Link>
        <Link
          href="/previsions"
          className="mr-5 font-title antialiasing text-xl350 hover:text-primary"
        >
          Previsioni
        </Link>
        <div className="dropdown dropdown-bottom">
          <label
            tabIndex={0}
            className="mr-5 font-title antialiasing text-xl350 hover:text-primary"
          >
            Regioni
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navigationData.map((regione) =>
              regione.provincie.map((prov) => (
                <li>
                  <Link href={`/${regione.id}/prov/${prov.id}`}>
                    {prov.nome}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <h2 className="font-title antialiasing text-2xl">TRAVEL TREND</h2>
      </div>
      <div className="navbar-end">
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
