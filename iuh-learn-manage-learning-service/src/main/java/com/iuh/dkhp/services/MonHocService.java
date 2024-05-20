package com.iuh.dkhp.services;

import com.iuh.dkhp.entities.MonHoc;
import com.iuh.dkhp.repositories.MonHocRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MonHocService {

    @Autowired
    private MonHocRepository monhocRepository;


    public ResponseEntity<?> createMonhoc (MonHoc monhoc) {
        MonHoc monhocCreated = monhocRepository.save(monhoc);
        return ResponseEntity.status(HttpStatus.CREATED).body(monhocCreated);
    }


    public boolean removemonhoc (int id) {
        try {
            monhocRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    public ResponseEntity<?> getAll() {
        List<MonHoc> monhocs = monhocRepository.findAll();
        return ResponseEntity.ok().body(monhocs);
    }

    public boolean updatemonhoc (MonHoc monhoc) {
        try {
            monhocRepository.save(monhoc);
            return true;
        }catch (Exception e) {
            return false;
        }
    }
    //
    public ResponseEntity<?> findById(int id) {
        Optional<MonHoc> optionalMonhoc = monhocRepository.findById(id);
        return optionalMonhoc.map(Monhoc ->
                        ResponseEntity.ok().body(Monhoc))
                .orElse(ResponseEntity.notFound().build());
    }
}
