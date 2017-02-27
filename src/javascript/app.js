require('../less/main.less');
'use strict';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import upBar from './components/upBar.jsx';
import AppBar from 'material-ui/AppBar';

const style = {
  margin: 12,
};

try {
    injectTapEventPlugin();
} catch (e) {}

const muiTheme = getMuiTheme(baseTheme);

/*class App extends Component {
    render() {
        return (
            <div >
                <MuiThemeProvider muiTheme={muiTheme}>
                    <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                </MuiThemeProvider>
            </div>
        )
    }
}*/

const App = () => (
   <div >
      <MuiThemeProvider muiTheme={muiTheme}>
           <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
      </MuiThemeProvider>
   </div>
)
ReactDOM.render(<App/>, document.getElementById('app'));
