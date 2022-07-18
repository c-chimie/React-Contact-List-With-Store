import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./views/home";
import createContact from "./views/createContact";
import injectContext from "./store/appContext";

import { AddContact } from "./component/AddContact";
import { ContactCard } from "./component/ContactCard";
import editContact from "./views/editContact";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/createContact" component={createContact}></Route>
		  <Route exact path="/editContact/:id" component={editContact}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
