import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'

// UI elements
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

injectTapEventPlugin()

class Template extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <header>
            <h1>TicTacToe</h1>
            <RaisedButton
              primary
              label={'Test button'}
              onTouchTap={() => { console.log('I work') }} />
          </header>
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Template