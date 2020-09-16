package com.application.sales.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.application.sales.config.NotFoundException;
import com.application.sales.config.UserPresentException;
import com.application.sales.model.User;
import com.application.sales.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;

	public User addUser(User user) throws UserPresentException {
		// Encrypt
		
		if(userRepo.findById(user.getEmail()).isPresent()) {
			throw new UserPresentException("User Already Registered");
		}
		user.setPassword(encryptPassword(user.getPassword()));
		user.setFirstName(user.getFirstName());
		user.setLastName(user.getLastName());
		return userRepo.save(user);
	}

	private String encryptPassword(String password) {
		String encodedPassowrd = BCrypt.hashpw(password, BCrypt.gensalt());
		return encodedPassowrd;
		
//		PasswordEncoder encoder = new BCryptPasswordEncoder();
//		return encoder.encode(password);
	}

	public User getUser(User user) throws NotFoundException {
		/*
		 * String encodedPassString = encryptPassword(password);
		 * 
		 * User user1 = new User();
		 * 
		 * Optional<User> userModel = userRepo.findById(email);
		 * 
		 * if (userModel.isPresent()) { user1 = userModel.get(); }
		 * 
		 * if (user1.getPassword().equals(encodedPassString)) { return user1; }
		 * 
		 * return user1;
		 */

		String requestedPassword = user.getPassword();
		Optional<User> dbUser = userRepo.findById(user.getEmail());
				
		
//		BCrypt.checkpw(candidate_password, stored_hash)
		
//		String encodedPassString = encryptPassword(requestedPassword);
		if (dbUser.isPresent()) {
			User userFound = dbUser.get();
			if (BCrypt.checkpw(requestedPassword, userFound.getPassword())) {
				return userFound;
			}else {
				throw new NotFoundException("Credential invalid");
			}
		}

		/*
		 * String encodedPassString = encryptPassword(requestedPassword); if
		 * (dbUser.isPresent()) { User userFound = dbUser.get();
		 * System.out.println(userFound.getFirstName()); if
		 * (userFound.getPassword().equals(encodedPassString)) { return userFound; } }
		 */
		throw new NotFoundException("email not found");

	}

}
