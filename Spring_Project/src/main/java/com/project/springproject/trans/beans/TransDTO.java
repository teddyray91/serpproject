package com.project.springproject.trans.beans;

import java.sql.Date;

public class TransDTO {
	private String trans_code;
	private String trans_index;
	private String busi_number;
	private String busi_name;
	private String trans_tmoney;
	private String trans_subject;
	private Date trans_date;
	private String trans_san;
	private int memidx;
	private String name;
	
	public TransDTO() {
		super();
	}
	
	public TransDTO(String trans_code, String trans_index, String busi_number, String busi_name, String trans_tmoney,
			String trans_subject, Date trans_date, String trans_san, int memidx, String name) {
		super();
		this.trans_code = trans_code;
		this.trans_index = trans_index;
		this.busi_number = busi_number;
		this.busi_name = busi_name;
		this.trans_tmoney = trans_tmoney;
		this.trans_subject = trans_subject;
		this.trans_date = trans_date;
		this.trans_san = trans_san;
		this.memidx = memidx;
		this.name = name;
	}

	public int getMemidx() {
		return memidx;
	}

	public void setMemidx(int memidx) {
		this.memidx = memidx;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTrans_code() {
		return trans_code;
	}
	public void setTrans_code(String trans_code) {
		this.trans_code = trans_code;
	}
	public String getTrans_index() {
		return trans_index;
	}
	public void setTrans_index(String trans_index) {
		this.trans_index = trans_index;
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
	
	public String getTrans_tmoney() {
		return trans_tmoney;
	}

	public void setTrans_tmoney(String trans_tmoney) {
		this.trans_tmoney = trans_tmoney;
	}

	public String getTrans_subject() {
		return trans_subject;
	}
	public void setTrans_subject(String trans_subject) {
		this.trans_subject = trans_subject;
	}
	public Date getTrans_date() {
		return trans_date;
	}
	public void setTrans_date(Date trans_date) {
		this.trans_date = trans_date;
	}
	public String getTrans_san() {
		return trans_san;
	}
	public void setTrans_san(String trans_san) {
		this.trans_san = trans_san;
	}
	
}
