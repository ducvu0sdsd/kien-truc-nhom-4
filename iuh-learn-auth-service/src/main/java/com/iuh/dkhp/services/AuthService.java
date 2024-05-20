package com.iuh.dkhp.services;

import com.iuh.dkhp.dtos.responses.ManagementReponseDTO;
import com.iuh.dkhp.dtos.responses.StudentResponseDTO;
import com.iuh.dkhp.entities.Management;
import com.iuh.dkhp.entities.Routes;
import com.iuh.dkhp.entities.SinhVien;
import com.iuh.dkhp.repositories.ManagementRepository;
import com.iuh.dkhp.repositories.StudentRepository;
import com.iuh.dkhp.utils.Bcrypt;
import com.nimbusds.jose.JOSEException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;

import java.text.ParseException;

@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {

    @Autowired
    private ManagementRepository managementRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private JWTServices jwtServices;
    private Bcrypt bcrypt = new Bcrypt();
    private final WebClient webClient;

    @Transactional
    public ResponseEntity<?> authenticationToken(String token) throws ParseException, JOSEException {
        String username = jwtServices.verifyToken(token);
        if (username != null) {
            if (username.contains("admin")) {
                Management m = managementRepository.findManagementByUsername(username);
                if (m == null) {
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Không Tìm Thấy Quản Trị Viên");
                }
                return ResponseEntity.ok(m);
            } else {
                SinhVien sinhvien = studentRepository.findById(username).orElse(null);
                if (sinhvien == null) {
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Không Tìm Thấy Sinh Viên");
                }
                return ResponseEntity.ok(sinhvien);
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Token đã hết hạn. Hãy đăng nhập lại");
    }

    public ResponseEntity<Object> signInWithAdmin(String username, String password) throws Exception {
        Management managementFound = managementRepository.findManagementByUsername(username);
        if (managementFound != null) {
            boolean matchPassword = bcrypt.comparePassword(managementFound.getPassword(), password);
            if (matchPassword == true) {

                // generate Access Token
                String accessToken = jwtServices.generateToken(managementFound.getUsername());

                ManagementReponseDTO studentDTOResponse = new ManagementReponseDTO(managementFound, accessToken);
                return ResponseEntity.ok(studentDTOResponse);
            }
            else
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Don't match password");
        }
        else
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Don't Found Management");
    }

    public ResponseEntity<Object> signInWithStudent(String username, String password) throws Exception {
        SinhVien sinhVienFound = studentRepository.findById(username).orElse(null);
        if (sinhVienFound != null) {
            boolean matchPassword = bcrypt.comparePassword(sinhVienFound.getPassword(), password);
            if (matchPassword == true) {

                // generate Access Token
                String accessToken = jwtServices.generateToken(sinhVienFound.getMssv());

                StudentResponseDTO dto = new StudentResponseDTO(sinhVienFound, accessToken);
                return ResponseEntity.ok(dto);
            }
            else
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Don't match password");
        }
        else
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Don't Found Management");
    }
}
