package com.iuh.dkhp.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Khoa")
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@ToString
public class Khoa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int maKhoa;
    private String tenKhoa;
}
