package com.iuh.dkhp.services;

import com.iuh.dkhp.entities.Khoa;
import com.iuh.dkhp.entities.Phong;
import com.iuh.dkhp.repositories.PhongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PhongService {

    @Autowired
    private PhongRepository phongRepository;

    public ResponseEntity<?> createPhong (Phong phong) {
        Phong phongCreated = phongRepository.save(phong);
        return ResponseEntity.status(HttpStatus.CREATED).body(phongCreated);
    }

    public boolean removePhong (int id) {
        try {
            phongRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public ResponseEntity<?> getAll() {
        List<Phong> phongs = phongRepository.findAll();
        return ResponseEntity.ok().body(phongs);
    }

    public boolean update (Phong phong) {
        try {
            phongRepository.save(phong);
            return true;
        }catch (Exception e) {
            return false;
        }
    }

    public ResponseEntity<?> findById(int id) {
        Optional<Phong> phongs = phongRepository.findById(id);
        return phongs.map(phong ->
                        ResponseEntity.ok().body(phong))
                .orElse(ResponseEntity.notFound().build());
    }
}
