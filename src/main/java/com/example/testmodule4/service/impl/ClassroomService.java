package com.example.testmodule4.service.impl;

import com.example.testmodule4.model.Classroom;
import com.example.testmodule4.repository.IClassroomRepository;
import com.example.testmodule4.service.IClassroomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassroomService implements IClassroomService {
    @Autowired
    private IClassroomRepository classroomRepository;
    @Override
    public List<Classroom> findAll() {
        return classroomRepository.findAll();
    }

    @Override
    public Classroom findById(Long id) {
        return classroomRepository.findById(id).get();
    }

    @Override
    public void save(Classroom classroom) {
        classroomRepository.save(classroom);
    }

    @Override
    public void deleteById(Long id) {
        classroomRepository.deleteById(id);
    }
}
