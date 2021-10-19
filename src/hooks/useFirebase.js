import { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, provider)

    }



    const signOutt = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        });
    }



    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePass = e => {
        setPass(e.target.value)
    }





    const signUpp = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                const newUser = result.user
                newUser.displayName = name
                setUser(newUser)
            })
            .catch((error) => {
                setError(error.message)
            });
    }


    const loggIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
            }
        });
    }, [])



    return {
        signInUsingGoogle, user, error, signOutt, handleName, handleEmail, handlePass, signUpp, loggIn
    }
};

export default useFirebase;