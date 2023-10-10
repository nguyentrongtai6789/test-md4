function showFormCreate() {
    $.ajax({
        url:"http://localhost:8080/api/students/findAllClassroom",
        type: "GET",
        success: function (classrooms) {
            let content = `<select id="classroom-create">`
            for (let i = 0; i < classrooms.length; i ++) {
                content += `<option value="${classrooms[i].id}">${classrooms[i].name}</option>`
            }
            content += `</select>`
            document.getElementById("classroom-to-select").innerHTML = content;
        }
    })
}
function saveNewStudent() {
    let name = $("#name-create").val();
    let email = $("#email-create").val();
    let date = $("#date-create").val();
    let address = $("#address-create").val();
    let phone = $("#phone-create").val();
    let id_classroom = $("#classroom-create").val();
    let student = {
        name: name,
        dateOfBirth: date,
        address: address,
        phoneNumber: phone,
        email: email,
        classroom: {
            id: id_classroom
        }
    }
    $.ajax({
        headers: {
            "Content-Type": "application/json"
        }, // phải có cái headers này chú ý!!!!
        url: "http://localhost:8080/api/students/addNewStudent",
        type: "POST",
        data: JSON.stringify(student),
        success: function () {
            window.location.href="home.html"
            alert("Thêm mới student thành công!")
        },
        error: function () {
            alert("Chưa thêm được")
        }
    })
    event.preventDefault()

}
function home() {
    window.close()
    window.open("home.html")
}