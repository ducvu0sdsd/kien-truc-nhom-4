package com.iuh.dkhp.repositories;

import com.iuh.dkhp.entities.Lop;
import com.iuh.dkhp.entities.SinhVien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SinhVienRepository extends JpaRepository<SinhVien, Integer> {

    @Query("SELECT s FROM SinhVien s WHERE s.mssv = :mssv")
    SinhVien findByMssv(@Param("mssv") String mssv);

}
