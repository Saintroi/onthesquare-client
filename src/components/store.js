import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useScript } from '../hooks';

// styles

const Wrap = styled.div`
  grid-area: content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.BackgroundColor};
  height: 100vh;
  width:99vw;
  overflow-x: hidden;

p{
  font-size: 1vmin;
  padding: 20px;
  margin: 0px 20px 0px 20px;
  text-align: center;
}
`;

function xProductBrowser(){};

//JSX

function Store(props) {
useScript('https://app.ecwid.com/script.js?22606304&data_platform=code&data_date=2020-04-06');

useEffect(() => {
  window.localStorage.setItem("show_ecwid_logs","true");
  xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-22606304");});
  return (
    <Wrap>
        <div id="my-store-22606304"></div>
    </Wrap>

    );
  }

export default withRouter(Store);