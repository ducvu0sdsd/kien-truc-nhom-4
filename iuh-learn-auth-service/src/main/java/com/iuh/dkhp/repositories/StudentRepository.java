package com.iuh.dkhp.repositories;

import com.iuh.dkhp.entities.SinhVien;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<SinhVien, String> {
}
