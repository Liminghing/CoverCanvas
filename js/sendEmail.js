const btn = document.getElementById('contactButton');

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(`클릭!!`);

  btn.innerText = 'Sending...';
  btn.disabled = true; // 버튼 비활성화

  const serviceID = 'default_service';
  const templateID = 'template_nfmeftr';

  emailjs.sendForm(serviceID, templateID, this)
  .then(() => {
    btn.innerText = 'Sent!';
    alert('Sent!');
  }, (err) => {
    btn.innerText = 'Send Email';
    alert(JSON.stringify(err));
  })
  .finally(() => {
    // 다시 활성화할지 계속 비활성화할지는 여기서 결정
    // 여러번 보내지 못하게 하려면 아래 주석 처리:
    // btn.disabled = false;
  });
});



