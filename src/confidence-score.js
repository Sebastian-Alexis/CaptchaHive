function detectOnConfidence() {
    const threshold = 6;
    return confidenceScore < threshold;
  }
  
  export default detectOnConfidence;
  