import React, { useState, useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Login, ErrorBoundary, Homepage, Footer, Store } from './components';
import GlobalFonts from './fonts/fonts';
import './App.css';

//const Login = React.lazy(() => import('./components'));

// Styles

const theme = {
  backgroundColor: 'rgba(244, 244, 244, 1)',
  altBackgroundColor: 'rgba(3,41,56, 1)',
  vignetteColor: 'rgba(34, 44, 55, 1)',
  accentColor: 'white',
  altAccentColor: 'rgba(190, 137, 33, 1)',
  acOverlayDark: 'rgba(3,41,56, 1)',
  textColor: 'black',
  altTextColor: 'rgba(130, 152, 163, 1)' 
}

const AppWrapper = styled.div`
  position: relative;
  background-color: ${theme.backgroundColor};
  grid-template-areas:
  "nav"
  "content"
  "foot";
  grid-template-columns: auto;
  grid-template-rows: 150px calc(100vh - 250px) 100px;
  height: 100vh;
  overflow-y: scroll;
`;

// JSX
function App(props){
  if (props.location.pathname === '/callback') return;

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <AppWrapper key='app'>
          <GlobalFonts />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/store' component={Store}/>
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default withRouter(App);
