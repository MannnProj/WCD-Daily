const counterValue = document.getElementById('counterValue');
    const ctaBtn = document.getElementById('ctaBtn');
    const ctaFeedback = document.getElementById('cta-feedback');
    let counter = 0;

    ctaBtn.addEventListener('click', () => {
      counter++;
      counterValue.textContent = String(counter);

      ctaFeedback.classList.remove('hidden');

      if (counter === 1) {
        ctaFeedback.textContent = `Terimakasih telah mencoba! Anda telah mengklik ctaBtn ${counter} kali.`;
      } else if (counter === 2) {
        ctaFeedback.textContent = 'Teks berubah setelah 2 kali klik feedback.';
      } else if (counter === 3) {
        ctaFeedback.textContent = 'Tombol ctaBtn dinonaktifkan setelah 3 kali klik feedback.';
        ctaBtn.disabled = true;
        ctaBtn.classList.add('opacity-50', 'cursor-not-allowed');
      }
    });