var originalFrequency = parseFloat(440);
var outFrequency = parseFloat(432);

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === 'changeFrequency') {
    originalFrequency = parseFloat(request.frequencyIn);
    
    
    // Adjust the frequency based on the user's input
    outFrequency = request.frequencyOut;
  }
});

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === 'LoopMusic') {
    var oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
        var audioContext = new (window.AudioContext || window.webkitAudioContext)();
        var videoElements = document.getElementsByTagName("video");
        var audioElements = document.getElementsByTagName("audio");
        oscillator.connect(audioContext.destination);
        for(let i = 0;i < videoElements.length;i++)
        {
          const mediaStreamDestination = audioContext.createMediaStreamDestination();
          videoElements[i].srcObject = mediaStreamDestination.stream;
          mediaStreamDestination.connect(oscillator);
        }
        for(let i = 0;i < audioElements.length;i++)
        {
          const mediaStreamDestination = audioContext.createMediaStreamDestination();
          audioElements[i].srcObject = mediaStreamDestination.stream;
          mediaStreamDestination.connect(oscillator);
        }
        
        
        oscillator.frequency.setValueAtTime(originalFrequency / (outFrequency / originalFrequency), audioContext.currentTime);
    oscillator.start();
oscillator.stop(audioContext.currentTime + 1);
  }
});
