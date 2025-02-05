function runTypingEffect() {
  const text = "Founder of Tayrus.co";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 100; // Harf başına gecikme
  const eraseDelay = 50; // Silme hızı
  const waitTime = 3000; // Yazı tamamlandıktan sonra bekleme süresi (ms)

  let i = 0;
  let isDeleting = false;

  function typeLoop() {
    if (!isDeleting && i < text.length) {
      // Harf harf yaz
      typingElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeLoop, typingDelay);
    } else if (isDeleting && i > 0) {
      // Harf harf sil
      typingElement.textContent = text.substring(0, i - 1);
      i--;
      setTimeout(typeLoop, eraseDelay);
    } else {
      // Bekle ve yön değiştir
      isDeleting = !isDeleting;
      setTimeout(typeLoop, waitTime);
    }
  }

  typeLoop();
}

document.addEventListener("DOMContentLoaded", runTypingEffect);
