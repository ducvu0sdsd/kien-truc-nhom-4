package com.iuh.dkhp.services;

import com.iuh.dkhp.entities.ChuyenNganh;
import com.iuh.dkhp.entities.GiaoVien;
import com.iuh.dkhp.repositories.GiaoVienRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class GiaoVienService {

    @Autowired
    private GiaoVienRepository giaovienrepository;


    public ResponseEntity<?> createGiaoVien (GiaoVien giaovien) {
        GiaoVien giaoVienCreated = giaovienrepository.save(giaovien);
        return ResponseEntity.status(HttpStatus.CREATED).body(giaoVienCreated);
    }


    public boolean removeGiaoVien (int id) {
        try {
            giaovienrepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public ResponseEntity<?> getAll() {
        List<GiaoVien> giaoviens = giaovienrepository.findAll();
        return ResponseEntity.ok().body(giaoviens);
    }
//
    public boolean updateGiaoVien (GiaoVien giaovien) {
        try {
            giaovienrepository.save(giaovien);
            return true;
        }catch (Exception e) {
            return false;
        }
    }
//
    public ResponseEntity<?> findById(int id) {
        Optional<GiaoVien> optionalGiaoVien = giaovienrepository.findById(id);
        return optionalGiaoVien.map(GiaoVien ->
                        ResponseEntity.ok().body(GiaoVien))
                .orElse(ResponseEntity.notFound().build());
    }

}
