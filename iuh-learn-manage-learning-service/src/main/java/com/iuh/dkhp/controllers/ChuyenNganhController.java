package com.iuh.dkhp.controllers;

import com.iuh.dkhp.entities.ChuyenNganh;
import com.iuh.dkhp.entities.Khoa;
import com.iuh.dkhp.services.ChuyenNganhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/chuyennganh")
public class ChuyenNganhController {


    @Autowired
    private ChuyenNganhService chuyennganhService;


    @PostMapping("")
    public ResponseEntity<?> createChuyenNganh (@RequestBody ChuyenNganh chuyennganh) {
        return chuyennganhService.createChuyenNganh(chuyennganh);
    }

    @DeleteMapping("/{id}")
    public boolean removeChuyenNganh (@PathVariable("id") int id) {
        return chuyennganhService.removeChuyenNganh(id);
    }

    @GetMapping("")
    public ResponseEntity<?> findAll () {
        return chuyennganhService.getAll();
    }



    @PostMapping("/update")
    public boolean updateChuyenNganh (@RequestBody ChuyenNganh chuyenNganh){

        return chuyennganhService.updateChuyenNganh(chuyenNganh);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") int id) {
        return chuyennganhService.findById(id);
    }
}
