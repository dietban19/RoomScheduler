import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        await fetchUserData(user.uid);
      } else {
        setUserData(null);
      }
      setLoading(false);
    });

    return unsubscribe; // unsubscribe on unmount
  }, []);

  const fetchUserData = async (uid) => {
    const response = await fetch(`/user/${uid}`);
    if (response.ok) {
      const data = await response.json();
      setUserData(data);
    } else {
      console.error("Failed to fetch user data");
    }
  };

  const login = async () => {
    const provider = new auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  };

  const logout = () => {
    return auth.signOut();
  };

  const value = {
    currentUser,
    userData,
    login,
    logout,
    fetchUserData,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
