package com.application.sales.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.sales.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

	List<Order> findByUser_email(String email);

}
