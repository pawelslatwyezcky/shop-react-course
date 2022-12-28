import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
//   getCurrentUser,
// } from "./utils/firebase";

import { checkUserSession } from "./store/user/user.action";

import Home from "./routes/home.component";
import Navigation from "./routes/navigation.component";
import Authentication from "./routes/authentication.component";
import Shop from "./routes/shop.component";
import Checkout from "./routes/checkout.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  dispatch(checkUserSession());
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
