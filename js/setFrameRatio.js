document.querySelector("#imageRatioGp").addEventListener('change',(e) => {
  const selectedRadio = document.querySelector('input[name="imgRatio-group"]:checked').value;

  const captureArea = document.getElementById("capture_area");  
  const parent = captureArea.parentElement; // 부모 요소

  const parentWidth = parent.clientWidth;
  
  switch (selectedRadio) {
    case "Auto" : {
      break;
    };
    case "4:3" : {
      captureArea.style.width = "100%";
      captureArea.style.aspectRatio = "4 / 3";
      captureArea.style.height = `${captureArea.offsetWidth * (3 / 4)}px`; // 4:3 비율로 높이 설정
      break;
    };
    case "1:1" : {
      captureArea.style.width = "100%";
      captureArea.style.aspectRatio = "1 / 1";
      captureArea.style.height = `${captureArea.offsetWidth * (1 / 1)}px`;
      break;
    };
    case "Notion" : {
      captureArea.style.width = "100%";
      captureArea.style.aspectRatio = "18 / 3";
      captureArea.style.height = `${captureArea.offsetWidth * (3 / 18)}px`;
      break;
    };
    case "YouTube" : {
      captureArea.style.width = "100%";
      captureArea.style.aspectRatio = "16 / 9";
      captureArea.style.height = `${captureArea.offsetWidth * (9 / 16)}px`;
      break;
    };
  }
  
});
document.getElementById("capture_area").addEventListener("mousemove", function(event) {
  if (event.buttons === 1) { // 마우스 왼쪽 버튼이 눌려 있을 때만 감지
    document.querySelector('input[name="imgRatio-group"][value="Auto"]').checked = true;
  }
});
