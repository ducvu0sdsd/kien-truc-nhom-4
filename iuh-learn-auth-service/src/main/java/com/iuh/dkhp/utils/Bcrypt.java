package com.iuh.dkhp.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class Bcrypt {
    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public String encodePassword (String rawPassword) {
        String encodedPassword = passwordEncoder.encode(rawPassword);
        return encodedPassword;
    }

    public boolean comparePassword (String encodedPassword, String rawPassword) {
        boolean matches = passwordEncoder.matches(rawPassword, encodedPassword);
        return matches;
    }
}
