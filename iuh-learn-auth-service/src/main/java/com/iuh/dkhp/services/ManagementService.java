package com.iuh.dkhp.services;

import com.iuh.dkhp.entities.Management;
import com.iuh.dkhp.repositories.ManagementRepository;
import com.iuh.dkhp.utils.Bcrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ManagementService {
    @Autowired

    private ManagementRepository managementRepository;
    @Autowired
    private Bcrypt bcrypt;

    public ResponseEntity<?> createManagement (Management management) {
        try {
            management.setPassword(bcrypt.encodePassword(management.getPassword()));
            Management m = managementRepository.save(management);
            return ResponseEntity.ok(m);
        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Create Management Failed");
        }
    }

    public ResponseEntity<?> findManagementByID (int id) {
        Management m = managementRepository.findById(id).get();
        if (m != null) {
            return ResponseEntity.status(HttpStatus.FOUND).body(m);
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not Found Management");
        }
    }

    public ResponseEntity<?> findManagementByUsername (String username) {
        Management m = managementRepository.findManagementByUsername(username);
        if (m != null) {
            return ResponseEntity.status(HttpStatus.FOUND).body(m);
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not Found Management");
        }
    }
}
