function test(){
    let names = document.getElementById('names').value;
    let surname = document.getElementById('surname').value;
    let id_type = document.getElementById('id_type').value;
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
    console.log("ID Type: "+id_type);
    console.log("Gender: "+gender);
}