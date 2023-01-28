const btnpress = document.getElementById("login_btn");
    btnpress.addEventListener(onclick, validate(Event));

  function validate(event) {
    if(event){
    console.log("Entered validation");
    const storedData = localStorage.getItem('Credentials');
    console.log(storedData);
    const arrlength = storedData.length;
    var userName = document.getElementById('Username');
    var userPw = document.getElementById('password');
    var dataarr = new Map;

    for (let i = 0; i < arrlength; i++) {

        var dataarr = storedData[i];

        var storedName = dataarr[0].value;

        var storedPw = dataarr[1].value;

        console.log(dataarr,storedName,storedPw,userName.value,userPw.value);

        if (userName.value == storedName && userPw.value == storedPw) {
            alert('You are logged in.');
            document.location.href = "ResumeCreation.html";
        } else {
            alert('Error on login');
        }
    }}
}