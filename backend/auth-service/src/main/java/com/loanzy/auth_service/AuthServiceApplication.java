package com.loanzy.auth_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AuthServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuthServiceApplication.class, args);
	}

	@org.springframework.context.annotation.Bean
	public org.springframework.boot.CommandLineRunner run(
			com.loanzy.auth_service.repository.UserRepository userRepository,
			org.springframework.security.crypto.password.PasswordEncoder passwordEncoder) {
		return args -> {
			if (userRepository.findByUsername("testuser").isEmpty()) {
				com.loanzy.auth_service.entity.User user = new com.loanzy.auth_service.entity.User();
				user.setUsername("testuser");
				user.setEmail("test@example.com");
				user.setPassword(passwordEncoder.encode("password"));
				user.setRole("USER");
				userRepository.save(user);
				System.out.println("Test user created: username='testuser', password='password'");
			}
		};
	}

}
