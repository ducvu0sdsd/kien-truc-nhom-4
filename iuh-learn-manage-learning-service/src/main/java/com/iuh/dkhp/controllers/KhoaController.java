package com.iuh.dkhp.controllers;

import com.iuh.dkhp.entities.Khoa;
import com.iuh.dkhp.services.KhoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/khoa")
public class KhoaController {

    @Autowired
    private KhoaService khoaService;

    @PostMapping("")
    public ResponseEntity<?> createKhoa (@RequestBody Khoa khoa) {
        return khoaService.createKhoa(khoa);
    }

    @DeleteMapping("/{id}")
    public boolean removeKhoa (@PathVariable("id") int id) {
        return khoaService.removeKhoa(id);
    }

    @GetMapping("")
    public ResponseEntity<?> findAll () {
        return khoaService.getAll();
    }

    @PostMapping("/update")
    public boolean updateTenKhoa (@RequestBody Khoa khoa){
        return khoaService.updateName(khoa);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") int id) {
        return khoaService.findById(id);
    }
}
