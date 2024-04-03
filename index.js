// Generate Password
function generatePassword() {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_=+';
  
    let charset = '';
    if (document.getElementById('lowercaseCheckbox').checked) {
      charset += lowercaseLetters;
    }
    if (document.getElementById('uppercaseCheckbox').checked) {
      charset += uppercaseLetters;
    }
    if (document.getElementById('numbersCheckbox').checked) {
      charset += numbers;
    }
    if (document.getElementById('symbolsCheckbox').checked) {
      charset += symbols;
    }
  
    const passwordLength = document.querySelector("#range1").value;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    document.getElementById("password").value = password;
  
    // Calculate password strength
    const strength = calculateStrength(password);
    document.getElementById("sTpower").textContent = strength;
  }
  
  // Copy Code from
  const inputText = document.getElementById('password');
  const copyButton = document.getElementById('copyButton');
  copyButton.addEventListener('click', () => {
    inputText.select();
    document.execCommand('copy');
  });
  
  // Range style
  const sliderEl = document.querySelector("#range1");
  const sliderValue = document.querySelector("#rangeValue");
  
  sliderEl.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value;
    sliderValue.textContent = tempSliderValue;
  
    const progress = (tempSliderValue / sliderEl.max) * 100;
    sliderEl.style.background = `linear-gradient(to right, #a637f6 ${progress}%, #2d2039 ${progress}%)`;
  });



    const bWeak = document.getElementById("Weak");
    const bModeratelyStrong = document.getElementById("ModeratelyStrong");
    const bStrong = document.getElementById("Strong");
    const bVeryStrong = document.getElementById("veryStrong");
  // Calculate password strength
  function calculateStrength(password) {
    if (bWeak.style.backgroundColor !== '#a637f6'){
      bWeak .style.backgroundColor === '#a637f6';
    }
    let strength = 0;
    if (password.length >= 8) {
      strength++;
    }
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
      strength++;
    }
    if (/[0-9]/.test(password)) {
      strength++;
    }
    if (/[!@#$%^&*()]/.test(password)) {
      strength++;
    }
    
    switch (strength) {
      
      case 1:
        bWeak.style.backgroundColor = '#a637f6';
        bModeratelyStrong.style.backgroundColor = '#a637f6';
        bStrong.style.backgroundColor = '#a637f6';
        bVeryStrong.style.backgroundColor = '#a637f6';
        bWeak.style.backgroundColor = '#ffa257';
        return "WEAK"  ;
      case 2:
        bWeak.style.backgroundColor = '#a637f6';
        bModeratelyStrong.style.backgroundColor = '#a637f6';
        bStrong.style.backgroundColor = '#a637f6';
        bVeryStrong.style.backgroundColor = '#a637f6';
        bWeak.style.backgroundColor = '#ffa257';
        bModeratelyStrong.style.backgroundColor = '#ffa257';
        return "MODERATE";
      case 3:
        bWeak.style.backgroundColor = '#a637f6';
        bModeratelyStrong.style.backgroundColor = '#a637f6';
        bStrong.style.backgroundColor = '#a637f6';
        bVeryStrong.style.backgroundColor = '#a637f6';
        bWeak.style.backgroundColor = '#ffa257';
        bModeratelyStrong.style.backgroundColor = '#ffa257';
        bStrong.style.backgroundColor = '#ffa257';
        return "STRONG";
      case 4:
        bWeak.style.backgroundColor = '#a637f6';
        bModeratelyStrong.style.backgroundColor = '#a637f6';
        bStrong.style.backgroundColor = '#a637f6';
        bVeryStrong.style.backgroundColor = '#a637f6';
        bWeak.style.backgroundColor = '#ffa257';
        bModeratelyStrong.style.backgroundColor = '#ffa257';
        bStrong.style.backgroundColor = '#ffa257';
        bVeryStrong.style.backgroundColor = '#ffa257';
        return "VERY STRONG";
    }
    bWeak.style.backgroundColor = '#ffa257';
    return "WEAK";
  }  