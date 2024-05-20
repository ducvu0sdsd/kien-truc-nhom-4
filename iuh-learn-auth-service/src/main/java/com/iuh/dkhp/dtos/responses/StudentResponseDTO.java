package com.iuh.dkhp.dtos.responses;

import com.iuh.dkhp.entities.SinhVien;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class StudentResponseDTO {
    private SinhVien sinhVien;
    private String accessToken;
}
