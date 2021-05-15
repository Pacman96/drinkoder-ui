
import { useEffect, useState, createContext, useContext } from "react";
import fire from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

fire.initializeApp({
    apiKey: "AIzaSyB51NhOUkilXzbz3GDesXzoJc5kMBdBHI4",
    authDomain: "drinkit-cf0ee.firebaseapp.com",
    projectId: "drinkit-cf0ee",
    storageBucket: "drinkit-cf0ee.appspot.com",
    messagingSenderId: "574847384008",
    appId: "1:574847384008:web:905959b1a429b1527528fd"
});

export const firebase = fire

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children, config }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);


    const getExtraUserData = (user) => {
        if (!config.extraUserCollection) return null
        let promise = new Promise(function (resolve, reject) {
            firebase.firestore().collection(config.extraUserCollection).doc(user.uid).get()
                .then(doc => {
                    const extraUser = { ...user, ...doc.data() }
                    resolve(extraUser)
                })
                .catch((error) => reject(error));
        })
        return promise
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user && config.extraUserCollection) {
                getExtraUserData(user).then(user => {
                    setUser(user)
                    setLoading(false)
                })
            } else {
                setUser(user)
                setLoading(false)
            }
        });
        return unsubscribe;
    }, []);



    const signup = (email = '', password = '', displayName = '', role = 'manager', authorizations = [], extraUserData = {}) => {
        let promise = new Promise(function (resolve, reject) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(({ user }) => {
                    user.updateProfile({ displayName });
                    if (config.extraUserCollection) {
                        const db_role = role || config.initialRole || '';
                        const initialRoleAuthorizations = role ? config.rolesList.filter(i => i.value === db_role)[0].initialAuthorizations : []
                        const db_authorizations = [
                            ...authorizations,
                            ...config.initialAuthorizations,
                            ...initialRoleAuthorizations
                        ]
                        firebase.firestore().collection(config.extraUserCollection).doc(user.uid).set({
                            role: db_role,
                            authorizations: db_authorizations,
                            ...extraUserData
                        })
                    }
                    resolve(user)
                })
                .catch((error) => reject(error));
        });
        return promise;
    };

    const signin = (email, password) => {
        let promise = new Promise(function (resolve, reject) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(({ user }) => resolve(user))
                .catch((error) => reject(error));
        });
        return promise;
    };
    const signout = () => firebase.auth().signOut().then(() => setUser())

    const passwordReset = (email) => {
        let promise = new Promise(function (resolve, reject) {
            firebase.auth().sendPasswordResetEmail(email)
                .then(() => resolve(`Password Reset Email sent to ${email}`))
                .catch((error) => reject(error));
        });
        return promise;
    };

    const isAuthorized = (requiredRoles, requiredAuthorizations) => {
        if (config.extraUserCollection.length < 1) {
            if (!user) return { next: false, code: 403 }
            return { next: true, code: 0, msg: '' }
        } else {
            if (!user) return { next: false, code: 403 }
            if (typeof requiredRoles === 'string' && requiredRoles.length > 0) {
                const match = requiredRoles === user.role
                if (!match) return { next: false, code: 401 }
            }
            if (Array.isArray(requiredRoles) && requiredRoles.length > 0) {
                const match = requiredRoles.includes(user.role)
                if (!match) return { next: false, code: 401 }
            }
            if (typeof requiredAuthorizations === 'string' && requiredAuthorizations.length > 0) {
                const match = user.authorizations.includes(requiredAuthorizations)
                if (!match) return { next: false, code: 401 }
            }
            if (Array.isArray(requiredAuthorizations) && requiredAuthorizations.length > 0) {
                const match = requiredAuthorizations.some(value => user.authorizations.includes(value))
                if (!match) return { next: false, code: 401 }
            }
            return { next: true, code: 0, msg: '' }
        }
    }

    const value = {
        loading,
        user,
        signup,
        signin,
        signout,
        passwordReset,
        isAuthorized
    };

    console.log(value)
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

