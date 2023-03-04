import React, {useState} from 'react';
import Popconfirms from 'components/theme/Feedback/Popconfirm';
import PropTypes from 'prop-types';
import { DropdownMenu, MenuItem } from 'components/theme/uielements/dropdown';
import LayoutActions from 'components/Actions/Actions.style';
import { Dropdown } from 'components/uielements'

export default function Actions(props) {
  const [ visible, setVisible ] = useState(false);
  const { onEdit, onDeleteConfirm, onPauseConfirm, onStartConfirm, extra } = props;
  const padding0 = { padding: '0' };
  const correctPadding = { padding: '5px 12px' };
  const handleVisibleChange = (visible) => setVisible(visible);

  const actions = (
    <DropdownMenu>

      {onEdit && (
        <MenuItem onClick={onEdit} style={padding0}>
          <div style={correctPadding}>
            Edit
          </div>
        </MenuItem>
      )}

      {onStartConfirm && (
        <MenuItem style={padding0}>
          <Popconfirms
            title="Do you want to start this mailing?"
            okText="Yes"
            cancelText="No"
            placement="topRight"
            onConfirm={onStartConfirm}
          >
            <div style={correctPadding}>
              Start
            </div>
          </Popconfirms>
        </MenuItem>
      )}

      {onPauseConfirm && (
        <MenuItem style={padding0}>
          <Popconfirms
            title="Do you want to pause this mailing?"
            okText="Yes"
            cancelText="No"
            placement="topRight"
            onConfirm={onPauseConfirm}
          >
            <div style={correctPadding}>
              Pause
            </div>
          </Popconfirms>
        </MenuItem>
      )}

      {onDeleteConfirm && (
        <MenuItem style={padding0}>
          <Popconfirms
            title="Are you sure to delete this record?"
            okText="Yes"
            cancelText="No"
            placement="topRight"
            onConfirm={onDeleteConfirm}
          >
            <div style={correctPadding}>
              Delete
            </div>
          </Popconfirms>
        </MenuItem>
      )}

      {extra && (
        <MenuItem style={padding0}>
          <div style={correctPadding}>
            {extra}
          </div>
        </MenuItem>
      )}
    </DropdownMenu>
  );

  return (
    <LayoutActions>
      <Dropdown         
        onVisibleChange={handleVisibleChange} 
        visible={visible} 
        overlay={actions} 
        trigger={["click"]}
        placement="bottomRight"
      >
        <i className="ion-ios-more" />
      </Dropdown>
    </LayoutActions>
  );
}

export function CustomPopconfirms({children, ...restProps}) {

  return (
    <Popconfirms {...restProps}>
      { children }
    </Popconfirms>
  )
}

Actions.propTypes = {
  onDeleteConfirm: PropTypes.func,
  onPauseConfirm: PropTypes.func,
  onStartConfirm: PropTypes.func,
  onEdit: PropTypes.func,
  extra: PropTypes.element,
};

Actions.defaultProps = {
  onDeleteConfirm: null,
  onPauseConfirm: null,
  onStartConfirm: null,
  onEdit: null,
  extra: null,
};

CustomPopconfirms.propTypes = {
  children:  PropTypes.element.isRequired,
  title: PropTypes.string,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
}

CustomPopconfirms.defaultProps = {
  title: 'Are you sure?',
  okText: 'Yes',
  cancelText: 'No',
}