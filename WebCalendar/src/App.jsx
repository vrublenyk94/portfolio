import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Header from './components/header/header'
import Sidepanel from './components/sidepanel/sidepanel'
import Calendar from './components/calendar/calendar'
import LoginWindow from './components/loginWindow/loginWindow'
import { setUser } from './store/slices/headerSlice'
import '../node_modules/ui-kit-vr/dist/style.css'
import './App.css'
import { db, auth } from './firebaseSetup'
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore"; 

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.header.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          dispatch(setUser(userSnap.data()));
        } else {
          console.log("No such document!");
        }
      } else {
        dispatch(setUser(null));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      {user ? (
        <div className="web-calendar">
          <Header />
          <div className="web-calendar__wrapper">
            <Sidepanel />
            <Calendar />
          </div>
        </div>
      ) : (
        <LoginWindow />
      )}
    </>
  );
}

export default App;