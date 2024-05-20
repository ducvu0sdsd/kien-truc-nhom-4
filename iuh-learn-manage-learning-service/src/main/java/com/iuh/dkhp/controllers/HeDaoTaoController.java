package com.iuh.dkhp.controllers;

import com.iuh.dkhp.entities.HeDaoTao;
import com.iuh.dkhp.entities.HocKy;
import com.iuh.dkhp.services.HeDaoTaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/hedaotao")
public class HeDaoTaoController {

    @Autowired
    private HeDaoTaoService heDaoTaoService;

    @PostMapping("")
    public ResponseEntity<?> createHeDaoTao (@RequestBody HeDaoTao heDaoTao) {
        return heDaoTaoService.createHeDaoTao(heDaoTao);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeHeDaoTao (@PathVariable("id") int id) {
        return heDaoTaoService.removeHeDaoTao(id);
    }

    @GetMapping("")
    public ResponseEntity<?> getAllHeDaoTao () {
        return heDaoTaoService.getAllHeDaoTao();
    }

    @PostMapping("/update")
    public boolean updateHeDaoTao (@RequestBody HeDaoTao hedaotao){
        return heDaoTaoService.updateHeDaoTao(hedaotao);
    }
}
