import { React, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndUp from "./pages/sign_in_and_up/sign_in_and_app.component";
import { auth, CreateUserProfileDocument } from "./firebase/firebase.utils";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await CreateUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }

      setCurrentUser({ userAuth });
    });

    // returned function will be called on component unmount
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  const signOut = () => {
    setCurrentUser(null);
    auth.signOut();
  };

  return (
    <div>
      <Header currentUser={currentUser} signOut={signOut} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signIn" component={SignInAndUp} />
      </Switch>
    </div>
  );
};

export default App;
