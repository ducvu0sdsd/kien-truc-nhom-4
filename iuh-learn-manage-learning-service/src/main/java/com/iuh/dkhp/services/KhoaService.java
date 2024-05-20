package com.iuh.dkhp.services;

import com.iuh.dkhp.entities.ChuyenNganh;
import com.iuh.dkhp.entities.Khoa;
import com.iuh.dkhp.repositories.KhoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class KhoaService {

    @Autowired
    private KhoaRepository khoaRepository;

    public ResponseEntity<?> createKhoa (Khoa khoa) {
        Khoa khoaCreated = khoaRepository.save(khoa);
        return ResponseEntity.status(HttpStatus.CREATED).body(khoaCreated);
    }

    public boolean removeKhoa (int id) {
        try {
            khoaRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public ResponseEntity<?> getAll() {
        List<Khoa> khoas = khoaRepository.findAll();
        return ResponseEntity.ok().body(khoas);
    }

    public boolean updateName (Khoa khoa) {
        try {
            khoaRepository.save(khoa);
            return true;
        }catch (Exception e) {
            return false;
        }
    }

    public ResponseEntity<?> findById(int id) {
        Optional<Khoa> khoas = khoaRepository.findById(id);
        return khoas.map(khoa ->
                        ResponseEntity.ok().body(khoa))
                .orElse(ResponseEntity.notFound().build());
    }
}
