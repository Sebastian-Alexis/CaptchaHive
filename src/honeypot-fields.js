function createHoneypotFields() {
    for (let i = 0; i < 5; i++) {
      const input = document.createElement("input");
      input.type = "text";
      input.className = `honeypot-field-${i}`;
      input.style.display = "none";
      input.addEventListener("input", () => {
        confidenceScore -= 1;
      });
      document.body.appendChild(input);
    }
  }
  
  export default createHoneypotFields;
  