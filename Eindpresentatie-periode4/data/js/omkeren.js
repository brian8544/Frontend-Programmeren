function omkeren () {                                           // Aanroepen van functie
            var s = document.getElementById('textbox').value;   // Gebruikt het ID textbox, hiermee gaat het script mee aan de gang
var reversed = '';
            for (var i = s.length - 1; i >= 0; i--) {
                reversed += s[i];
            }
            document.getElementById('geschiedenis').value = reversed; // Omdraaien van tekst gebeurd in andere box
        };
