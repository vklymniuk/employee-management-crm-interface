import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';
import moment from 'moment';

import { DATE_FORMAT, ACTION_LOGS } from 'consts';

import Box from '../theme/utility/box';
import theme from '../../settings/themes';
import ActionLogCard from './ActionLogCard';
import getLinkByEntity from './helpers/getLinkByEntity';
import getChanges from './helpers/getChanges';
import customLogHandler from './handlers';

const { logColors } = theme.themedefault;

const ActionLogInfo = props => {
  const { log } = props;

  const user = `${log.user.firstName || 'First Name'} ${log.user.lastName || 'Last Name'}`;
  const action = log.actionType || 'actionType';
  const entity = log.entityType || 'entityType';
  const { entityId } = log;

  const renderTitle = () => (
    <div className="cardTitle">
      <h1>
        {`${user} ${action} ${entity}`}
        &nbsp;
        {getLinkByEntity(entity, entityId, true)}
      </h1>
    </div>
  );

  const renderChanges = () => {
    const { oldData, newData, changes, actionType } = log;

    if (oldData && newData && actionType === ACTION_LOGS.TYPE.UPDATED) {
      return changes.map(field => {
        const { previous, current } = getChanges(field, oldData, newData);

        const prevValue = field.toLowerCase().endsWith('date')
          ? moment(previous).format(DATE_FORMAT.LOGS_DATE_FORMAT)
          : previous;
        const curentValue = field.toLowerCase().endsWith('date')
          ? moment(current).format(DATE_FORMAT.LOGS_DATE_FORMAT)
          : current;

        return (
          <div key={field}>
            <div>
              <b>{`${field}:`}</b>
            </div>
            <div className="changes">
              <Tag color={logColors.oldData}>{String(prevValue)}</Tag>
              <Tag color={logColors.newData}>{String(curentValue)}</Tag>
            </div>
          </div>
        );
      });
    }

    if (
      actionType === ACTION_LOGS.TYPE.BULK_CREATED ||
      actionType === ACTION_LOGS.TYPE.BULK_DELETED
    ) {
      const logHandler = customLogHandler(log);
      return logHandler;
    }
    return null;
  };
  return (
    <ActionLogCard>
      <Box title={renderTitle()}>
        <div className="displayTable">{renderChanges()}</div>
      </Box>
    </ActionLogCard>
  );
};

ActionLogInfo.defaultProps = {
  log: {
    user: { firstName: '', lastName: '' },
    oldData: {},
    newData: {},
    changes: [],
  },
};

ActionLogInfo.propTypes = {
  log: PropTypes.object,
};

export default ActionLogInfo;