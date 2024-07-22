function proceed() {
    var first = document.getElementById('first')
    first.style.display = "none"
    var second = document.getElementById('second')
    second.classList.remove('d-none')
    
}
function next() {
    var name = document.getElementById('name').value
    var mail = document.getElementById('mail').value
    var sic = document.getElementById('sic').value
    var count = 0

    if (name == "") {
        alert("Provide leader name")
        return false
    }
    else{
        count++
    }
    if(mail == "" ){
        alert("Provide leader college mail-id")
        return false
    }
    else{
        count++
    }
    if(sic == ""){
        alert("Provide leader's SIC")
        return false
    }
    else{
        count++
    }

    if (count == 3) {
        
        var first = document.getElementById('first')
        first.style.display = "none"
        var second = document.getElementById('second')
        second.classList.add('d-none')
        var third = document.getElementById('third')
        third.classList.remove('d-none')
    }
    
}
function validateForm() {
    var ps = document.getElementById('problem').value;
    if (ps == "") {
      alert("Problem Statement must be filled out");
      return false;
    }
    var sol = document.getElementById('Solution').value;
    if (sol == "") {
      alert("Please provide the solution to your PS");
      return false;
    }

    alert("Form submitted.")
    location.reload()
    window.location.href("https://www.silicon.ac.in")
}