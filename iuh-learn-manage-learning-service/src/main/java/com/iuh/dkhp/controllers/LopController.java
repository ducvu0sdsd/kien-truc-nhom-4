package com.iuh.dkhp.controllers;


import com.iuh.dkhp.entities.ChuyenNganh;
import com.iuh.dkhp.entities.Lop;
import com.iuh.dkhp.services.LopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/lop")
public class LopController {

    @Autowired
    private LopService lopservice;



    @PostMapping("")
    public ResponseEntity<?> createLop (@RequestBody Lop lop) {
        return lopservice.createLop(lop);
    }

    @DeleteMapping("/{id}")
    public boolean removeLop (@PathVariable("id") int id) {
        return lopservice.removeLop(id);
    }

    @GetMapping("")
    public ResponseEntity<?> findAll () {
        return lopservice.getAll();
    }
//
//
//
    @PostMapping("/update")
    public boolean updateLop (@RequestBody Lop lop){

        return lopservice.updateLop(lop);
    }
//
    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") int id) {
        return lopservice.findById(id);
    }
}
