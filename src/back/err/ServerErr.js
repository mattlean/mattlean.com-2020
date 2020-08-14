import CustomErr from '../../common/CustomErr'

/**
 * Custom errors for server
 */
class ServerErr extends CustomErr {
  /**
   * Creates a new ServerErr instance
   * @param {string} code Code corresponding to error
   * @param {string} message Error message. Setting this will override the default message for the corresponding code.
   */
  constructor(code, message) {
    super(code, message)

    if (code === 'SE001') {
      this.message = `{${code}} Server environment not set`
    } else if (code === 'SE002') {
      this.message = `{${code}} Server port must be explicitly defined when running in production environment`
    }
  }
}

export default ServerErr
