package com.iuh.dkhp.repositories;

import com.iuh.dkhp.entities.GiaoVien;
import com.iuh.dkhp.entities.HocKy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HocKyRepository extends JpaRepository<HocKy, Integer> {
}
