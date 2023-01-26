import { ACTION_LOGS } from 'consts';
import roleClaimHandler from './roleClaimHandler';
import resourceTechnologyHandler from './resourceTechnologyHandler';

function customLogHandler(log) {
  const { entityType } = log;

  switch (entityType) {
    case ACTION_LOGS.ENTITY_TYPES.ROLE_CLAIM:
      return roleClaimHandler(log);
    case ACTION_LOGS.ENTITY_TYPES.RESOURCE_TECHONOLOGY:
      return resourceTechnologyHandler(log);
    default:
      return log;
  }
}

export default customLogHandler;