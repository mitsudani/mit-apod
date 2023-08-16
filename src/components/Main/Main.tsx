import { ReactElement } from "react";
import { Routes } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

interface IMain {
  children: ReactElement;
}

const Main = ({ children }: IMain) => {
  return (
    <ScrollToTop>
      <main>
        <Routes>{children}</Routes>
      </main>
    </ScrollToTop>
  );
};

export default Main;
