package com.iuh.dkhp.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(request -> {
            request.requestMatchers(HttpMethod.POST, "/api/v1/managements").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/managements/find-by-id/{id}").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/managements/find-by-username/{username}").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/khoa").permitAll()
                    .requestMatchers(HttpMethod.DELETE, "/api/v1/khoa/{id}").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/khoa").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/khoa/update").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/chuyennganh").permitAll()
                    .requestMatchers(HttpMethod.DELETE, "/api/v1/chuyennganh/{id}").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/chuyennganh").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/chuyennganh/update").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/chuyennganh/{id}").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/khoa/{id}").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/lop").permitAll()
                    .requestMatchers(HttpMethod.DELETE, "/api/v1/lop/{id}").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/lop").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/lop/update").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/lop/{id}").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/giaovien").permitAll()
                    .requestMatchers(HttpMethod.DELETE, "/api/v1/giaovien/{id}").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/giaovien").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/giaovien/update").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/giaovien/{id}").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/sinhvien").permitAll()
                    .requestMatchers(HttpMethod.DELETE, "/api/v1/sinhvien/{id}").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/sinhvien").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/sinhvien/update").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/sinhvien/{id}").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/hocky").permitAll()
                    .requestMatchers(HttpMethod.DELETE, "/api/v1/hocky/{id}").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/hocky").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/hocky/update").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/hocky/{id}").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/monhoc").permitAll()
                    .requestMatchers(HttpMethod.DELETE, "/api/v1/monhoc/{id}").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/monhoc").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/monhoc/update").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/monhoc/{id}").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/hocphan").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/hocphan/update").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/hocphan").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/hocphan/{id}").permitAll()
                    .requestMatchers(HttpMethod.DELETE, "/api/v1/hocphan/{id}").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/dkhp/{mssv}").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/hedaotao").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/hedaotao").permitAll()
                    .requestMatchers(HttpMethod.DELETE, "/api/v1/hedaotao/{id}").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/phong").permitAll()
                    .requestMatchers(HttpMethod.DELETE, "/api/v1/phong/{id}").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/phong").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/phong/update").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/v1/hocphan/mhk-mm/**").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/v1/hedaotao/update").permitAll()
                    .anyRequest().authenticated();
        });
        http.csrf(httpSecurityCsrfConfigurer -> httpSecurityCsrfConfigurer.disable());
        return http.build();
    }

}
