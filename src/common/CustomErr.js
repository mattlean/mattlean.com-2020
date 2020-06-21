class CustomErr extends Error {
  constructor(code, msg) {
    super(msg)
    this.code = code
  }
}

export default CustomErr
