import React from 'react';

import Avatar from 'components/avatar';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';

import './header.css';

const meta = require('../../../data/meta.json');

export default function Header() {
  return (
    <header>
      <Avatar uri={meta.avatarUrl} />
      <h1 style={{marginBottom: '8px'}}>{meta.name}</h1>
      <h5>
        <FontAwesomeIcon icon={faMapMarkedAlt} style={{marginRight: '8px'}} />
        {meta.location}
      </h5>
      <br />
    </header>
  );
}
