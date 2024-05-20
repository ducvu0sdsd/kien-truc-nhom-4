package com.iuh.dkhp.entities;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "HocKy")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class HocKy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int maHocKy;
    private String tenHocKy;
    private boolean choPhepDangKy;
}
