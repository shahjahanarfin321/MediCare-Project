package com.ey.medicare.users.controller;

import com.ey.medicare.users.service.UsersService;
import com.ey.medicare.users.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
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
