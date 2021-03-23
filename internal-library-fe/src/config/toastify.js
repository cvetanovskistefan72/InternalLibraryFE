import { toast } from 'react-toastify';

const TOAST = (message,type)=>{
    toast[type](message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: 0,
        })
}


export default TOAST