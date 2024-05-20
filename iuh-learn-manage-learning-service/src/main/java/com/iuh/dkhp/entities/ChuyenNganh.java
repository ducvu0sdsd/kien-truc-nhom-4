package com.iuh.dkhp.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "ChuyenNganh")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ChuyenNganh {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int maChuyenNganh;

    @ManyToOne
    @JoinColumn(name =  "maKhoa")
    private Khoa khoa;

    private String tenChuyenNganh;
}
