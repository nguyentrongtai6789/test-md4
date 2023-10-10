function showListStudent() {
    $.ajax({
        url: "http://localhost:8080/api/students/findAll",
        type: "GET",
        success: function (students) {
            let content = `<table class="table table-striped table-hover"><tr><td>STT</td><td>NAME</td><td>DATE OF BIRTH</td><td>EMAIL</td><td>ADDRESS</td><td>PHONE</td><td>CLASSROOM</td><td>ACTION</td><td></td></tr>`
            for (let i = 0; i < students.length; i ++) {
                content += `<tr><td>${i + 1}</td><td>${students[i].name}</td><td>${students[i].dateOfBirth}</td><td>${students[i].email}</td><td>${students[i].address}</td><td>${students[i].phoneNumber}</td><td>${students[i].classroom.name}</td><td><button class="btn btn-warning" onclick="editStudent(${students[i].id})">Edit</button></td><td><button class="btn btn-danger" onclick="deleteStudent(${students[i].id})">Delete</button></td></tr>`
            }
            content += `</table>`
            document.getElementById("list-student").innerHTML = content;
        },
    })
    event.preventDefault()
}
function addNewStudent() {
    window.close()
    window.open("form-create-student.html")
}
function deleteStudent(id) {
    $.ajax({
        url: "http://localhost:8080/api/students/deleteStudent/" + id,
        type: "DELETE",
        success: function () {
            alert("Xoá thành công!")
            showListStudent()
        }
    })
}
function editStudent(id) {
    localStorage.setItem("id_edit", id)
    window.close();
    window.open("form-edit-student.html")
}
function searchByName() {
    let name = $("#name-search").val();
    console.log(name)
    $.ajax({
        url: "http://localhost:8080/api/students/searchByName/" + name,
        type: "GET",
        success: function (students) {
            if (students.length === 0) {
                return alert('Không có tên cần tìm!')
            } else {
                let content = `<table class="table table-striped table-hover"><tr><td>STT</td><td>NAME</td><td>DATE OF BIRTH</td><td>EMAIL</td><td>ADDRESS</td><td>PHONE</td><td>CLASSROOM</td><td>ACTION</td><td></td></tr>`
                for (let i = 0; i < students.length; i ++) {
                    content += `<tr><td>${i + 1}</td><td>${students[i].name}</td><td>${students[i].dateOfBirth}</td><td>${students[i].email}</td><td>${students[i].address}</td><td>${students[i].phoneNumber}</td><td>${students[i].classroom.name}</td><td><button class="btn btn-warning" onclick="editStudent(${students[i].id})">Edit</button></td><td><button class="btn btn-danger" onclick="deleteStudent(${students[i].id})">Delete</button></td></tr>`
                }
                content += `</table>`
                document.getElementById("list-student").innerHTML = content;
            }

        }
    })
}
function home() {
    window.close()
    window.open("home.html")
}