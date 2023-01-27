import { Link } from 'react-router-dom';
import React from 'react';

const getLink = (path, entityId) => (
  <Link to={path}>
    {`ID:${entityId}`}
  </Link>
);

export default getLink