package com.iuh.dkhp.controllers;

import com.iuh.dkhp.entities.Management;
import com.iuh.dkhp.services.ManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/managements")
public class ManagementController {

    @Autowired
    private ManagementService managementService;

    @PostMapping("")
    public ResponseEntity<?> createManagement(@RequestBody Management management) {
        return managementService.createManagement(management);
    }

    @GetMapping("/find-by-id/{id}")
    public ResponseEntity<?> findManagementByID(@PathVariable("id") int id) {
        return managementService.findManagementByID(id);
    }

    @GetMapping("/find-by-username/{username}")
    public ResponseEntity<?> findManagementByUsername(@PathVariable("username") String username) {
        return managementService.findManagementByUsername(username);
    }
}
