package com.iuh.dkhp.repositories;

import com.iuh.dkhp.entities.HocKy;
import com.iuh.dkhp.entities.HocPhan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HocPhanRepository extends JpaRepository<HocPhan, Integer> {
    @Query("select h from HocPhan h where h.hocKy.maHocKy = :maHocKy and h.monHoc.maMon = :maMon")
    List<HocPhan> getHocPhanByHocKyAndMon (@Param("maHocKy") int maHocKy, @Param("maMon") int maMon);
}
