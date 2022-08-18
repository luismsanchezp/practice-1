function test(){
    let names = document.getElementById('names').value;
    let surname = document.getElementById('surname').value;
    let idType = document.getElementById('idType').value;
    let gender = null;
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').name;
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').name;
    } else if (document.getElementById('other').checked) {
        gender = document.getElementById('other').name;
    }

    console.log("Name: "+names);
    console.log("Surname: "+surname);
    console.log("ID Type: "+idType);
    console.log("Gender: "+gender);
}