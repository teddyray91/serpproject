package com.project.springproject.trans.beans;


public class TransCashLogDTO {
	private String trans_code;
	private String item_code;
	private String item_category;
	private String item_name;
	private String cash_cnt;
	private String cash_money;
	public TransCashLogDTO() {
		super();
	}
	public TransCashLogDTO(String trans_code, String item_code, String item_category, String item_name, String cash_cnt,
			String cash_money) {
		super();
		this.trans_code = trans_code;
		this.item_code = item_code;
		this.item_category = item_category;
		this.item_name = item_name;
		this.cash_cnt = cash_cnt;
		this.cash_money = cash_money;
	}
	public String getTrans_code() {
		return trans_code;
	}
	public void setTrans_code(String trans_code) {
		this.trans_code = trans_code;
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
	public String getCash_cnt() {
		return cash_cnt;
	}
	public void setCash_cnt(String cash_cnt) {
		this.cash_cnt = cash_cnt;
	}
	public String getCash_money() {
		return cash_money;
	}
	public void setCash_money(String cash_money) {
		this.cash_money = cash_money;
	}
	
	
}
