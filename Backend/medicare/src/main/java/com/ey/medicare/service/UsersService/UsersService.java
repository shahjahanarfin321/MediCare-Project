package com.ey.medicare.service.UsersService;

import com.ey.medicare.repository.UsersRepository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersService {
    @Autowired
    private UsersRepository usersRepository;
}
