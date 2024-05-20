package com.iuh.dkhp.repositories;

import com.iuh.dkhp.entities.Khoa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface KhoaRepository extends JpaRepository<Khoa, Integer> {

    @Modifying
    @Transactional
    @Query("update Khoa k set k.tenKhoa = :tenKhoa where k.maKhoa = :maKhoa")
    void updateTenKhoaByMaKhoa(int maKhoa, String tenKhoa);

}
