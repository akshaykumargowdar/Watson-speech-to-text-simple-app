var stream=null;
function listen() {
	fetch('/token')
  		.then(function(response) {
      		return response.text();
  		}).then(function (token) {

    stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
        token: token,
        outputElement: '#status_message' // CSS selector or DOM Element
    });
	
    stream.on('data', function(data) {
        if(data.results[0] && data.results[0].final) {
          stopListening();
          console.log('stop listening.');
        }
      });

    stream.on('error', function(err) {
        console.log(err);
    });

    }).catch(function(error) {
      console.log(error);
  });	
    
}

function startListening() {
	if (stream) {
    	stopListening();
    	} else {
    	  listen();
    }
}

function stopListening() {
    if (stream) {
        stream.stop();
        stream = null;
    }
}
