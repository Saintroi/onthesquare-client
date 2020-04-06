import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

// styles

const Wrap = styled.div`
  grid-area: foot;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${(props) => props.theme.BackgroundColor};
  height: 100px;

p{
  font-size: 1vmin;
  padding: 20px;
  margin: 0px 20px 0px 20px;
  text-align: center;
}
`;



//JSX

function Footer(props) {

  return (
    <Wrap>
        <p>
          This product is not for use by or sale to persons under the age of 18. This product should be used only as directed on the label. 
          It should not be used if you are pregnant or nursing. Consult with a physician before use if you have a serious medical condition or use prescription medications. 
          A doctor's advice should be sought before using this and any supplemental dietary product. 
          All trademarks and copyrights are property of their respective owners and are not affiliated with nor do they endorse this product. 
          These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure or prevent any disease. 
          By using this site, you agree to follow the Privacy Policy and all Terms & Conditions printed on this site. Void Where Prohibited by Law.
        </p>
    </Wrap>

    );
  }

export default withRouter(Footer);