package com.example.testmodule4.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IGenerateService<E> {
    List<E> findAll();
    E findById(Long id);
    void save(E e);
    void deleteById(Long id);
}
