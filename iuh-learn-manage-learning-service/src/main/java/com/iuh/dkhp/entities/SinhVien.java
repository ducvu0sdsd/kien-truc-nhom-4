package com.iuh.dkhp.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "SinhVien")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class SinhVien {
    @Id
    private String mssv;
    private String hoTen;
    private Date ngaySinh;
    private String noiSinh;
    // true la nam, false la nu
    private boolean gioiTinh;
    private String password;
    private String email;
    private String diaChi;
    private String danToc;
    private String soDienThoai;
    private String avatar;
    @ManyToOne
    @JoinColumn(name = "maLop")
    private Lop lop;
}
