const resetBt = document.getElementById("resetButton");

resetBt.addEventListener('click', function(e){
  console.log(`click`);
  // 페이지를 새로 고침
  location.reload();
});

