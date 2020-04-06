import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

// styles

const NavWrap = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.altBackgroundColor};
  position: sticky;
  top: 0px;
  align-items: center;
  min-height: 50px;
  max-height: 75px;
  height: 75px;
  width: 100%;
  grid-area: nav;
  opacity: 0.9;
  z-index: 99;
`;

const NavList = styled.ul`
  height: 100%;
  width: 100%;
  list-style-type: none;
  margin-right: 40px;
  display: flex;
  justify-content: flex-end;
`;

const NavLink = styled.li`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  text-align: center;
  border-style: solid;
  max-width: 120px;
  min-width: 80px;
  width: 100px;
  border-width: 0px;
  transition: background-color 100ms, border-width 100ms;


  &:hover {
    text-decoration: none;
    border-color: ${(props) => props.theme.altAccentColor};;
    border-width: 0px 0px 4px 0px;
    background-color: ${(props) => props.theme.vignetteColor};

  }
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-family: 'Roboto', Helvetica, Arial;
  font-size: 1.5vmin;
  font-weight: bold;
  color: ${(props) => props.theme.accentColor};
  text-decoration: none;


  &:focus, &:active, &:hover{
    text-decoration: none;
  }

  img{
    width: 1vmin;
    height: 1vmin;
  }

`;

const APPLogo = styled.div`
  width: auto;
  display:block;
  max-height: 75px;
  height: 75px;
  align-self: flex-start;

  img{
    width: 90%;
    height: 90%;
    display: block;
  }
`;



//JSX

function Nav(props) {

  return (
    <NavWrap>
        <APPLogo> </APPLogo>
        <NavList>
            <NavLink>
              <StyledLink to="/purpose">Purpose</StyledLink>
            </NavLink>
            <NavLink>
              <StyledLink to="/solutions">Solutions</StyledLink>
            </NavLink>
            <NavLink>
              <StyledLink to="/results">Results</StyledLink>
            </NavLink>
            <NavLink>  
              <StyledLink to="/contact">Contact</StyledLink>
            </NavLink>
        </NavList>
    </NavWrap>

    );
  }

export default withRouter(Nav);