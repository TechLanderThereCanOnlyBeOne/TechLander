import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Router, Switch, Route } from "react-router-native";

import { Right, Icon, Left, Header, Container, Body, Title } from "native-base";
import createHistory from "history/createMemoryHistory";

import useCachedResources from "./hooks/useCachedResources";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import JobPage from "./screens/JobPage";
import SearchContainer from "./screens/SearchContainer";

const history = createHistory();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Router history={history}>
        <SafeAreaProvider>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/">
              <Container>
                <Header>
                  <Left>
                    <Icon onPress={() => history.goBack()} name="arrow-back" />
                  </Left>
                  <Body>
                    <Title>TechLander</Title>
                  </Body>
                  <Right />
                </Header>
                <Switch>
                  <Route exact path="/signup" component={SignUp} />
                  <Route exact path="/jobpage" component={SearchContainer} />
                </Switch>
              </Container>
            </Route>
          </Switch>
        </SafeAreaProvider>
      </Router>
    );
  }
}
