import React from 'react'
import { useUserAuth } from './Login/userAuthContext'
import { Navigate } from 'react-router';

export default function ProtectedRoute({children}){
    const {user} = useUserAuth();
    if(!user){
       return <Navigate to='/login' />
    }
    else {
        return children;
    }
}
