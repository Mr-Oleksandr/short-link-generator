import React, {useEffect} from 'react';
import './CopyLink.css'
import {useMessageError} from "../../hooks/useMessageError";
import Loader from "../Loader/Loader";
const CopyLink = ({link, loading}) => {

    const message = useMessageError()

       const handleCopy = () => {
           if(!link){
               message('Nothing copy')
           }else {
               navigator.clipboard.writeText(link)
               message('Copy success')
           }
       }

    return (
        <div>
            {loading ? <Loader/> : <button className="btn-copy" onClick={handleCopy}>{link ? link : 'Copy Link'}</button>}

        </div>
    );
};

export default CopyLink;



