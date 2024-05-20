package com.iuh.dkhp.utils;

import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class Other {

    public String RandomNumberSTR () {
        Random random = new Random();
        int randomDigits = random.nextInt(900000) + 100000;
        return randomDigits + "";
    }
}
