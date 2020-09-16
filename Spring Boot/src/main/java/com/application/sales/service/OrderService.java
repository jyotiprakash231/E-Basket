package com.application.sales.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.sales.config.NotFoundException;
import com.application.sales.model.Order;
import com.application.sales.model.Status;
import com.application.sales.repository.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepo;

	public Order addOrder(Order order) {
		return orderRepo.save(order);
	}

	public List<Order> getAllOrders() {
		return orderRepo.findAll();
	}

	public Order getOrderedItems(Long oid) throws NotFoundException {
		return orderRepo.findById(oid).orElseThrow(() -> new NotFoundException("Order not found at this id:" + oid));
	}
	
	public Order getOrderStatus(Long oid) throws NotFoundException {
		return orderRepo.findById(oid).orElseThrow(() -> new NotFoundException("Order not found at this id:" + oid));
	}

	public Order updateOrder(Order order, Long oid) throws NotFoundException {
		Order orderDetails = orderRepo.findById(oid)
				.orElseThrow(() -> new NotFoundException("Order not found at this id:" + oid));
		orderDetails.setAddress(order.getAddress());
		orderDetails.setCname(order.getCname());
		orderDetails.setPhone(order.getPhone());
		orderDetails.setPin(order.getPin());
		return orderRepo.save(orderDetails);
	}

	public String deleteOrder(Long oid) throws NotFoundException {
		Order order = orderRepo.findById(oid)
				.orElseThrow(() -> new NotFoundException("Order not found at this id:" + oid));
		orderRepo.delete(order);
		return "Successfully deleted order";
	}

	public List<Order> getAllUserOrders(String email) {
		return orderRepo.findByUser_email(email);
	}

	public Order updateOrderStatus(Status status, Long oid) throws NotFoundException {
		Order orderDetails = orderRepo.findById(oid)
				.orElseThrow(() -> new NotFoundException("Order not found at this id:" + oid));
		List<Status> allStatus=orderDetails.getStatus();
		allStatus.add(status);
		orderDetails.setStatus(allStatus);
		return orderRepo.save(orderDetails);
		
	}

}
