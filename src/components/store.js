import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

// styles

const Wrap = styled.div`
  grid-area: content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.BackgroundColor};
  height: 100%;
  width: 90%;
  margin: 20px 0px 0px 5%;
  overflow: hidden;

p{
  font-size: 1vmin;
  padding: 20px;
  text-align: center;
}

.ecwid{
  height: 100%;
}
`;

//JSX

function Store(props) {
  const storeDiv = useRef(null);
  const scriptRef = useRef(null);
  window.ecwid_script_defer = true;
  window.ecwid_dynamic_widgets = true;
  window.ec = window.ec || Object();
  window.ec.storefront = window.ec.storefront || Object();
  window.ec.enable_catalog_on_one_page = true;
  window._xnext_initialization_scripts = [{
    widgetType: 'ProductBrowser',
    id: 'my-store-22606304',
    arg: ["id=productBrowser"]
  }
  ];

  var script = document.createElement('script');
  script.charset = 'utf-8';
  script.type = 'text/javascript';
  script.src = 'https://app.ecwid.com/script.js?22606304';
  script.defer = true;
  script.ref=scriptRef;



useEffect(() => {
    if(!scriptRef.current){
      storeDiv.current.appendChild(script);
    }
});

  return (
    <Wrap>
      <div id="my-store-22606304" ref={storeDiv}></div>
      <div id="my-categories-22606304"></div>
      <div id="my-search-22606304"></div>
      <div className="ec-cart-widget"></div>
    </Wrap>

    );
  }

export default withRouter(Store);