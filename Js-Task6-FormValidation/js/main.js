let ok = document.getElementById('okay')

function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }
  function hasNumber(myString) {
    return /\d/.test(myString);
  }
  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }
ok.onclick = function() {
    let h1 = document.getElementById('h1')
    let userval = document.getElementById('user').value
    let char = userval.charAt(0)
    if((userval == "") || (userval.length < 4) || (!isUpper(char))){
        h1.innerHTML = "Istifadeci adi yanlisdir"
        return false;
    }
    let parol = document.getElementById('pas').value
    if((!isLetter(parol)) && (!hasNumber(parol))){
        h1.innerHTML = 'parol sehvdir'
        return false;
    }
    if((!containsSpecialChars(parol))){
        h1.innerHTML = 'parol sehvdir'
        return false;
    }


    
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(forms.email.value))
  {
    return (true)
  }
    h1.innerHTML = 'Maili duzgun daxil edin'
    return (false)

    
}
document.getElementById('icon').onclick = function() {
    var input = document.getElementById('pas')
    var icon = document.getElementById('icon')
    if(input.type === "password"){
        input.type = "text"
        icon.className = "fa-solid fa-eye-slash"
    }
    else{
        input.type = "password"
        icon.className = "fa-solid fa-eye"
    }
}


