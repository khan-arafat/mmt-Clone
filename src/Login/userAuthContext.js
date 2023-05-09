import React, {createContext, useContext, useEffect, useState} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth"
import {auth} from "./firebaseConfig"
const userAuthContext = createContext();

function AuthContextProvider({children}){
  const [user, setUser] = useState();
  function signup(email, password){
    return createUserWithEmailAndPassword(auth ,email, password);
  }
  function signIn(email, password){
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  useEffect(()=>{
    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        console.log(user);
    })
    // return ()=>{
    //   unsubscribe();
    // }
  } ,[]);
  return <userAuthContext.Provider value = {{user, signup, signIn, logOut}}>{children}</userAuthContext.Provider>
}

 function useUserAuth(){
  return useContext(userAuthContext);
}
export {AuthContextProvider, useUserAuth}