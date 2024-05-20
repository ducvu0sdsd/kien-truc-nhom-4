package com.iuh.dkhp.dtos.responses;

import com.iuh.dkhp.entities.Management;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ManagementReponseDTO {
    private Management management;
    private String accessToken;
}
