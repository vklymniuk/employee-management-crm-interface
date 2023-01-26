import React from 'react';
import { ACTION_LOGS } from 'consts';

function roleClaimHandler(log) {
  const { oldData, newData, actionType } = log;
  const { TYPE: ACTION_TYPE } = ACTION_LOGS;

  const role = oldData?.role?.name || newData?.role?.name || '';
  const claim = oldData?.claim[0]?.name || newData?.claim?.name || '';

  return (
    <div>
      <div>
        {actionType === ACTION_TYPE.BULK_CREATED && `Added new claim: ${claim} to ${role}`}
        {actionType === ACTION_TYPE.BULK_DELETED && `Deleted claim: ${claim} from ${role}`}
      </div>
    </div>
  );
}

export default roleClaimHandler;
