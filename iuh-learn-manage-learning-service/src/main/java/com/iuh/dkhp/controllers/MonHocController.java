package com.iuh.dkhp.controllers;

import com.iuh.dkhp.entities.MonHoc;
import com.iuh.dkhp.services.MonHocService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/monhoc")
public class MonHocController {

    @Autowired
    private MonHocService monHocService;



    @PostMapping("")
    public ResponseEntity<?> createMonHoc (@RequestBody MonHoc monhoc) {
        return monHocService.createMonhoc(monhoc);
    }
    //
    @DeleteMapping("/{id}")
    public boolean removemonhoc (@PathVariable("id") int id) {
        return monHocService.removemonhoc(id);
    }

    @GetMapping("")
    public ResponseEntity<?> findAll () {
        return monHocService.getAll();
    }
    //
////
////
    @PostMapping("/update")
    public boolean updateMonhoc (@RequestBody MonHoc monhoc){

        return monHocService.updatemonhoc(monhoc);
    }
    //    //
    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") int id) {
        return monHocService.findById(id);
    }

}
