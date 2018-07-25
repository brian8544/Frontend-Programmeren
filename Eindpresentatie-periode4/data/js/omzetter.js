function omzetter()                              // Aanroepen van functie
  {
  var a ;
   a = document.formulier.textbox.value;        // formulier en textbox = ID's waarin deze script gaat werken
  for(i=0;i<a.length;i++)
  {
  if(a.charCodeAt(i) >= 65 && a.charCodeAt(i) <= 90)
   {
    document.getElementById('geschiedenis').value = (a.toLowerCase(i));
  }
  else
   document.getElementById('geschiedenis').value = (a.toUpperCase(i));
  }
  }
