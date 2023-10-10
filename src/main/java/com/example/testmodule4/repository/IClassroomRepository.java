package com.example.testmodule4.repository;

import com.example.testmodule4.model.Classroom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IClassroomRepository extends JpaRepository<Classroom, Long> {
}
