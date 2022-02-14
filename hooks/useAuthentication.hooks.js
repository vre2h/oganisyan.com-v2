import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

import firebase from "../lib/firebase.client";

const { auth } = firebase;

const authContext = createContext({});

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuthentication = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      (response) => {
        setUser(response.user);
        return response.user;
      }
    );
  };

  const signout = () => {
    return auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (iUser) => {
      if (iUser) {
        setUser(iUser);
        return iUser;
      }

      setUser(false);
      return false;
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    signin,
    signout,
  };
}

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
