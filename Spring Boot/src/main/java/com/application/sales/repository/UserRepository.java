
package com.application.sales.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.sales.model.User;

public interface UserRepository extends JpaRepository<User, String> {

}
