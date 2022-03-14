const convert = document.querySelector(".converter");

convert.addEventListener("click", function () {
  const binary = document.querySelector(".Binary").value;

  if (binary.includes("0") && binary.includes("1"))
    document.querySelector(".Decimal").value = parseInt(binary, 2);
  else alert("Number entered is not binary");
});
