package com.iuh.dkhp.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Lop")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Lop {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private int maLop;
    private String tenLop;
    @ManyToOne
    @JoinColumn(name = "maChuyenNganh")
    private ChuyenNganh chuyenNganh;
    @ManyToOne
    @JoinColumn(name = "maHeDaoTao")
    private HeDaoTao heDaoTao;
}
