import Link from "next/link";
import { NavbarConsumer } from "../../context/NavbarMobileContext";
import { RegioneInt } from "../../types/types";

const NavbarMobile = ({ navigationData }: { navigationData: RegioneInt[] }) => {
  const { navbar, switchNavbar } = NavbarConsumer();
  if (navbar) {
    return (
      <nav className="absolute bg-base-100 top-12 h-screen z-20 w-full overflow-y-scroll sm:hidden">
        <ul className="mt-[20px]">
          <li>
            <Link
              href="/"
              className="btn btn-ghost w-full text-xl"
              onClick={switchNavbar}
            >
              <em>Home</em>
            </Link>
          </li>
          <li>
            <Link
              href="/previsions"
              className="btn btn-ghost w-full text-xl"
              onClick={switchNavbar}
            >
              <em>Previsioni</em>
            </Link>
          </li>
          <li>
            <Link
              href="/statistics"
              className="btn btn-ghost w-full text-xl"
              onClick={switchNavbar}
            >
              <em>Statistiche</em>
            </Link>
          </li>
          {navigationData.map((regione) => (
            <li>
              <Link
                href={`/${regione.id}`}
                className="btn btn-ghost text-xl w-full z-50"
                onClick={switchNavbar}
              >
                <em>{regione.nome}</em>
              </Link>
              <div className="collapse collapse-arrow" tabIndex={0}>
                <input type="checkbox" className="peer" />
                <div className="collapse-title w-full text-center">
                  Provincie della {regione.nome}
                </div>
                <ul className="collapse-content">
                  {regione.provincie.map((prov) => (
                    <li>
                      <Link
                        href={`/${regione.id}/prov/${prov.id}`}
                        className="btn btn-ghost w-full"
                        onClick={switchNavbar}
                      >
                        {prov.nome}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
          <li>
            <Link
              href="/aboutUs"
              className="btn btn-ghost w-full text-xl"
              onClick={switchNavbar}
            >
              <em>Chi Siamo</em>
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else return <></>;
};

export default NavbarMobile;
