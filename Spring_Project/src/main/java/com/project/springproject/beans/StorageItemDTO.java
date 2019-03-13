package com.project.springproject.beans;

public class StorageItemDTO {
	private String item_code;
	private String item_category;
	private String item_name;
	private String item_cnt;
	private String buy_money;
	private String sell_money;
	
	public StorageItemDTO() {
		super();
	}
	
	public StorageItemDTO(String item_code, String item_category, String item_name, String item_cnt, String buy_money,
			String sell_money) {
		super();
		this.item_code = item_code;
		this.item_category = item_category;
		this.item_name = item_name;
		this.item_cnt = item_cnt;
		this.buy_money = buy_money;
		this.sell_money = sell_money;
	}
	

	public String getBuy_money() {
		return buy_money;
	}

	public void setBuy_money(String buy_money) {
		this.buy_money = buy_money;
	}

	public String getSell_money() {
		return sell_money;
	}

	public void setSell_money(String sell_money) {
		this.sell_money = sell_money;
	}

	public String getItem_code() {
		return item_code;
	}
	public void setItem_code(String item_code) {
		this.item_code = item_code;
	}
	public String getItem_category() {
		return item_category;
	}
	public void setItem_category(String item_category) {
		this.item_category = item_category;
	}
	public String getItem_name() {
		return item_name;
	}
	public void setItem_name(String item_name) {
		this.item_name = item_name;
	}
	public String getItem_cnt() {
		return item_cnt;
	}
	public void setItem_cnt(String item_cnt) {
		this.item_cnt = item_cnt;
	}
	
	
	
}
