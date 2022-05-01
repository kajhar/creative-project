//create a synth and connect it to the main output (your speakers)
document.querySelector('button')?.addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is ready')
})
const keyboard = ['C4','C#4','D4','D#4','E4','F4','F#4','G4','G#4','A4','A#4','B4','C5','C#5','D5','D#5','E5','F5','F#5','G5','G#5','A5','A#5','B5','C6'];
const synth = new Tone.Synth().toDestination();

// synth.triggerAttackRelease('C4', '8n');
function play() {
  var x = event.clientX/window.innerWidth;
  var y = event.clientY/window.innerHeight;
  var note = keyboard[Math.floor(y*keyboard.length)];
  var vol = Math.min(1.2-Math.abs(0.5-x)*2,1);
  document.getElementById("data").innerHTML = x + '<br>' + y + '<br>'+ note;
  synth.triggerAttackRelease(note, '8n','+0', vol);
}
function erase() {
  document.getElementById("start").innerHTML = "";
}
