package com.iuh.dkhp.repositories;

import com.iuh.dkhp.entities.ChuyenNganh;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface ChuyenNganhRepository extends JpaRepository<ChuyenNganh, Integer> {

}
