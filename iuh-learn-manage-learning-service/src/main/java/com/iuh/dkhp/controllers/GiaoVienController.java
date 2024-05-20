package com.iuh.dkhp.controllers;


import com.iuh.dkhp.entities.ChuyenNganh;
import com.iuh.dkhp.entities.GiaoVien;
import com.iuh.dkhp.services.GiaoVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/giaovien")
public class GiaoVienController {

    @Autowired
    private GiaoVienService giaovienService;

    @PostMapping("")
    public ResponseEntity<?> createGiaoVien (@RequestBody GiaoVien giaoVien) {
        return giaovienService.createGiaoVien(giaoVien);
    }

    @DeleteMapping("/{id}")
    public boolean removeGiaoVien (@PathVariable("id") int id) {
        return giaovienService.removeGiaoVien(id);
    }

    @GetMapping("")
    public ResponseEntity<?> findAll () {
        return giaovienService.getAll();
    }

    @PostMapping("/update")
    public boolean updateGiaoVien (@RequestBody GiaoVien giaovien){

        return giaovienService.updateGiaoVien(giaovien);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") int id) {
        return giaovienService.findById(id);
    }
}
