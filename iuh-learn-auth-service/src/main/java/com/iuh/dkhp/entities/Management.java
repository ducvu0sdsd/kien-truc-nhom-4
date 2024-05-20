package com.iuh.dkhp.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "Managements")
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@ToString
public class Management {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ma;
    private String hoTen;
    private Date ngaySinh;
    private String noiSinh;
    private boolean gioiTinh;
    private String username;
    private String password;
    private String email;
    private String diaChi;
    private String danToc;

}