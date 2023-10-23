const adivinarNum = document.getElementById("adivinarNum");

adivinarNum.addEventListener("click", () => {
  let limInf = 1;
  let limSup = 100;
  do {
    const posibleNum = Math.floor((limInf + limSup) / 2);

    const respUser = confirm(`¿Tu numero es ${posibleNum} ?`);

    if (respUser ) {
      confirm(`Adivine, Tu numero es ${posibleNum}, excelente decisión`);
      break;
    } else {
      const esMayor = confirm(`¿Tu numero es mas grande?`);

      if (esMayor) {
        limInf = posibleNum;
      } else {
        limSup = posibleNum;
      }
    }
  } while (true);
}); 