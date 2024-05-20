package com.iuh.dkhp.services;

import com.iuh.dkhp.entities.HocPhan;
import com.iuh.dkhp.repositories.HocPhanRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class HocPhanService {
    @Autowired
    private HocPhanRepository hocPhanRepository;


    public ResponseEntity<?> createhocPhan (HocPhan hocphan) {
        HocPhan hocphanCreated = hocPhanRepository.save(hocphan);
        return ResponseEntity.status(HttpStatus.CREATED).body(hocphanCreated);
    }

    public boolean removeHocPhan (int id) {
        try {
            hocPhanRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    public ResponseEntity<?> getAll() {
        List<HocPhan> hocphans = hocPhanRepository.findAll();
        return ResponseEntity.ok().body(hocphans);
    }

    public boolean updateHocPhan (HocPhan hocphan) {
        try {
            hocPhanRepository.save(hocphan);
            return true;
        }catch (Exception e) {
            return false;
        }
    }
    //
    public ResponseEntity<?> findById(int id) {
        Optional<HocPhan> optionalHocPhan =  hocPhanRepository.findById(id);
        return optionalHocPhan.map(HocPhan ->
                        ResponseEntity.ok().body(HocPhan))
                .orElse(ResponseEntity.notFound().build());
    }

    @Transactional
    public ResponseEntity<?> getHocPhanByHocKyAndMon (int maHocKy, int maMon) {
        List<HocPhan> hocPhan = hocPhanRepository.getHocPhanByHocKyAndMon(maHocKy, maMon);
        if (hocPhan == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Không Tìm Thấy Học Phần");
        }else {
            return ResponseEntity.ok().body(hocPhan);
        }
    }

}
