export default function createHoneypotFields() {
  for (var i = 1; i <= 5; i++) {
    var honeypotField = document.createElement('input');
    honeypotField.type = 'text';
    honeypotField.name = 'honeypot' + i;
    honeypotField.style.display = 'true';
    document.body.appendChild(honeypotField);
  }

  // check for inputs
  document.addEventListener('input', function(e) {
    if (e.target.type === 'text' && e.target.name.startsWith('honeypot')) {
      alert('Honeypot field filled!');
    }
  });
}

