document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".bg-down").addEventListener("click", function () {
    // 캡처할 요소
    const captureArea = document.getElementById("capture_area");
    
    // 현재 계산된 스타일 정보 가져오기
    const computedStyle = window.getComputedStyle(captureArea);
    
    // 원래 스타일 정보 저장
    const originalStyles = {
      width: captureArea.style.width,
      height: captureArea.style.height,
      backgroundColor: captureArea.style.backgroundColor,
      borderRadius: captureArea.style.borderRadius,
      margin: captureArea.style.margin,
      padding: captureArea.style.padding
    };
    
    // 계산된 스타일을 요소에 직접 적용 (인라인 스타일로)
    captureArea.style.width = computedStyle.width;
    captureArea.style.height = computedStyle.height;
    captureArea.style.backgroundColor = computedStyle.backgroundColor;
    captureArea.style.borderRadius = computedStyle.borderRadius;
    // margin은 캡처 영역 계산에 영향을 줄 수 있어 제외하고 padding만 적용
    captureArea.style.padding = computedStyle.padding;
    
    // border-radius 문제 해결을 위한 래퍼 생성
    const wrapper = document.createElement('div');
    wrapper.style.position = 'fixed';
    wrapper.style.left = '-9999px';
    wrapper.style.top = '-9999px';
    
    // 캡처 요소 복제
    const clone = captureArea.cloneNode(true);
    
    // 복제본에 스타일 명시적 적용
    clone.style.width = computedStyle.width;
    clone.style.height = computedStyle.height;
    clone.style.backgroundColor = computedStyle.backgroundColor;
    // border-radius 명시적 지정
    clone.style.borderRadius = computedStyle.borderRadius;
    clone.style.padding = computedStyle.padding;
    clone.style.overflow = 'hidden'; // 중요: border-radius가 적용된 영역 바깥의 콘텐츠를 숨김
    
    // 래퍼에 추가하고 문서에 삽입
    wrapper.appendChild(clone);
    document.body.appendChild(wrapper);
    
    // 캡처 옵션 설정
    const options = {
      backgroundColor: null, // 배경을 투명하게 설정
      width: parseInt(computedStyle.width),
      height: parseInt(computedStyle.height),
      scale: 5, // 이미지 품질 향상을 위한 스케일 값
      useCORS: true, // 외부 이미지 리소스 허용
      onclone: function(clonedDoc) {
        // 복제된 DOM에서 추가 스타일 조정 가능
        const clonedElement = clonedDoc.getElementById('capture_area');
        if (clonedElement) {
          clonedElement.style.borderRadius = computedStyle.borderRadius;
        }
      }
    };
    
    // html2canvas로 캡처 실행 (복제된 요소 사용)
    html2canvas(clone, options).then(function(canvas) {
      // border-radius 적용을 위한 추가 처리
      const roundedCanvas = document.createElement('canvas');
      const roundedCtx = roundedCanvas.getContext('2d');
      
      roundedCanvas.width = canvas.width;
      roundedCanvas.height = canvas.height;
      
      // 중요: 캔버스 배경을 투명하게 설정
      roundedCtx.clearRect(0, 0, roundedCanvas.width, roundedCanvas.height);
      
      // border-radius 계산 (픽셀 단위로 변환)
      let radius = 5; // 기본값
      if (computedStyle.borderRadius && computedStyle.borderRadius !== "0px") {
        // px 단위로 끝나는 경우 숫자만 추출
        if (computedStyle.borderRadius.endsWith('px')) {
          radius = parseInt(computedStyle.borderRadius);
        } else {
          // % 단위인 경우 픽셀로 계산 (너비 기준)
          const percentage = parseFloat(computedStyle.borderRadius) / 100;
          radius = Math.min(
            roundedCanvas.width * percentage,
            roundedCanvas.height * percentage
          );
        }
      }
      
      const scaledRadius = radius * options.scale;
      
      // 둥근 사각형 경로 생성
      roundedCtx.beginPath();
      roundedCtx.moveTo(scaledRadius, 0);
      roundedCtx.lineTo(roundedCanvas.width - scaledRadius, 0);
      roundedCtx.quadraticCurveTo(roundedCanvas.width, 0, roundedCanvas.width, scaledRadius);
      roundedCtx.lineTo(roundedCanvas.width, roundedCanvas.height - scaledRadius);
      roundedCtx.quadraticCurveTo(roundedCanvas.width, roundedCanvas.height, roundedCanvas.width - scaledRadius, roundedCanvas.height);
      roundedCtx.lineTo(scaledRadius, roundedCanvas.height);
      roundedCtx.quadraticCurveTo(0, roundedCanvas.height, 0, roundedCanvas.height - scaledRadius);
      roundedCtx.lineTo(0, scaledRadius);
      roundedCtx.quadraticCurveTo(0, 0, scaledRadius, 0);
      roundedCtx.closePath();
      
      // 경로를 클리핑 영역으로 설정
      roundedCtx.clip();
      
      // 원본 캔버스 내용 그리기
      roundedCtx.drawImage(canvas, 0, 0);
      
      // 캡처가 완료되면 링크 생성하여 다운로드 (중요: PNG 형식으로 변경)
      var link = document.createElement("a");
      link.href = roundedCanvas.toDataURL("image/png"); // PNG 형식으로 변경 (투명도 지원)
      link.download = '이미지.png'; // 파일 확장자도 png로 변경
      link.click();
      
      // 원래 스타일로 복원
      captureArea.style.width = originalStyles.width;
      captureArea.style.height = originalStyles.height;
      captureArea.style.backgroundColor = originalStyles.backgroundColor;
      captureArea.style.borderRadius = originalStyles.borderRadius;
      captureArea.style.margin = originalStyles.margin;
      captureArea.style.padding = originalStyles.padding;
      
      // 임시로 생성한 래퍼 제거
      document.body.removeChild(wrapper);
    }).catch(function(error) {
      console.error("캡처 중 오류 발생:", error);
      // 임시로 생성한 래퍼 제거
      document.body.removeChild(wrapper);
    });
  });
});