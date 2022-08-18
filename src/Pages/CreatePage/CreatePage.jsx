import React from 'react';
import PropTypes from 'prop-types';
import GenerateLink from '../../Components/GenerateLink/GenerateLink';
import './CreatePage.css';
import ValidateLink from '../../Components/ValidateLink/ValidateLink';

const CreatePage = ({ validate }) => {
  return (
    <div className="row center">
      <h4 className="title">
        Get the <span className="title-short">short</span> link as you go 👋{' '}
      </h4>
      <div className="col s8 offset-s2">
        <div className="input-field">{validate ? <ValidateLink /> : <GenerateLink />}</div>
      </div>
    </div>
  );
};

CreatePage.propTypes = {
  validate: PropTypes.bool
};
export default CreatePage;
