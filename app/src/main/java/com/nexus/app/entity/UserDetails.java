package com.nexus.app.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_details")
public class UserDetails {
	@Id
	@GeneratedValue
	private int userId;
	
	private String userName;
	
	private int age;
	
	private String userAddress;
	
	private String bloodGroup;
	
	private String emailId;

	private long phoneNumber;
	
	public UserDetails () {}
	
	public UserDetails(int userId, String userName, int age, String user_Address, String bloodGroup, String emailId,
			long phoneNumber, String dateOfBirth) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.age = age;
		this.userAddress = user_Address;
		this.bloodGroup = bloodGroup;
		this.emailId = emailId;
		this.phoneNumber = phoneNumber;
		this.dateOfBirth = dateOfBirth;
	}

	private String dateOfBirth;
	
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getUser_Address() {
		return userAddress;
	}

	public void setUser_Address(String user_Address) {
		this.userAddress = user_Address;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

}
