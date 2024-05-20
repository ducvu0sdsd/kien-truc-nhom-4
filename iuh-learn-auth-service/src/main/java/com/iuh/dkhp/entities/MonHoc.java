package com.iuh.dkhp.entities;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "MonHoc")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MonHoc {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int maMon;
    private String tenMon;
    private int soTinChi;
    private int soTietLyThuyet;
    private int soTietThucHanh;
    @ManyToOne
    @JoinColumn(name = "maChuyenNganh")
    private ChuyenNganh chuyenNganh;
}
