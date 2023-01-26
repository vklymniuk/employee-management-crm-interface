import React from 'react';
import { ACTION_LOGS } from 'consts';
import getLink from './getLink';

const getLinkByEntity = (entity, entityId, withLinkComponent = false) => {
  const { ENTITY_LINKS } = ACTION_LOGS;

  if (ENTITY_LINKS[entity] && withLinkComponent && ENTITY_LINKS[entity]) {
    return getLink(ENTITY_LINKS[entity](entityId), entityId);
  }

  if (ENTITY_LINKS[entity] && !withLinkComponent) {
    return ENTITY_LINKS[entity](entityId);
  }

  return <span>{`ID:${entityId || 0}`}</span>;
};

export default getLinkByEntity;