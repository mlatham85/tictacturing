import Relay, { Mutation } from 'react-relay'

export default class SignInUser extends Mutation {

  getVariables() {
    return {
      auth0: {
          idToken: this.props.idToken
      }
    }
  }

  getMutation() {
    return Relay.QL`mutation{signinUser}`
  }

  getFatQuery() {
    return Relay.QL`
      fragment on SigninPayload {
        viewer
      }
    `
  }

  getConfigs() {
    return [
      {
        type: 'REQUIRED_CHILDREN',
        children: [
          Relay.QL`
            fragment on SigninUserPayload {
              viewer {
                user {
                  id
                }
              }
            }
          `
        ]
      }
    ]
  }
  
}