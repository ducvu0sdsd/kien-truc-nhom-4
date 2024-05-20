package com.iuh.dkhp.services;


import com.iuh.dkhp.entities.ChuyenNganh;
import com.iuh.dkhp.entities.Khoa;
import com.iuh.dkhp.repositories.ChuyenNganhRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Service
@Transactional
public class ChuyenNganhService {
    @Autowired
   private ChuyenNganhRepository chuyennganhRepository;


    public ResponseEntity<?> createChuyenNganh (ChuyenNganh chuyenNganh) {
        ChuyenNganh chuyeNganhCreated = chuyennganhRepository.save(chuyenNganh);
        return ResponseEntity.status(HttpStatus.CREATED).body(chuyeNganhCreated);
    }

    public boolean removeChuyenNganh (int id) {
        try {
            chuyennganhRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    public ResponseEntity<?> getAll() {
        List<ChuyenNganh> chuyenNganhs = chuyennganhRepository.findAll();
        return ResponseEntity.ok().body(chuyenNganhs);
    }

    public boolean updateChuyenNganh (ChuyenNganh chuyennganh) {
        try {
            chuyennganhRepository.save(chuyennganh);
            return true;
        }catch (Exception e) {
            return false;
        }
    }

    public ResponseEntity<?> findById(int id) {
        Optional<ChuyenNganh> optionalChuyenNganh = chuyennganhRepository.findById(id);
        return optionalChuyenNganh.map(chuyenNganh ->
                        ResponseEntity.ok().body(chuyenNganh))
                .orElse(ResponseEntity.notFound().build());
    }

}
