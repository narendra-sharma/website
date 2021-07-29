import React from "react";
import styled, {createGlobalStyle} from 'styled-components'
import {LogoComponent} from "../../company/logo.component";
import {NavLink, StyledNavLink} from "../links/links";
import {MenuButton} from "../../navigation/menu-button.component";
import {useRouter} from "next/router";
import {HEADER_DEFAULT} from "../../../config/header-config";

const HeaderBackground = styled.div`
  background-color: ${HEADER_DEFAULT};
  width: 100%;
  height: 5rem;
  z-index: -1;
  position: absolute;
  opacity: 0.8;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 99;
  width: 100%;
  top: 0;
  height: 5rem;
`;


const NavContainer = styled.nav`
  display: flex;
  justify-content: right;
  align-items: right;
  padding: 1rem 2.5rem;

  ${StyledNavLink} {
    //color: orange;
    padding:10px;
    :active {
      font-weight: 600;
    }
  }
`

const GlobalStyle = createGlobalStyle`
  a {
    margin: 5px;
  }
`;

const LogoContainer = styled.div`
  max-height: 70%;
  margin-top: auto;
  margin-left: 2.5rem;
  margin-bottom: auto;
  height: 50%;
  min-height: 50%;
`

// todo grab nav links from somewhere
const Header = () => {
  const router = useRouter();
  const isCurrentPath = (path: string) => {
    return path === router.pathname;
  }
  console.log({router});
  console.log(router.pathname, router.basePath);
  return (
    <HeaderContainer>
      <GlobalStyle/>
      <HeaderBackground/>
      <LogoContainer>
        <LogoComponent white/>
      </LogoContainer>
      <NavContainer>
        <NavLink href="/" name="Home" currentPage={isCurrentPath("/")}/>
        <NavLink href="/our-process" name="Our Process"
                 currentPage={isCurrentPath("/our-process")}/>
        <NavLink href="/about-us" name="About Us" currentPage={isCurrentPath("/about-us")}/>
      </NavContainer>
      {/*<MenuButton expanded={false}/>*/}
    </HeaderContainer>
  )
}

export default Header
