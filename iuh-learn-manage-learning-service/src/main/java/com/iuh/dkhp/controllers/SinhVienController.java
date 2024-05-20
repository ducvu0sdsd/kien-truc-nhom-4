package com.iuh.dkhp.controllers;


import com.iuh.dkhp.entities.Lop;
import com.iuh.dkhp.entities.SinhVien;
import com.iuh.dkhp.services.LopService;
import com.iuh.dkhp.services.SinhVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/sinhvien")
public class SinhVienController {
    @Autowired
    private SinhVienService sinhvienservice;



    @PostMapping("")
    public ResponseEntity<?> createSinhVien (@RequestBody SinhVien sinhvien) {
        return sinhvienservice.createSinhVien(sinhvien);
    }
//
    @DeleteMapping("/{id}")
    public boolean removeSinhVien (@PathVariable("id") int id) {
        return sinhvienservice.removeSinhVien(id);
    }

    @GetMapping("")
    public ResponseEntity<?> findAll () {
        return sinhvienservice.getAll();
    }
    //
////
////
    @PostMapping("/update")
    public boolean updateSinhVien (@RequestBody SinhVien sinhvien){

        return sinhvienservice.updateSinhVien(sinhvien);
    }
//    //
    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") int id) {
        return sinhvienservice.findById(id);
    }
}
