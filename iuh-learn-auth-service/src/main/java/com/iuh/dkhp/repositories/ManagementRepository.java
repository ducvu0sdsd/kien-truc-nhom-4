package com.iuh.dkhp.repositories;

import com.iuh.dkhp.entities.Management;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ManagementRepository extends JpaRepository<Management, Integer> {

    @Query("select m from Management m where m.username = :username")
    Management findManagementByUsername(@Param("username") String username);
}
