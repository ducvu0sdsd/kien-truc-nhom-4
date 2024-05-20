package com.iuh.dkhp.controllers;

import com.iuh.dkhp.entities.HocPhan;
import com.iuh.dkhp.services.HocPhanService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/hocphan")
public class HocPhanController {
    @Autowired
    private HocPhanService hocPhanService;

    @PostMapping("")
    public ResponseEntity<?> createHocPhan (@RequestBody HocPhan hocphan) {
        return hocPhanService.createhocPhan(hocphan);
    }

    @DeleteMapping("/{id}")
    public boolean removeHocPhan (@PathVariable("id") int id) {
        return hocPhanService.removeHocPhan(id);
    }

    @GetMapping("")
    public ResponseEntity<?> findAll () {
        return hocPhanService.getAll();
    }

    @PostMapping("/update")
    public boolean updateHocPhan (@RequestBody HocPhan hocphan){
        return hocPhanService.updateHocPhan(hocphan);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") int id) {
        return hocPhanService.findById(id);
    }

    @GetMapping("/mhk-mm")
    public ResponseEntity<?> getHocPhanByHocKyAndMon (@RequestParam("maHocKy") int maHocky, @RequestParam("maMon") int maMon) {
        return hocPhanService.getHocPhanByHocKyAndMon(maHocky, maMon);
    }
}
