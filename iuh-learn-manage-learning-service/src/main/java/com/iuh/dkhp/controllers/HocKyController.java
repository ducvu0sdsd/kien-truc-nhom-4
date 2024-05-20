package com.iuh.dkhp.controllers;

import com.iuh.dkhp.entities.GiaoVien;
import com.iuh.dkhp.entities.HocKy;
import com.iuh.dkhp.services.GiaoVienService;
import com.iuh.dkhp.services.HocKyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/hocky")
public class HocKyController {

    @Autowired
    private HocKyService hockyservice;

    @PostMapping("")
    public ResponseEntity<?> createHocKy (@RequestBody HocKy hocky) {
        return hockyservice.createHocKy(hocky);
    }

    @DeleteMapping("/{id}")
    public boolean removeHocky (@PathVariable("id") int id) {
        return hockyservice.removeHocky(id);
    }

    @GetMapping("")
    public ResponseEntity<?> findAll () {
        return hockyservice.getAll();
    }

    @PostMapping("/update")
    public boolean updateHocKy (@RequestBody HocKy hocKy){
        return hockyservice.updateHocky(hocKy);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") int id) {
        return hockyservice.findById(id);
    }

}
