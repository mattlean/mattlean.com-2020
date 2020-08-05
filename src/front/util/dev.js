/**
 * Spawns guide on screen
 * @param {number} [pos=100] Pixel value to position guide at. Defaults to 100.
 * @param {(horizontal'|'vertical')} [orientation='horizontal'] Vertical or horizontal. Defaults to horizontal.
 * @param {color} [color='#ff4fff'] Color value to use for guide. Defaults to '#ff4fff'.
 */
// eslint-disable-next-line no-unused-vars
function spawnGuide(orientation, pos, color) {
  if (!pos || pos === 0) pos = 100
  if (!color) color = '#ff4fff'

  var guide = document.createElement('div')

  if (orientation === 'vertical') {
    guide.setAttribute(
      'style',
      'width: 1px; position: absolute; top: 0; bottom: 0; left: ' +
        pos +
        'px; background-color: ' +
        color +
        '; z-index: 9999'
    )
    guide.classList.add('vguide')
  } else {
    guide.setAttribute(
      'style',
      'height: 1px; position: absolute; top: ' +
        pos +
        'px; left: 0; right: 0; background-color: ' +
        color +
        '; z-index: 9999'
    )
    guide.classList.add('hguide')
  }

  document.body.appendChild(guide)
  return guide
}
