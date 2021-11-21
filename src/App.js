import { React, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndUp from "./pages/sign_in_and_up/sign_in_and_app.component";
import { auth } from "./firebase/firebase.utils";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
      setCurrentUser(user)
    );

    // returned function will be called on component unmount
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signIn" component={SignInAndUp} />
      </Switch>
    </div>
  );
};

export default App;
