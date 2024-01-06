function Apply()
{
  var outFrequencyInput = document.getElementById('frequencyIn');
  var outFrequencyOut = document.getElementById('frequencyOut');
  browser.runtime.sendMessage({ type: 'changeFrequency', frequencyIn: outFrequencyInput, frequencyOut: outFrequencyOut });
}
