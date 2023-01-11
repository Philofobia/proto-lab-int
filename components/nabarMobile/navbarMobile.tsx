import Link from "next/link";
import { NavbarConsumer } from "../../context/NavbarMobileContext";
import { RegioneInt } from "../../types/types";

const NavbarMobile = ({ navigationData }: { navigationData: RegioneInt[] }) => {
  const { navbar, switchNavbar } = NavbarConsumer();
    
  if(navbar){
    return (
    <nav className="absolute bg-base-100 top-12 h-screen z-20 w-full sm:hidden">
      <ul>
        <li>
        <Link href="/" className="btn btn-ghost w-full text-xl" onClick={switchNavbar}>
              <em>Home</em>
            </Link>
        </li>
        {navigationData.map((regione) => (
          <li>
            <Link href={`/${regione.id}`} className="btn btn-ghost w-full text-xl" onClick={switchNavbar}>
              <em>{regione.nome}</em>
            </Link>
            <ul>
                {regione.provincie.map((prov) => (
                    <li>
                        <Link href={`/regione/${regione.id}/prov/${prov.id}`} className="btn btn-ghost w-full" onClick={switchNavbar}>
                        {prov.nome}
                        </Link>
                    </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );} else return <></>
};

export default NavbarMobile;
