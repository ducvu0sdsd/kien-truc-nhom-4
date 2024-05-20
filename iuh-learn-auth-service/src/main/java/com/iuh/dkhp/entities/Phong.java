package com.iuh.dkhp.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Phong")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Phong {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int maPhong;
    private String tenPhong;
}
