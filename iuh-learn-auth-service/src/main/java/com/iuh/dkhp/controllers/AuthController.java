package com.iuh.dkhp.controllers;

import com.iuh.dkhp.dtos.requests.SignInDTO;
import com.iuh.dkhp.dtos.responses.ManagementReponseDTO;
import com.iuh.dkhp.services.AuthService;
import com.nimbusds.jose.JOSEException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequestMapping("/api/v1")
public class AuthController {

    @Autowired
    private AuthService authService;


    @PostMapping("/sign-in-with-admin")
    public ResponseEntity<Object> signInWithAdmin (@RequestBody SignInDTO signInDTO) throws Exception {
        try {
            String username = signInDTO.getUsername();
            String password = signInDTO.getPassword();
            return authService.signInWithAdmin(username, password);
        } catch (Exception e) {
            throw new Exception(e);
        }
    }

    @PostMapping("/sign-in-with-student")
    public ResponseEntity<Object> signInWithStudent (@RequestBody SignInDTO signInDTO) throws Exception {
        try {
            String username = signInDTO.getUsername();
            String password = signInDTO.getPassword();
            return authService.signInWithStudent(username, password);
        } catch (Exception e) {
            throw new Exception(e);
        }
    }

    @PostMapping("/authentication-token")
    public ResponseEntity<?> authenticationToken (@RequestHeader("accessToken") String accessToken) throws ParseException, JOSEException {
        return authService.authenticationToken(accessToken);
    }
}