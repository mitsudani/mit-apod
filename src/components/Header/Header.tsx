import { Link } from "react-router-dom";
import { HOME, ARCHIVE, APOD } from "../../constants/routes";

const Header = (): JSX.Element => {
  return (
    <header className="flex flex-row justify-between content-center bg-blue-500">
      <Link to={HOME} data-testid="logo-home-link">
        HOME link
        <img
          //src={logoPlaceholder}
          alt="Astronomy Picture of the Day"
        />
      </Link>
      <Link to={APOD} data-testid="apod-link">
        APOD link
      </Link>
      <Link to={ARCHIVE} data-testid="archive-link">
        ARCHIVE link
      </Link>
    </header>
  );
};

export default Header;
