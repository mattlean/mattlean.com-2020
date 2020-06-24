const { useEffect } = require('react')

const RouteChange = ({ pathname }) => {
  useEffect(() => {
    if (window.isInitLoad) {
      window.isInitLoad = false
    }

    window.scroll(0, 0)
  }, [pathname])

  return null
}

export default RouteChange
