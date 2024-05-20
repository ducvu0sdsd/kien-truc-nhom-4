package com.iuh.dkhp.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "HeDaoTao")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class HeDaoTao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int maHeDaoTao;
    private double giaTien;
    private String tenHeDaoTao;
}