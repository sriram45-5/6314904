package com.cognizant.jwt.authservice.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // In real apps, fetch user from DB
        if ("user".equalsIgnoreCase(username)) {
            return new User("user", "{noop}pwd", Collections.emptyList());
        }
        throw new UsernameNotFoundException("User not found");
    }
}
