import React from 'react';
import PropTypes from 'prop-types';

export default function Content({children, ...rest}) {
  return (
    <div style={{padding: 38}} {...rest}>
      {children}
    </div>
  );
}

Content.propTypes = {
  children: PropTypes.any
};
