function generateRandomShadow(n) {
  let shadow = "";

  for (let i = 0; i < n; i++) {
    const x = Math.random() * 2500;
    const y = Math.random() * 2000;
    shadow += `${x}px ${y}px #FFF, `;
  }

  return shadow.slice(0, -2);
}

const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
  const numShadows = [900, 300, 100][index];
  console.log(numShadows);
  const boxShadowValue = generateRandomShadow(numShadows);
  star.style.boxShadow = boxShadowValue;
});
