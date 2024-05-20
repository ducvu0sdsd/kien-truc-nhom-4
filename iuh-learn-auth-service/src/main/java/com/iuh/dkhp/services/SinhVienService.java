package com.iuh.dkhp.services;

import com.iuh.dkhp.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SinhVienService {

    @Autowired
    private StudentRepository studentRepository;


}
