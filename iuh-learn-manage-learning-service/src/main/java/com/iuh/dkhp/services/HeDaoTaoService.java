package com.iuh.dkhp.services;

import com.iuh.dkhp.entities.HeDaoTao;
import com.iuh.dkhp.entities.HocKy;
import com.iuh.dkhp.repositories.HeDaoTaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class HeDaoTaoService {

    @Autowired
    private HeDaoTaoRepository heDaoTaoRepository;

    public ResponseEntity<?> createHeDaoTao(HeDaoTao heDaoTao) {
        try {
            HeDaoTao heDaoTaoCreated = heDaoTaoRepository.save(heDaoTao);
            return ResponseEntity.ok().body(heDaoTaoCreated);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Tạo Hệ Đào Tạo Thất Bại");
        }
    }

    public ResponseEntity<?> removeHeDaoTao(int id) {
        try {
            heDaoTaoRepository.deleteById(id);
            return ResponseEntity.ok().body("Xóa Hệ Đào Tạo Thành Công");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Xóa Hệ Đào Tạo Thành Công");
        }
    }

    public ResponseEntity<?> getAllHeDaoTao() {
        List<HeDaoTao> heDaoTaoList = heDaoTaoRepository.findAll();
        return ResponseEntity.ok().body(heDaoTaoList);
    }

    public boolean updateHeDaoTao(HeDaoTao hedaotao) {
        try {
            heDaoTaoRepository.save(hedaotao);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
