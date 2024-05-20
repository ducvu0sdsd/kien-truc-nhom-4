package com.iuh.dkhp.services;


import com.iuh.dkhp.entities.GiaoVien;
import com.iuh.dkhp.entities.HocKy;
import com.iuh.dkhp.repositories.GiaoVienRepository;
import com.iuh.dkhp.repositories.HocKyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class HocKyService {


    @Autowired
    private HocKyRepository hocKyRepository;


    public ResponseEntity<?> createHocKy (HocKy hocky) {
        HocKy hockyCreated = hocKyRepository.save(hocky);
        return ResponseEntity.status(HttpStatus.CREATED).body(hockyCreated);
    }


    public boolean removeHocky (int id) {
        try {
            hocKyRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    public ResponseEntity<?> getAll() {
        List<HocKy> hockys = hocKyRepository.findAll();
        return ResponseEntity.ok().body(hockys);
    }

    public boolean updateHocky (HocKy hocky) {
        try {
            hocKyRepository.save(hocky);
            return true;
        }catch (Exception e) {
            return false;
        }
    }
    //
    public ResponseEntity<?> findById(int id) {
        Optional<HocKy> optionalHocKy = hocKyRepository.findById(id);
        return optionalHocKy.map(HocKy ->
                        ResponseEntity.ok().body(HocKy))
                .orElse(ResponseEntity.notFound().build());
    }

}
