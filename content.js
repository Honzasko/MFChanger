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
        
        // Get original frequency

        
        oscillator.frequency.setValueAtTime(originalFrequency / (outFrequency / originalFrequency), audioContext.currentTime);
        oscillator.connect(audioContext.destination);
    
    oscillator.start();
oscillator.stop(audioContext.currentTime + 1);
  }
});
