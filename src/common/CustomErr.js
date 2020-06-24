class CustomErr extends Error {
  /**
   * Creates a new CustomErr instance
   * @param {string} code Code corresponding to error
   * @param {string} message Error message
   */
  constructor(code, message) {
    super(message)
    this.code = code
  }
}

export default CustomErr
