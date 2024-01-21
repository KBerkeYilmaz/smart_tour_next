import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-col w-screen max-w-screen justify-start items-center">
      <section className="w-screen bg-primary flex justify-between py-[0.625rem] px-[1.25rem]">
        <div className="w-1/2 flex justify-start items-center">
          <div
            className="p-2.5"
            role="button"
          >
            <img
              src="facebook-f-logo.svg"
              alt="facebook-logo"
              className="nav-fb-logo"
            />
          </div>
          <div
            className="p-2.5"
            role="button"
          >
            <img
              src="twitter-logo.svg"
              alt="twitter-logo"
            />
          </div>
          <div
            className="p-2.5"
            role="button"
          >
            <img
              src="instagram-logo.svg"
              alt="instagram-logo"
            />
          </div>
          <div
            className="p-2.5"
            role="button"
          >
            <img
              src="linkedin-logo.svg"
              alt="linkedin-logo"
            />
          </div>
        </div>
        <div className="nav-signup-btn-wrapper w-1/2 flex justify-end items-center text-white text-xs">
          <h5
            className="px-[0.563rem]"
            role="button"
          >
            <a href="home">LOGIN</a>
          </h5>
          <h5
            className="px-[0.563rem]"
            role="button"
          >
            <a href="user_signUp.html">SIGNUP</a>
          </h5>
        </div>
      </section>

      <section className="mobile-burger desktop:hidden flex w-screne justify-end items-center">
        <img
          src="bars-solid (1).svg"
          alt=""
        />
      </section>

      <section className="py-[0.625rem] px-[1.25rem] hidden desktop:flex justify-center items-center w-screen">
        <div className="font-medium desktop:text-[0.9rem] wideScreen:text-[1.2rem] nav-items-group flex justify-start p-[0.625rem] gap-[0.875rem] flex-grow">
          <Link href="/">
            <img
              src="/Logo Placeholder.svg"
              alt="main-logo"
              className="desktop:text-[0.9rem] wideScreen:text-[1.2rem]"
            />
          </Link>

          <div
            tabIndex="0"
            className="navbar-btn-drop flex-grow relative bg-white border-none hover:text-primary transition duration-150 rounded-none flex flex-col gap-1"
          >
            <div
              className="flex items-center gap-2 h-full w-full"
              role="button"
            >
              <span>Circuitos</span>
              <img
                src="/chevron-up-solid.svg"
                alt=""
                className="chevron-btn rotate-rev"
              />
            </div>
            <ul
              tabIndex="0"
              className="dropdown-content absolute hidden visible border-none z-[1] menu pl-[1.563rem] py-[0.938rem] text-[0.938rem] font-medium shadow-xl w-52 bg-white translate-y-[3.1rem]"
            >
              <li
                className="text-[#112211] font-light hover:text-primary transition duration-150"
                role="button"
              >
                <a href="tour_list.html">Turquia Tours</a>
              </li>
              <li
                className="text-[#112211] font-light hover:text-primary"
                role="button"
              >
                <a href="tour_list.html">Grecia Tours</a>
              </li>
              <li
                className="text-[#112211] font-light hover:text-primary"
                role="button"
              >
                <a href="tour_list.html">Egipto Tours</a>
              </li>
            </ul>
          </div>
          <div
            tabIndex="0"
            className="navbar-btn-drop flex-grow text-[#112211] relative bg-white border-none hover:text-primary transition duration-150 rounded-none flex flex-col gap-1"
          >
            <div
              className="flex items-center gap-2 h-full w-full"
              role="button"
            >
              <span>Tours Combinados</span>
              <img
                src="/chevron-up-solid.svg"
                alt=""
                className="chevron-btn rotate-rev"
              />
            </div>
            <ul
              tabIndex="0"
              className="dropdown-content absolute hidden visible border-none z-[1] menu pl-[1.563rem] py-[0.938rem] text-[0.938rem] font-medium shadow-xl w-52 bg-white translate-y-[3.1rem]"
            >
              <li
                className="text-[#112211] font-light hover:text-primary transition duration-150"
                role="button"
              >
                <a href="tour_list.html">Turquia & Grecia Tours</a>
              </li>
              <li
                className="text-[#112211] font-light hover:text-primary"
                role="button"
              >
                <a href="tour_list.html">
                  Turquia & Crucero por las islas Griegas
                </a>
              </li>
              <li
                className="text-[#112211] font-light hover:text-primary"
                role="button"
              >
                <a href="tour_list.html">Turquia & Egipto Tours</a>
              </li>
              <li
                className="text-[#112211] font-light hover:text-primary"
                role="button"
              >
                <a href="tour_list.html">Turquia & Grecia & Egipto Tours</a>
              </li>
            </ul>
          </div>
          <div
            tabIndex="0"
            className="navbar-btn-drop flex-grow text-[#112211] relative bg-white border-none hover:text-primary transition duration-150 rounded-none flex flex-col gap-1"
          >
            <div
              className="flex items-center gap-2 h-full w-full"
              role="button"
            >
              <span>Circuitos</span>
              <img
                src="/chevron-up-solid.svg"
                alt=""
                className="chevron-btn rotate-rev"
              />
            </div>
            <ul
              tabIndex="0"
              className="dropdown-content absolute hidden visible border-none z-[1] menu pl-[1.563rem] py-[0.938rem] text-[0.938rem] font-medium shadow-xl w-52 bg-white translate-y-[3.1rem]"
            >
              <li
                className="text-[#112211] font-light hover:text-primary transition duration-150"
                role="button"
              >
                <a href="tour_list.html">Turquia Tours</a>
              </li>
              <li
                className="text-[#112211] font-light hover:text-primary"
                role="button"
              >
                <a href="tour_list.html">Grecia Tours</a>
              </li>
              <li
                className="text-[#112211] font-light hover:text-primary"
                role="button"
              >
                <a href="tour_list.html">Egipto Tours</a>
              </li>
            </ul>
          </div>
          <div
            tabIndex="0"
            className="navbar-btn flex-grow text-[#112211] relative bg-white border-none hover:text-primary transition duration-150 rounded-none flex flex-col gap-1"
          >
            <div
              className="flex items-center gap-2 h-full w-full"
              role="button"
            >
              <a href="tour_list.html">Tours de Lujo & Exclusivo</a>
            </div>
          </div>
          <div
            tabIndex="0"
            className="navbar-btn flex-grow text-[#112211] relative bg-white border-none hover:text-primary transition duration-150 rounded-none flex flex-col gap-1"
          >
            <div
              className="flex items-center gap-2 h-full w-full"
              role="button"
            >
              <a href="tour_list.html">Tours Dilaros</a>
            </div>
          </div>
          <div
            tabIndex="0"
            className="navbar-btn-drop flex-grow text-[#112211] relative bg-white border-none hover:text-primary transition duration-150 rounded-none flex flex-col gap-1"
          >
            <div
              className="flex items-center gap-2 h-full w-full"
              role="button"
            >
              <span>Excursiones para Cruceros</span>
              <img
                src="/chevron-up-solid.svg"
                alt=""
                className="chevron-btn rotate-rev"
              />
            </div>
            {/* <ul
              tabIndex="0"
              className="dropdown-content absolute visible border-none z-[1] menu pl-[1.875rem] py-[0.313rem] text-[0.938rem] font-medium shadow-xl min-w-52 w-fit bg-white translate-y-[3.1rem] flex flex-col gap-[10px]"
            >
              <li
                className="text-[#112211] font-light hover:text-primary transition duration-150"
                role="button"
              >
                <a href="tour_list.html">Puerto de Kusadasi</a>
              </li>
              <li
                className="text-[#112211] font-light hover:text-primary"
                role="button"
              >
                <a href="tour_list.html">Puerto de Estambul</a>
              </li>
              <li
                className="text-[#112211] font-light hover:text-primary"
                role="button"
              >
                <a href="tour_list.html">Grecia</a>
              </li>
            </ul> */}
          </div>
          <div
            tabIndex="0"
            className="navbar-btn flex-grow text-[#112211] relative bg-white border-none hover:text-primary transition duration-150 rounded-none flex flex-col gap-1"
          >
            <div
              className="flex items-center gap-2 h-full w-full"
              role="button"
            >
              <a href="tour_list.html">Traslados</a>
            </div>
          </div>
          <div
            tabIndex="0"
            className="navbar-btn flex-grow text-[#112211] relative bg-white border-none hover:text-primary transition duration-150 rounded-none flex flex-col gap-1"
          >
            <div
              className="flex items-center gap-2 h-full w-full"
              role="button"
            >
              <Link href="/tour_list" >Blog</Link>
            </div>
          </div>
          <div
            tabIndex="0"
            className="navbar-btn flex-grow text-[#112211] relative bg-white border-none hover:text-primary transition duration-150 rounded-none flex flex-col gap-1"
          >
            <div
              className="flex items-center gap-2 h-full w-full"
              role="button"
            >
              <a href="tour_list.html">Quienes Somos</a>
            </div>
          </div>
          <div
            tabIndex="0"
            className="navbar-btn flex-grow text-[#112211] text-[0.938rem] px-[0.625rem] relative bg-primary border-none transition duration-150 rounded-none flex flex-col gap-1"
          >
            <div
              className="flex justify-center items-center gap-2 h-full w-full"
              role="button"
            >
              <a href="tour_list.html">Contacto</a>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
