let settings = {
  width: 10,
  height: 1,
  color: '#000000' };


/* DATA GUI */
const gui =
function datgui() {
  var gui = new dat.GUI();
  // dat.GUI.toggleHide();
  gui.add(settings, "height", 1, 50).step(1).onChange(function (newValue) {
    document.documentElement.style.setProperty(`--item-width`, newValue + 'px');
  });
  gui.add(settings, "width", 1, 10).step(1).onChange(function (newValue) {
    document.documentElement.style.setProperty(`--item-height`, newValue + 'px');
  });
  gui.addColor(settings, "color").onChange(function (newValue) {
    document.documentElement.style.setProperty(`--color`, newValue);
  });
  return gui;
}();