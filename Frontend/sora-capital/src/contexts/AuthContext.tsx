"use client"

import { ReactNode, createContext, useState } from "react";
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useRouter } from 'next/navigation'

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signInWithEmail: (email: any, password: any) => string;
    signUpWithEmail: (email: any, password: any) => string;
    signout: () => void;
}

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({children} : {children: ReactNode}) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter()

    const signUpWithEmail = (email : any, password : any) => {
        try {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    setUser(userCredential.user);
    
                    router.push('/welcome');
                })
        } catch (e : any){
            return e.message;
        }

        return '';
    }

    const signInWithEmail = (email : any, password : any) => {
        try {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    setUser(userCredential.user);
    
                    router.push('/market')
                })
        } catch (e : any){
            return e.message
        }

        return '';
    }

    const signout = () => {
        try {
            setLoading(true);
            
            signOut(auth).then(() => {
                setUser(null);
            })
        } finally {
            setLoading(false);

            router.push('/');
        }
    }
    
    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signInWithEmail,
            signUpWithEmail,
            signout
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;