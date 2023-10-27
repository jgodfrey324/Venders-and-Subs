import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import SearchPage from "./components/SearchPage";
import EntryDetail from "./components/EntryDetail";
import NewEntryFormPage from "./components/NewEntryFormPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route path="/entries/new">
            <NewEntryFormPage />
          </Route>
          <Route exact path="/entries/:entryId">
            <EntryDetail />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
