package com.example.testmodule4.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "student")
@Data
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private LocalDate dateOfBirth;
    private String address;
    private String phoneNumber;
    private String email;
    @ManyToOne
    @JoinColumn(name = "id_classroom")
    private Classroom classroom;
}
