package com.example.testmodule4.controller;

import com.example.testmodule4.model.Classroom;
import com.example.testmodule4.model.Student;
import com.example.testmodule4.service.IClassroomService;
import com.example.testmodule4.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/students")
public class StudentController {
    @Autowired
    private IStudentService studentService;
    @Autowired
    private IClassroomService classroomService;

    @GetMapping("/findAll")
    public ResponseEntity<List<Student>> findAll() {
        return new ResponseEntity<>(studentService.findAll(), HttpStatus.OK);
    }

    @PostMapping("/addNewStudent")
    public ResponseEntity<String> addNewStudent(@RequestBody Student student) {
        studentService.save(student);
        return new ResponseEntity<>("OK", HttpStatus.OK);
    }

    @GetMapping("/findAllClassroom")
    public ResponseEntity<List<Classroom>> findAllClassroom() {
        return new ResponseEntity<>(classroomService.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/deleteStudent/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable Long id) {
        Student student = studentService.findById(id);
        if (student != null) {
            studentService.deleteById(id);
            return new ResponseEntity<>("OK", HttpStatus.OK);
        }
        return new ResponseEntity<>("NO", HttpStatus.NOT_FOUND);
    }
    @GetMapping("/findById/{id}")
    public ResponseEntity<Student> findById(@PathVariable Long id) {
        Student student = studentService.findById(id);
        if (student != null) {
            return new ResponseEntity<>(student, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
    @GetMapping("/searchByName/{name}")
    public ResponseEntity<List<Student>> searchByName(@PathVariable String name) {
        List<Student> students = studentService.findByNameContaining(name);
        return new ResponseEntity<>(students, HttpStatus.OK);
    }
}
