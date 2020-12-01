import React from 'react';
import './App.css';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import indigo from '@material-ui/core/colors/indigo';
import lime from '@material-ui/core/colors/lime';
import amber from '@material-ui/core/colors/amber';
import lightGreen from '@material-ui/core/colors/lightGreen';

import Colors from './colors.jsx'




class App extends React.Component {
  constructor() {
    super();

    this.state = {
      colors: [purple[500],
      red[400],
      blue[300],
      pink[900],
      indigo[100],
      lime[500],
      amber[200],
      lightGreen[900]
      ]
    };



  }
  render() {
    return (
      <div className="container ">
        <div className="row ">
          <div className="col ">
            <Colors colorNames={this.state.colors} />
      
          </div>
        </div>
      </div>

    )
  }


}



export default App;
