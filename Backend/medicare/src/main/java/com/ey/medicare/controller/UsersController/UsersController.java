package com.ey.medicare.controller.UsersController;

import com.ey.medicare.entity.UsersEntity.Users;
import com.ey.medicare.service.UsersService.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UsersController {
    @Autowired
    private UsersService usersService;

    @PostMapping("/register")
    public Users registerUsers(@RequestBody Users users) {
        return usersService.registerUsers(users);
    }

    @GetMapping("/login")
    public Users loginUsers(@RequestParam String email,@RequestParam String password) {
        return usersService.loginUsers(email,password);
    }
}
