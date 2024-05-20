package com.iuh.dkhp.controllers;

import com.iuh.dkhp.entities.Khoa;
import com.iuh.dkhp.entities.Phong;
import com.iuh.dkhp.services.KhoaService;
import com.iuh.dkhp.services.PhongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/phong")
public class PhongController {

    @Autowired
    private PhongService phongService;

    @PostMapping("")
    public ResponseEntity<?> createPhong (@RequestBody Phong phong) {
        return phongService.createPhong(phong);
    }

    @DeleteMapping("/{id}")
    public boolean removePhong (@PathVariable("id") int id) {
        return phongService.removePhong(id);
    }

    @GetMapping("")
    public ResponseEntity<?> findAll () {
        return phongService.getAll();
    }

    @PostMapping("/update")
    public boolean updatePhong (@RequestBody Phong phong){
        return phongService.update(phong);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") int id) {
        return phongService.findById(id);
    }
}
