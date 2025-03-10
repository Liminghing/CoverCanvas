document.querySelector('.rangeInput').addEventListener('input',function(event){
  var gradient_value = 100 / event.target.attributes.max.value;
  event.target.style.background = 'linear-gradient(to right, #F47976 0%, #F47976 '+gradient_value * event.target.value +'%, rgb(236, 236, 236) ' +gradient_value *  event.target.value + '%, #00000020 100%)';

  const captureArea = document.getElementById("capture_area");
  if (!captureArea) return;

  const width = captureArea.offsetWidth;
  const height = captureArea.offsetHeight;
  
  const maxRadius = Math.min(width, height) * 0.5; // 가로, 세로 중 작은 값의 50% 제한

  document.querySelector('.frame').style.borderRadius = `${Math.min(event.target.value, maxRadius)}px`;
});