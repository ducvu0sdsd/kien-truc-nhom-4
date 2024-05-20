package com.iuh.dkhp.entities;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "GiaoVien")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class GiaoVien {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private int maGiaoVien;
    private String hoTen;
    private Date ngaySinh;
    private String noiSinh;
    private boolean gioiTinh;
    private String email;
    private String diaChi;
    private String danToc;
    private String soDienThoai;
    @ManyToOne
    @JoinColumn(name = "maKhoa")
    private Khoa khoa;
}
