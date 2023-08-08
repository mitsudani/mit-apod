import { Link } from "react-router-dom";
import { HOME, ARCHIVE } from "../../constants/routes";

const Header = (): JSX.Element => {
  return (
    <header>
      <Link to={HOME} data-testid="logo-home-link">
        APOD
        <img
          //src={logoPlaceholder}
          alt="Astronomy Picture of the Day"
        />
      </Link>
      <Link
        to={ARCHIVE}
        className="text-3xl font-bold underline"
        data-testid="archive-link"
      >
        ARCHIVE
      </Link>
    </header>
  );
};

export default Header;
