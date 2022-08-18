import React from 'react';
import './CopyLink.css';
import { useMessageError } from '../../hooks/useMessageError';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';

const CopyLink = ({ link, loading }) => {
  const message = useMessageError();

  const handleCopy = () => {
    if (!link) {
      message('Nothing copy');
    } else {
      navigator.clipboard.writeText(link);
      message('Copy success');
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <button className="btn-copy" onClick={handleCopy}>
          {link ? link : 'Copy Link'}
        </button>
      )}
    </div>
  );
};
CopyLink.propTypes = {
  link: PropTypes.string,
  loading: PropTypes.bool
};
export default CopyLink;
