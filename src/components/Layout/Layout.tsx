import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header";
import ScrollToTop from "../ScrollToTop";
import Footer from "../Footer";
import Home from "../Home";
import Archive from "../Archive";
import { HOME, ARCHIVE } from "../../constants/routes";

const Layout = (): JSX.Element => (
  <BrowserRouter>
    <Header />
    <ScrollToTop>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={ARCHIVE} element={<Archive />} />
      </Routes>
    </ScrollToTop>
    <Footer />
  </BrowserRouter>
);

export default Layout;
