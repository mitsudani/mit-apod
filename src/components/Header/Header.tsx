import { Link, NavLink } from "react-router-dom";
import { HOME, ARCHIVE, APOD } from "../../constants/routes";
import apodLogo from "../../assets/apod_logo.png";

const Header = (): JSX.Element => {
  return (
    <header
      className="flex flex-row justify-items-start items-center content-center gap-x-4 bg-violet h-[5rem] px-7 py-4"
      data-testid="header"
    >
      <Link
        to={HOME}
        className="text-white mr-2"
        data-testid="header-logo-home-link"
      >
        <img
          src={apodLogo}
          className="max-h-[4rem]"
          alt="Astronomy Picture of the Day logo"
          data-testid="header-logo-image"
        />
      </Link>
      <nav data-testid="navbar">
        <ul className="flex items-center gap-x-3">
          <li>
            <NavLink
              to={APOD}
              className={({ isActive }) =>
                isActive ? "text-lightblue" : "text-white hover:text-lightblue"
              }
              data-testid="apod-link"
            >
              Today's Picture
            </NavLink>
          </li>
          <li className="text-white">|</li>
          <li>
            <NavLink
              to={ARCHIVE}
              className={({ isActive }) =>
                isActive ? "text-lightblue" : "text-white hover:text-lightblue"
              }
              data-testid="archive-link"
            >
              Archive
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
