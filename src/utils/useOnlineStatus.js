import { useEffect, useState } from "react"

const useOnlineStatus = () => {

    const [UserStatus,setUserStatus] = useState(true)
    
    useEffect(() =>{
        const setInActive = () => {
            setUserStatus(false);
        }
        const setActive = () => {
            setUserStatus(true);
        }
        window.addEventListener("offline",setInActive);
        window.addEventListener("online",setActive);
        // return () => {
        //     window.removeEventListener('offline', setInActive)
        //     window.removeEventListener('online', setActive)
        // }
    }, []);
    return (UserStatus);
};

export default useOnlineStatus;