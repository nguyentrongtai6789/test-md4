package com.example.testmodule4.repository;

import com.example.testmodule4.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IStudentRepository extends JpaRepository<Student, Long> {
    List<Student> findByNameContaining(String name);
}
