// Tekst in "textbox" pakken & gebruiken:
function tekst() {
  var userinput = document.getElementById("textbox").value;
  return userinput;
}

function tellen() {
  Tempinput = tekst();
  var intchar = Tempinput.replace(/[^a-z]/gi, "").length; // Alleen alfabet (A tot Z) gebruiken
  if (intchar == 1) { // Als letters meer dan 1 zijn
    amountofchars = "letter";  // 1 letter? Dan enkelvoud
  } else {
    amountofchars = "letters"; // Meerdere letters? Dan meervoud
  }

  document.getElementById("geschiedenis").innerHTML =
    Tempinput +
    " Heeft " +
    intchar + // Aantal letters gebruikt
    " " +
    amountofchars
    " "; // Moet gebruikt worden, anders werkt dit stukje niet??
}
