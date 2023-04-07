import React, { useState, useEffect } from "react";
import { Container, Wrapper, Body } from "./style";
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import { Routes } from '../../utils/sidebar'
import { Route, Redirect, Switch } from 'react-router-dom'

function App({ location: { pathname } }) {
  const [active, setActive] = useState(true);
  useEffect(() => {
    pathname === '/dashboard' || pathname === '/docs' || pathname === "/resources" ? setActive(true) : setActive(false);
  }, [pathname])
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Switch>
          <Route path="/dashboard" />
          <Route path="/docs" />
          <Route path="/resources" />
          <Route path="/youtube" />
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/" component={Sidebar} />
        </Switch>
        <Body active={active}>
          {
            Routes.map(({ path, component, children }, index) =>
              children.length ?
                <div key={`${index}+1`}>
                  {
                    children.map((child, childIndex) => (
                      <Route exact key={`${childIndex}+1`} path={`${path}${child.path}${child.params || ""}`} component={child.component} />
                    ))
                  }
                  {
                    children.filter(({ hidden }) => !hidden).length ? (
                      <Route exact path={path}>
                        <Redirect to={`${path}${children[0].path}`} />
                      </Route>
                    )
                      : <Route exact key={`${index}+1`} path={path} component={component} />
                  }
                </div>
                :
                <Route exact key={`${index}+1`} path={path} component={component} />
            )
          }
        </Body>
      </Wrapper>
      {/* <Redirect from="*" to="/dashboard" /> */}
    </Container>
  );
}

export default App;
