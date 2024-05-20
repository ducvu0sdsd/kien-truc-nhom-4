package com.iuh.dkhp.entities;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "HocPhan")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class HocPhan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int maHocPhan;
    @ManyToOne
    @JoinColumn(name = "maMonHoc")
    private MonHoc monHoc;
    @ManyToOne
    @JoinColumn(name = "maLop")
    private Lop lop;
    @ManyToOne
    @JoinColumn(name = "maHocKy")
    private HocKy hocKy;
    @ManyToOne
    @JoinColumn(name = "maPhong")
    private Phong phong;
    private String loaiDangKy;
}
