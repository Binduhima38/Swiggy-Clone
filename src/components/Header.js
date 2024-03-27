import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "./createContext";
import { useContext } from "react";



const Header= ()=> {
    const {loggedInUser} = useContext(UserContext);
    const [logButton,setlogButton] = useState(false);
    const Userstatus = useOnlineStatus();

    return (
    <div className = "flex m-2 border border-black">
    <div>
    <img className = "flex-none grow-0 w-40 h-32 p-2.5" src= {LOGO_URL}/>
    </div>
    <div className="flex grow justify-end text-xl py-6 my-6">
    <ul className="flex">
        <li className="m-1 p-1">
            OnlineStatus: {Userstatus?"Active":"Inactive"}
        </li>
        <li className="m-1 p-1">
            <Link to="/">Home</Link>
        </li>
        <li className="m-1 p-1">
            <Link to="/About">About</Link>
        </li>
        <li className="m-1 p-1">
            <Link to="/Contact">Contact</Link>
        </li>
        <li className="m-1 p-1">
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>
        </div>
        <div className="flex-none grow-0 text-l py-5 my-5">
        <button className="text-slate-600 border-slate-300 p-2 m-2 rounded-full bg-slate-400/25 hover:bg-slate-400/40"
        onClick = {() => {
            setlogButton(prevSState => !prevSState)
        }
        }>
            {logButton ? "Login" : "Logout"}
        </button>
        </div>
        <div className="flex grow-0 justify-end text-xl px-1 py-7 my-7">{loggedInUser}</div>  
    </div>
)
    };

export default Header;