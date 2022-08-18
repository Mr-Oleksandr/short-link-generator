import React from 'react';
import CopyLink from "../CopyLink/CopyLink";
import useFetchGenerateLInk from "../../hooks/useFetchGenerateLInk";

const GenerateLink = () => {

 const {
     loading,
     data,
     link,
     setLink,
     submitHandler
 } = useFetchGenerateLInk('generate','POST', 'from');

    return (
        <div>
            <form className="form-short-link" onSubmit={submitHandler}>
                <input
                    className="input-link validate"
                    placeholder="http://type-your-link.here..."
                    id="link"
                    type="url"
                    pattern="https://.*"
                    value={link}
                    required
                    onChange={e => setLink(e.target.value)}/>
                <button className="btn-short" type="submit">Short me</button>
            </form>
            <CopyLink link={data} loading={loading}/>
        </div>
    );
};

export default GenerateLink;
