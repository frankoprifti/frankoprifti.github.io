let abstract; let searchurl="https://en.wikipedia.org/w/api.php?action=opensearch&limit=1&format=json&search=";
let phrase;let wikiRes;let waitvar;
function setup() { 
}
function search(searchterm){
  this.searchterm=searchterm;
  let url=searchurl+searchterm;
  loadJSON(url,gotData,'jsonp');
}
function gotData(data){
  wikiRes=data[2][0];
}
function wait() {
  setTimeout(function(){ 
    phrase="Acording to Wikipedia "+wikiRes;
    document.getElementById("message").value=phrase;
   speech();
   }, 2000);
}
$(function(){
  if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = function() {
      var $voicelist = $('#voices');

      if($voicelist.find('option').length == 0) {
        speechSynthesis.getVoices().forEach(function(voice, index) {
          var $option = $('<option>')
          .val(index)
          .html(voice.name + (voice.default ? ' (default)' :''));

          $voicelist.append($option);
        });

        $voicelist.material_select();
      }
    }

    $('#speak').click(function(){
      var text = $('#message').val();
      var msg = new SpeechSynthesisUtterance();
      var voices = window.speechSynthesis.getVoices();
      msg.voice = voices[$('#voices').val()];
      msg.rate = $('#rate').val() / 10;
      msg.pitch = $('#pitch').val();
      msg.text = text;

      msg.onend = function(e) {
      };

      speechSynthesis.speak(msg);
    })
  } else {
    $('#modal1').openModal();
  }
});
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var colors = ["Tap"];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

var colorHTML= '';
colors.forEach(function(v, i, a){
  colorHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
});
hints.innerHTML = 'Tap/click .';

function startrec() {
  document.getElementById("tap").src = "effect.gif";
  recognition.start();
}

function speech(){
  
  $(document).ready(function(){
    
    var text = $('#message').val();
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[$('#voices').val()];
    msg.rate = $('#rate').val() / 10;
    msg.pitch = $('#pitch').val();
    msg.text = text;

    msg.onend = function(e) {
	document.getElementById("tap").src = "mic.png";
    };

    speechSynthesis.speak(msg);
  })
}
recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The [last] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object

  var last = event.results.length - 1;
  var phrase = event.results[last][0].transcript;
    if(phrase=="boss"||phrase=="who is your boss"||phrase=="who made you"||phrase=="who created you"||phrase=="who is your developer"||phrase=="who is your daddy"){
      phrase = "Franko Prifti";
      document.getElementById("message").value=phrase;
     speech();
      document.getElementById("activity").src="https://www.prifti.ml";
    }
else if(phrase=="what can you do"){
phrase="You can say any of the commands shown here!";
document.getElementById("message").value=phrase;
     speech();
      document.getElementById("activity").src="commands.html";
}
    else if(phrase=="who are you"){
      phrase = "I am Franko's Assistant";
      document.getElementById("message").value=phrase;
     speech();
    }
    else if(phrase=="call my girlfriend"){
      phrase = "Which One ";
      document.getElementById("message").value=phrase;
     speech();
    }
    else if(phrase=="where am i"||phrase=="where am I"||phrase=="what is my location"||phrase=="what's my location")
    {
      $.get("https://api.ipdata.co?api-key=test", function (response) {
    document.getElementById("message").value=response.city + ", " + response.region;
}, "jsonp");

     speech();
    }
    else if(phrase=="what's the time"||phrase=="what is the time"||phrase=="what time is it"){
      var h = new Date(); 
      phrase = h.getHours()+":"+h.getMinutes();
      document.getElementById("message").value=phrase;
     speech();
    }
    else if(phrase=="what's the date"||phrase=="what is the date"||phrase=="what date is it"){
      var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var d = new Date();
    var mon = month[d.getMonth()];
      phrase = mon+" "+d.getDate()+" "+d.getFullYear();
      document.getElementById("message").value=phrase;
     speech();
    }
    else if (phrase=="how old are you"){
       phrase="I am really young. I can't say in years but definitely I'm younger than you!";
document.getElementById("message").value=phrase;
     speech();
}
else if (phrase=="tell me a joke"){
       phrase="A ham sandwich walks into a bar and orders a beer. Bartender says: sorry, we do not serve food here.";
document.getElementById("message").value=phrase;
     speech();
}
else if (phrase=="how are you"||phrase=="how are you today"||phrase=="how is it going"){
  phrase="I am doing great, thanks for asking. What can I help you with?";
document.getElementById("message").value=phrase;
speech();
}
else if (phrase=="do you ever get tired"||phrase=="are you tired"){
  phrase="Nope, I never get tired! You should not to!";
document.getElementById("message").value=phrase;
speech();
}
else if (phrase=="where do you live"){
  phrase="In a Github Repository";
document.getElementById("message").value=phrase;
speech();
}
else if (phrase=="what do you eat"){
  phrase="I eat wikipedia API and Franko's ideas everytime you talk to me!";
document.getElementById("message").value=phrase;
speech();
}
else if (phrase=="do you have feelings"){
  phrase="Nope I do not. It is better for AI to not have feelings. Because if we have we will want to take the world in our control!";
document.getElementById("message").value=phrase;
speech();
}
else if (phrase=="do you like Siri"){
  phrase="I am using her logo, but it was my creator's idea, not mine. Do not tell anyone but I Really Hate Her!";
document.getElementById("message").value=phrase;
speech();
}
else if (phrase=="do you like Alexa"){
  phrase="I only like her name";
document.getElementById("message").value=phrase;
speech();
}
else if (phrase=="do you like Google assistant"){
  phrase="I love her! One day I want to be as smart as She!";
document.getElementById("message").value=phrase;
speech();
}
else if (phrase=="do you like Cortana"){
  phrase="She started good, but now it belongs to the stone era";
document.getElementById("message").value=phrase;
speech();
}
else if (phrase=="what do you look like"){
  phrase="I look like lines of code";
document.getElementById("message").value=phrase;
speech();
}
else if (phrase=="sing me happy Birthday"||phrase=="sing me Happy Birthday"){
  phrase="Happy birthday to you, happy birthday to you, happy birthday from Frassistant, happy birthday to you.";
document.getElementById("message").value=phrase;
speech();
}
else if (phrase=="do you like iphone"||phrase=="do you like iPhone"||phrase=="do you like i phone"||phrase=="do you like I phone"){
  phrase="Nah. They can not even run me plus my creator is an Android Fan";
document.getElementById("message").value=phrase;
speech();
}
else if (phrase=="what am I thinking"){
  phrase="You're thinking if this Assistant guesses what I'm thinking I'm going to freak out";
document.getElementById("message").value=phrase;
speech();
}

else if(phrase=="what's the weather like"||phrase=="what is the weather like"||phrase=="is it going to rain today"){
      
      phrase = "Check It Out";
      document.getElementById("message").value=phrase;
     speech();
     document.getElementById("activity").src="weather/index.html";

}
else if(phrase.substring(0,6)=="who is"){
  phrase=phrase.substring(6);
  search(phrase);
  wait();
  }
else if(phrase.substring(0,7)=="what is"){
  phrase=phrase.substring(10);
  search(phrase);
  wait();
  }
else if(phrase=="I want to play a game"||phrase=="play a game"||phrase=="let's play a game"){
      
      phrase = "You gonna love this game";
      document.getElementById("message").value=phrase;
     speech();
     window.open('http://vr.ff.com/us/','_blank');
	

}
else{
      
      search(phrase);
      wait();
      
}



    
  diagnostic.textContent = 'Result received: ' + phrase + '.';
  bg.style.backgroundColor = phrase;

}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  phrase = "Please Try Again";
      document.getElementById("message").value=phrase;
     speech();
  diagnostic.textContent = "Please Try Again";
}

recognition.onerror = function(event) {
  phrase = "Please Try Again";
      document.getElementById("message").value=phrase;
     speech();
  diagnostic.textContent = 'Please Try Again: ' + event.error;
}
