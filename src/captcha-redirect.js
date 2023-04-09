function captchaRedirect() {
    if (detectOnConfidence()) {
      window.location.href = "/captcha"; // Set the URL of the captcha page
    }
  }
  
  export default captchaRedirect;
  