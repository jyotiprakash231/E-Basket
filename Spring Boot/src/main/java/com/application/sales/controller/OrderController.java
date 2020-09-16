package com.application.sales.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.application.sales.config.NotFoundException;
import com.application.sales.model.Order;
import com.application.sales.model.Status;
import com.application.sales.service.OrderService;

@RestController
public class OrderController {

	private static final String ORDERS_URL = "api/orders";

	@Autowired
	private OrderService orderService;

	@PostMapping(value = ORDERS_URL, consumes = "application/json")
	public Order addOrder(@RequestBody Order order) {
		return orderService.addOrder(order);
	}

	@GetMapping(ORDERS_URL)
	public List<Order> getAllOrders() {
		return orderService.getAllOrders();
	}
	
	@GetMapping(ORDERS_URL+"/user/{mail}")
	public List<Order> getAllUserOrders(@PathVariable("mail") String email) {
		return orderService.getAllUserOrders(email);
	}

	@GetMapping(ORDERS_URL + "/{oid}")
	public Order getOrderedItems(@PathVariable("oid") Long oid) throws NotFoundException {
		return orderService.getOrderedItems(oid);
	}
	
	@GetMapping(ORDERS_URL + "/status/{oid}")
	public Order getStatus(@PathVariable("oid") Long oid) throws NotFoundException {
		return orderService.getOrderStatus(oid);
	}

	@PutMapping(ORDERS_URL + "/{oid}")
	public Order updateOrder(@RequestBody Order order, @PathVariable("oid") Long oid) throws NotFoundException {
		return orderService.updateOrder(order, oid);
	}
	
	@PutMapping(ORDERS_URL + "/status/{oid}")
	public Order updateOrderStatus(@RequestBody Status status, @PathVariable("oid") Long oid) throws NotFoundException {
		return orderService.updateOrderStatus(status, oid);
	}
	
	@DeleteMapping(value=ORDERS_URL + "/{oid}",produces="text/plain" )
	public String deleteOrder(@PathVariable("oid") Long oid) throws NotFoundException {
		return orderService.deleteOrder(oid);
	}
}
