function declareSafe() {
    const date = new Date();
    date.setTime(date.getTime() + 1 * 60 * 60 * 1000); // Set the cookie to expire in 1 hour
    document.cookie = "captcha_safe=true; expires=" + date.toUTCString() + "; path=/";
    confidenceScore = 10;
  }
  
  export default declareSafe;
  