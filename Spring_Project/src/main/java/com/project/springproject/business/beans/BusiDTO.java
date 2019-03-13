package com.project.springproject.business.beans;

public class BusiDTO {
	private String busi_number;
	private String busi_name;
	private String busi_address;
	private String busi_owner;
	private String busi_phone;
	private String busi_index;
	
	public BusiDTO() {
		super();
	}
	public BusiDTO(String busi_number, String busi_name, String busi_address, String busi_owner, String busi_phone,
			String busi_index) {
		super();
		this.busi_number = busi_number;
		this.busi_name = busi_name;
		this.busi_address = busi_address;
		this.busi_owner = busi_owner;
		this.busi_phone = busi_phone;
		this.busi_index = busi_index;
	}
	public String getBusi_number() {
		return busi_number;
	}
	public void setBusi_number(String busi_number) {
		this.busi_number = busi_number;
	}
	public String getBusi_name() {
		return busi_name;
	}
	public void setBusi_name(String busi_name) {
		this.busi_name = busi_name;
	}
	public String getBusi_address() {
		return busi_address;
	}
	public void setBusi_address(String busi_address) {
		this.busi_address = busi_address;
	}
	public String getBusi_owner() {
		return busi_owner;
	}
	public void setBusi_owner(String busi_owner) {
		this.busi_owner = busi_owner;
	}
	public String getBusi_phone() {
		return busi_phone;
	}
	public void setBusi_phone(String busi_phone) {
		this.busi_phone = busi_phone;
	}
	public String getBusi_index() {
		return busi_index;
	}
	public void setBusi_index(String busi_index) {
		this.busi_index = busi_index;
	}
	
	
}
