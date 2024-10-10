import { auth, provider, db } from '../../firebaseSetup';
import { signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/headerSlice';
import './loginWindow.css'

const LoginWindow = () => {
    const dispatch = useDispatch();
  
    const handleLogin = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(user)
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
  
        dispatch(setUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        }));
      } catch (error) {
        console.error("Error logging in with Google:", error);
      }
    };
  
    return (
      <div className='container'>
        <div className="loginWindow">
          <div className="loginWindow__logo"></div>
          <button className='loginWindow__btn' onClick={handleLogin}>Continue with Google</button>
        </div>
      </div>
    );
  }
  
  export default LoginWindow;