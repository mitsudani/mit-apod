import { Link } from "react-router-dom";
import { HOME, ARCHIVE, APOD } from "../../constants/routes";
import apodLogo from "../../assets/apod_logo.png";

const Header = (): JSX.Element => {
  return (
    <header className="flex flex-row justify-between content-center bg-violet">
      <Link to={HOME} className="text-white" data-testid="logo-home-link">
        <img
          src={apodLogo}
          className="max-h-[4rem]"
          alt="Astronomy Picture of the Day"
        />
      </Link>
      <Link to={APOD} className="text-white" data-testid="apod-link">
        APOD link
      </Link>
      <Link to={ARCHIVE} className="text-white" data-testid="archive-link">
        ARCHIVE link
      </Link>
    </header>
  );
};

export default Header;
