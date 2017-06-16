import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const AuthButton = (props) => {
    if (props.authenticated) {
        return (
            <RaisedButton
                label={'Logout'}
                onTouchTap={props.auth.logout}
                fullWidth
                secondary
            />
        )
    } else {
        return (
            <RaisedButton
                label={'Login / Signup'}
                onTouchTap={props.auth.showLock}
                fullWidth
                primary
            />
        )
    }

}

export default AuthButton