function showFormEdit() {
    let id = localStorage.getItem("id_edit");
    console.log(id)
    $.ajax({

        url: "http://localhost:8080/api/students/findById/" + id,
        type: "GET",
        success: function (student) {
            $("#name-edit").val(student.name);
            $("#email-edit").val(student.email);
            $("#address-edit").val(student.address);
            $("#date-edit").val(student.dateOfBirth);
            $("#phone-edit").val(student.phoneNumber);
        }
    })
    findAllClassroom()
}
function findAllClassroom() {
    $.ajax({
        url:"http://localhost:8080/api/students/findAllClassroom",
        type: "GET",
        success: function (classrooms) {
            let content = `<select id="classroom-edit">`
            for (let i = 0; i < classrooms.length; i ++) {
                content += `<option value="${classrooms[i].id}">${classrooms[i].name}</option>`
            }
            content += `</select>`
            document.getElementById("classroom-to-select-edit").innerHTML = content;
        }
    })
}
function saveEditStudent() {
    let id = localStorage.getItem("id_edit");
    let name = $("#name-edit").val();
    let email = $("#email-edit").val();
    let date = $("#date-edit").val();
    let address = $("#address-edit").val();
    let phone = $("#phone-edit").val();
    let id_classroom = $("#classroom-edit").val();
    let student = {
        id: id,
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
            alert("Sửa thành công!")
            window.location.href = "home.html"
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