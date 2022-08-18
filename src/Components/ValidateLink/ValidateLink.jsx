import React from 'react';
import CopyLink from '../CopyLink/CopyLink';

import useFetchGenerateLInk from '../../hooks/useFetchGenerateLInk';

const ValidateLink = () => {
  const { loading, data, link, setLink, submitHandler } = useFetchGenerateLInk(
    'from',
    'POST',
    'to'
  );

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="input-link validate"
          placeholder="http://type-your-link.here..."
          id="link"
          type="url"
          value={link}
          required
          onChange={(e) => setLink(e.target.value)}
        />
        <button className="btn-short" type="submit">
          Short me
        </button>
        <CopyLink link={data} loading={loading} />
      </form>
    </div>
  );
};

export default ValidateLink;
