package com.application.sales.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.application.sales.config.NotFoundException;
import com.application.sales.model.User;
import com.application.sales.service.UserService;

@RestController
public class UserController {
	private static final String USER_URL = "/user";
	@Autowired
	private UserService userService;

	@PostMapping(USER_URL)
	public User addUser(@RequestBody User user) throws Exception {
		return userService.addUser(user);
	}

	@PostMapping(USER_URL + "/login")
	public User getUser(@RequestBody User user) throws NotFoundException {
		//System.out.println(user.getEmail());
		return userService.getUser(user);
	}

}
