//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease('C4', '8n');
function play() {
  var x = event.clientX;
  var y = event.clientY/window.innerHeight;
  document.getElementById("ther").innerHTML = x + " " + y;
  var note;
  if (y>0.5) note = 'C4';
  else note = 'C5';
  synth.triggerAttackRelease(note, '100n');
}
