import { Route } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Home from "../Home";
import Apod from "../Apod";
import Archive from "../Archive";
import Main from "../Main/Main";
import { HOME, ARCHIVE, APOD } from "../../constants/routes";

const Layout = (): JSX.Element => (
  <>
    <Header />
    <Main>
      <>
        <Route path={HOME} element={<Home />} />
        <Route path={APOD} element={<Apod />} />
        <Route path={ARCHIVE} element={<Archive />} />
      </>
    </Main>
    <Footer />
  </>
);

export default Layout;
