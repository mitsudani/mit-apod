import { ReactElement } from "react";
import { Routes } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

interface IMain {
  children: ReactElement;
}

const Main = ({ children }: IMain) => {
  return (
    <ScrollToTop>
      <main className="bg-lilac min-h-[calc(100vh-160px)]">
        <Routes>{children}</Routes>
      </main>
    </ScrollToTop>
  );
};

export default Main;
