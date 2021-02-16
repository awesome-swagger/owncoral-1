import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppRootStyle from './AppRootStyle';
import Login from './pages/login';
import AppTheme from './theme/chakra';
import { HeaderStyles } from './theme/typographyStyles';

// eslint-disable-next-line no-empty-pattern
const App = (props: {}) => {
  return (
    <ChakraProvider theme={AppTheme}>
      <Global styles={[AppRootStyle, HeaderStyles]} />
      <Router>
        {/* {debugProfile} */}
        {/* <Global styles={makeRootStyle(theme)} /> */}
        {/* Server handles not-logged-in redirection */}
        <Switch>
          {/* <Route exact path="/" component={Portfolio} /> */}

          <Route exact path="/login">
            <Login /> {/* setUser={setUser} */}
          </Route>

          {/* <Route exact path="/signup" component={Signup} /> */}
          {/* /!* TODO: Redirect not-signed-up users to signup *!/ */}

          {/* <Route exact path="/portfolio" component={Portfolio} /> */}

          {/* <Route exact path="/properties/:id" component={Property} /> */}

          {/* <Route exact path="/new-opportunities" component={Opportunity} /> */}

          {/* <Route exact path="/documents" component={Docs} /> */}

          {/* <Route exact path="/new-opportunities/:id" component={OpportunityDetail} /> */}
        </Switch>
      </Router>
    </ChakraProvider>
  );
};

export default App;
