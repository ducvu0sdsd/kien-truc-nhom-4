package com.iuh.dkhp.services;

import com.iuh.dkhp.entities.ChuyenNganh;
import com.iuh.dkhp.entities.Lop;
import com.iuh.dkhp.repositories.LopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class LopService {
    @Autowired
    private LopRepository loprepository;


    public ResponseEntity<?> createLop (Lop lop) {
        Lop lopCreated = loprepository.save(lop);
        return ResponseEntity.status(HttpStatus.CREATED).body(lopCreated);
    }

    public boolean removeLop (int id) {
        try {
            loprepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    public ResponseEntity<?> getAll() {
        List<Lop> lops = loprepository.findAll();
        return ResponseEntity.ok().body(lops);
    }

    public boolean updateLop (Lop lop) {
        try {
            loprepository.save(lop);
            return true;
        }catch (Exception e) {
            return false;
        }
    }
//
    public ResponseEntity<?> findById(int id) {
        Optional<Lop> optionalLop = loprepository.findById(id);
        return optionalLop.map(Lop ->
                        ResponseEntity.ok().body(Lop))
                .orElse(ResponseEntity.notFound().build());
    }
}
