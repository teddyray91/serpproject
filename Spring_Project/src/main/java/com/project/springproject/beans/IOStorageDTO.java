package com.project.springproject.beans;

import java.sql.Date;

public class IOStorageDTO {
	private int iostorageidx;
	private String trans_code;
	private String trans_index;
	private String busi_number;
	private String busi_name;
	private String trans_tmoney;
	private String trans_subject;
	private Date trans_date;
	private int memidx;
	private String name;
	private String inout;
	private Date run_date;
	public IOStorageDTO() {
		super();
	}
	public IOStorageDTO(int iostorageidx, String trans_code, String trans_index, String busi_number, String busi_name,
			String trans_tmoney, String trans_subject, Date trans_date, int memidx, String name, String inout,
			Date run_date) {
		super();
		this.iostorageidx = iostorageidx;
		this.trans_code = trans_code;
		this.trans_index = trans_index;
		this.busi_number = busi_number;
		this.busi_name = busi_name;
		this.trans_tmoney = trans_tmoney;
		this.trans_subject = trans_subject;
		this.trans_date = trans_date;
		this.memidx = memidx;
		this.name = name;
		this.inout = inout;
		this.run_date = run_date;
	}
	public int getIostorageidx() {
		return iostorageidx;
	}
	public void setIostorageidx(int iostorageidx) {
		this.iostorageidx = iostorageidx;
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
	public String getInout() {
		return inout;
	}
	public void setInout(String inout) {
		this.inout = inout;
	}
	public Date getRun_date() {
		return run_date;
	}
	public void setRun_date(Date run_date) {
		this.run_date = run_date;
	}
	
	
}
