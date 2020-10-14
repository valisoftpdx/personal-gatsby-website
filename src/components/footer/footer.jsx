import React from 'react';

import './footer.css';

const meta = require('../../../data/meta.json');

export default function Footer() {
  return (
    <footer>
      <br />
      <h6>
        Copyright &copy; {new Date().getFullYear()}
        {', '}
        {meta.name}
      </h6>
      <h6>
        Website template made by <a href='https://valisoft.net'>VALISOFT</a>
      </h6>
    </footer>
  );
}
