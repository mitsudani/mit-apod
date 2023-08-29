import github from "../../assets/github_logo.png";
import linkedin from "../../assets/linkedin_logo.png";
import stackoverflow from "../../assets/stackoverflow_logo.png";
import {
  GITHUB,
  LINKEDIN,
  NASA_API,
  NASA_APOD,
  STACKOVERFLOW,
} from "../../constants/links";

const Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-row justify-between bg-greyish px-7 py-4 text-white">
      <div className="flex flex-row items-center gap-x-3">
        <a
          className="hover:text-lightblue"
          href={NASA_APOD}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="nasa-apod-link"
        >
          NASA's APOD
        </a>
        <>|</>
        <a
          className="hover:text-lightblue"
          href={NASA_API}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="nasa-api-link"
        >
          NASA Open APIs
        </a>
      </div>
      <div
        className="flex flex-row items-center gap-x-4"
        data-testid="social-links-container"
      >
        <p>Created by Mit:</p>
        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="github-link"
        >
          <img
            className="max-h-[3rem] hover:color-lightblue"
            src={github}
            alt="Mit's GitHub"
          />
        </a>
        <a
          href={STACKOVERFLOW}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="stackoverflow-link"
        >
          <img
            className="max-h-[3rem]"
            src={stackoverflow}
            alt="Mit's StackOverflow"
          />
        </a>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="linkedin-link"
        >
          <img className="max-h-[3rem]" src={linkedin} alt="Mit's LinkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
