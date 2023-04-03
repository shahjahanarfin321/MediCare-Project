package com.ey.medicare.users.service;

import com.ey.medicare.users.entity.Users;
import com.ey.medicare.users.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsersService {
    @Autowired
    private UsersRepository usersRepository;

    public Users registerUsers(Users users) {
        return usersRepository.save(users);
    }

    public Users loginUsers(String email, String password) {
        return usersRepository.findByEmailAndPassword(email,password);
    }

    public Optional<Object> findByUserId(Long userId) {
        return usersRepository.findByUserId(userId);
    }
}
