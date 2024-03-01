//Insult Generator Javascript

//Generate insult:

function getInsult () {

    //Get the words:
     var wordBankA = [
        ["Bhosdike", "Maderchod", "Bhen ke lode", "Macchar ki jhant", "Gandu maa ki choot teri", "Randi ke tail", "Ghode ke lode", "Bhosad ke jhantoore", "Tatti ke tiile", "Kale lund ka muth"],
        ["Hulk se chude teri maa", "Bhusandi saand", "Sade hue chutad wale", "Baglundi randi", "Hazar lund ka chuda suar", "Bhosadpati ke chode", "Suar ki jhant", "Randi baaj", "Chutad dana", "Gand mein zanjeerein", "Lode mein chopstick", "Tatton ka paseena", "Jhant mein phassa muth"],
        ["Harri tatti ka keeda", "Kamzor lund ka muth", "Kutiya ka bhosda", "Pital ki gand", "Muth ka juice", "Gobar ka lund", "Kali choot ki jhant", "Katte tatton ka kofta", "Lund biryani", "Tatti ka halwa", "Tendue ke tatte", "Khargosh ka lund", "Betichod"]
    ];
    var wordBankB = [
        ["Chakke ke gand ka baal", "Randue ke lund ka condom", "Kutiya ke kale bobe", "Bhand randi ka choda", "Dariyai ghode ki gandi gand", "Muth laga kapda", "Bhosdike", "Maderchod", "Bhen ke lode", "Macchar ki jhant", "Gandu maa ki choot teri", "Randi ke tail", "Bhosad ke jhantoore", "Bhusandi saand", "Sade hue chutad wale", "Baglundi randi", "Hazar lund ka chuda suar"],
        ["Bhosadpati ke chode", "Suar ki jhant", "Randi baaj", "Chutad dana", "Gand mein zanjeerein", "Lode mein chopstick", "Jhant mein phassa muth", "Harri tatti ka keeda"],
        ["Kamzor lund ka muth", "Kutiya ka bhosda", "Pital ki gand", "Muth ka juice", "Gobar ka lund", "Kali choot ki jhant", "Katte tatton ka kofta"]
    ];
    var wordBankC = ["Chakke ke gand ka baa", "Kutiya ke kale bobe", "Bhand randi ka choda", "Dariyai ghode ki gandi gand", "Hazar lund ka chuda suar", "rand", "bkl", "bhen ka lund", "gandu", "randike", "dalla", "sale", "maa ki chut", "chutiya lund", "beti ke boor me", "mausi ke"];

    //Get the smartness and rudeness values:
    var smartVal = document.getElementById('smart-input').value;
    var rudeVal = document.getElementById('rude-input').value;

    //Generate word arrays based on these:
    var insultArrays = [wordBankA[smartVal], wordBankB[rudeVal], wordBankC];

    //Generate random words from arrays:
    var finalPhrase = [];
    for (i = 0; i < insultArrays.length; i++) {
        var currentArray = insultArrays[i];
        var word = currentArray[Math.floor(Math.random() * currentArray.length)];
        finalPhrase.push(word);
    };
    
    //Post them to the text box:
    document.getElementById('text').textContent = finalPhrase[0] + " " + finalPhrase[1] + " " + finalPhrase[2];

};


//Control social media buttons:


//Copy to clipboard function:

function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0;

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent';


  textArea.value = text;

  document.body.appendChild(textArea);

  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
  } catch (err) {
    console.error('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}

//Show 'Copied!' text
function showCopiedText() {
    var CopiedText = document.getElementById('copied-text')

    CopiedText.style.opacity = 1;
    
    setTimeout(function() { 
        CopiedText.style.opacity = 0; 
    }, 3000);
}

//And the actual copy bit:
function copyToClipboard() {
    var text = document.getElementById("text");
    copyTextToClipboard(text.textContent);
    showCopiedText();
}
const shareeAll = () =>
{
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: `${text.textContent} Unique Gali Invented By This Website`,
      url: 'https://devvlos.github.io/Gali-Generator/ ${text.textContent}',
    }).then(() => {
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
}

