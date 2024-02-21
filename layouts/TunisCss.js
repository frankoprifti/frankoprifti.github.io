"use client";
import { TunisContext } from "@/context/context";
import { Fragment, useContext } from "react";
const TunisCss = () => {
  const { color } = useContext(TunisContext);
  return (
    <Fragment>
      <link rel="stylesheet" href={`/assets/css/skins/${color}.css`} />
    </Fragment>
  );
};
export default TunisCss;
