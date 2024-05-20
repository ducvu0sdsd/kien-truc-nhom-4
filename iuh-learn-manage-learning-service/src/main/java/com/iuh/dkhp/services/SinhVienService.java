package com.iuh.dkhp.services;


import com.iuh.dkhp.entities.Lop;
import com.iuh.dkhp.entities.SinhVien;
import com.iuh.dkhp.repositories.LopRepository;
import com.iuh.dkhp.repositories.SinhVienRepository;
import com.iuh.dkhp.utils.Bcrypt;
import com.iuh.dkhp.utils.Other;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class SinhVienService {

    @Autowired
    private SinhVienRepository sinhvienrepository;

    @Autowired
    private Bcrypt bcrypt;

    @Autowired
    private Other other;


    public ResponseEntity<?> createSinhVien (SinhVien sinhvien) {
        sinhvien.setPassword(bcrypt.encodePassword("1111"));
        String mssv = (new Date().getYear() + 1900) % 100 + other.RandomNumberSTR();
        SinhVien check = sinhvienrepository.findByMssv(mssv);
        while (check != null) {
            mssv = (new Date().getYear() + 1900) % 100 + other.RandomNumberSTR();
            check = sinhvienrepository.findByMssv(mssv);
        }
        sinhvien.setMssv(mssv);
        SinhVien sinhvienCreated = sinhvienrepository.save(sinhvien);
        return ResponseEntity.status(HttpStatus.CREATED).body(sinhvienCreated);
    }

    public boolean removeSinhVien (int id) {
        try {
            sinhvienrepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    public ResponseEntity<?> getAll() {
        List<SinhVien> sinhviens = sinhvienrepository.findAll();
        return ResponseEntity.ok().body(sinhviens);
    }
//
    public boolean updateSinhVien (SinhVien sinhvien) {
        try {
            sinhvienrepository.save(sinhvien);
            return true;
        }catch (Exception e) {
            return false;
        }
    }
//    //
    public ResponseEntity<?> findById(int id) {
        Optional<SinhVien> optionalSinhVien = sinhvienrepository.findById(id);
        return optionalSinhVien.map(SinhVien ->
                        ResponseEntity.ok().body(SinhVien))
                .orElse(ResponseEntity.notFound().build());
    }


}
