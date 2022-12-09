let samplecolor = () => {
    document.getElementById('eyedropper-btn').addEventListener('click', () => {
        const resultElement = document.getElementById('result');
      
        if (!window.EyeDropper) {
          resultElement.textContent = 'Your browser does not support the EyeDropper API';
          return;
        }
      
        const eyeDropper = new EyeDropper();
      
        eyeDropper.open().then((result) => {
          resultElement.textContent = result.sRGBHex;
          resultElement.style.backgroundColor = result.sRGBHex;
        }).catch((e) => {
          resultElement.textContent = e;
        });
      });
}

export default samplecolor