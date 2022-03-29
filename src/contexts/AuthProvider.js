import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../config/firebase";

const AuthContext = React.createContext();

const googleProvider = new GoogleAuthProvider();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [loding, setLoding] = useState(true);
	const [currentUser, setCurrentUser] = useState();

	// useEFfect
	useEffect(() => {
		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoding(false);
		});

		return unsubscribe;
	}, []);

	// google login
	async function googleLogin() {
		const auth = getAuth();
		await signInWithPopup(auth, googleProvider);

		const user = auth.currentUser;
		setCurrentUser({ ...user });
	}

	// signup
	async function signup(email, password, username) {
		const auth = getAuth();
		await createUserWithEmailAndPassword(auth, email, password);

		// update profile
		await updateProfile(auth.currentUser, {
			displayName: username,
		});

		const user = auth.currentUser;
		setCurrentUser({ ...user });
	}

	// login
	async function login(email, password) {
		const auth = getAuth();
		return signInWithEmailAndPassword(auth, email, password);
	}

	// logout
	function logout() {
		const auth = getAuth();
		return signOut(auth);
	}

	const value = { currentUser, googleLogin, signup, login, logout };

	return (
		<AuthContext.Provider value={value}>
			{!loding && children}
		</AuthContext.Provider>
	);
}
