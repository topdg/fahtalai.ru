import React, { FC, useState } from "react";
import { Hamburger } from "../../utils/components/Hamburger/Hamburger";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Content } from "../../utils/components/Content/Content";
import { Danger } from "../Danger/Danger";
import { LayoutProps } from "./Layout.types";

import '../../assets/sass/style.scss';

export const Layout: FC<LayoutProps> = ( { pageClassName, children } ) => {

  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = () => setActiveMenu(prev => !prev); 

  return (
    <div className="wrapper">
      <Header active={ activeMenu } toggleMenu={ toggleMenu }  />
      <Hamburger active={ activeMenu } toggleMenu={ toggleMenu }  />
      <Content className={pageClassName}>
        { children }
      </Content>
      <Footer />
      <Danger />
    </div>
  )
}