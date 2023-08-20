import { ReactElement } from "react";

interface IContainer {
  children: ReactElement;
}

const Container = ({ children }: IContainer) => {
  return <div className="pt-5 max-w-[80rem] m-auto">{children}</div>;
};

export default Container;
