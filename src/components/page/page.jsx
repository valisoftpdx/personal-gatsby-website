import React from 'react';
import PropTypes from 'prop-types';

import './page.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page({children}) {
  return (
    <div className='page' id='content-page'>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any
};
