import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

const style = {
  margin: 12,
};

const upBar = () => (
   <div>
      <RaisedButton label="Primary" primary={true} style={style} />
   </div>
/*   <div>
   <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
</div>*/
);


export default upBar;
