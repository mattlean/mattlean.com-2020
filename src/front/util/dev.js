/**
 * Spawn guide onto document body
 */
// eslint-disable-next-line no-unused-vars
function spawnGuide(topVal) {
  if (!topVal) topVal = 100
  var guide = document.createElement('div')
  guide.setAttribute(
    'style',
    'height: 1px; position: absolute; top: ' +
      topVal +
      'px; right: 0; left: 0; background-color: #ff4fff'
  )
  document.body.appendChild(guide)
  return guide
}
