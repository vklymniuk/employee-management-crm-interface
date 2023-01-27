import React from 'react';
import { ACTION_LOGS } from 'consts';

function roleClaimHandler(log) {
  const { oldData, newData, actionType } = log;
  const { TYPE: ACTION_TYPE } = ACTION_LOGS;

  const resource = oldData?.resource?.firstName || newData?.resource?.firstName || '';
  const technology = oldData?.technology[0]?.title || newData?.technology?.title || '';

  return (
    <div>
      <div>
        {actionType === ACTION_TYPE.BULK_CREATED &&
          `Added new technology: ${technology} to ${resource}`}
        {actionType === ACTION_TYPE.BULK_DELETED &&
          `Deleted technology: ${technology} from ${resource}`}
      </div>
    </div>
  );
}

export default roleClaimHandler;