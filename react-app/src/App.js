import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import SearchPage from "./components/SearchPage";
import EntryDetail from "./components/EntryDetail";
import NewEntryFormPage from "./components/NewEntryFormPage";
import EntryUpdate from "./components/EntryUpdate";
import EntryDelete from "./components/EntryDelete";

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
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/entries/new/">
            <NewEntryFormPage />
          </Route>
          <Route exact path="/entries/:entryId/">
            <EntryDetail />
          </Route>
          <Route exact path="/entries/:entryId/update">
            <EntryUpdate />
          </Route>
          <Route exact path="/entries/:entryId/delete">
            <EntryDelete />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
