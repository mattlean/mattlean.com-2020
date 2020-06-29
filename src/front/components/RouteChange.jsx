const { useEffect } = require('react')

const RouteChange = ({ pathname }) => {
  useEffect(() => {
    if (window.isInitLoad) {
      window.isInitLoad = false
    }
  }, [pathname])

  return null
}

export default RouteChange
