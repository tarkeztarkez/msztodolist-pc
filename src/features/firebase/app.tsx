import * as fb from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { fbConfig } from "./fbConfig";

export const firebase = fb.default.initializeApp(fbConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
