package com.ey.medicare.service.UsersService;

import com.ey.medicare.entity.UsersEntity.Users;
import com.ey.medicare.repository.UsersRepository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

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
}
