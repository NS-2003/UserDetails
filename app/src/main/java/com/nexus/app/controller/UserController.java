package com.nexus.app.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexus.app.entity.UserDetails;
import com.nexus.app.service.UserService;

@RestController
@CrossOrigin(origins="http://localhost:3000/")
public class UserController {
	
	@Autowired
	public UserService userService;
	
	Logger logger=LoggerFactory.getLogger(UserController.class);
	   
	   @RequestMapping("/log") public void log() {
		   logger.trace("Log level:Trace");
		   logger.info("Log level:Info");
		   logger.debug("log level:Debug");
		   logger.error("log level:Error");
		   
	   }
	
	@GetMapping("/get")
	public List<UserDetails> getUserDetails(){
		return userService.getDetails();
	}
	
	@GetMapping("/{id}")
	public Optional<UserDetails> getUserDetailsById(@PathVariable int id){
		return userService.getDetailsById(id);
	}
	
	@GetMapping("/get/{pg_no}/{pg_size}")
	public List<UserDetails> getPagedUserDetails(@PathVariable int pg_no, @PathVariable int pg_size){
		return userService.getByPages(pg_no, pg_size);
	}
	
	@PostMapping("/post")
	public UserDetails postUserDetails(@RequestBody UserDetails userDetails ) {
		return userService.postDetails(userDetails);
	}
	
	@PutMapping("/put")
	public UserDetails updateDetails(@RequestBody UserDetails userDetails) {
		return userService.updateDetails(userDetails);
	
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteDetails(@PathVariable int id) {
		userService.deleteDetails(id);
		return "Deleted User With ID : "+ id;
	}
	
	
}
