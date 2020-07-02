/**
 * Spawn guide onto document body
 */
// eslint-disable-next-line no-unused-vars
function spawnGuide() {
  var guide = document.createElement('div')
  guide.setAttribute(
    'style',
    'height: 1px; position: absolute; top: 100px; right: 0; left: 0; background-color: #ff4fff'
  )
  document.body.appendChild(guide)
  return guide
}
