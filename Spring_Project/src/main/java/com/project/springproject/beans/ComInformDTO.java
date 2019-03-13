package com.project.springproject.beans;

import java.sql.Date;

public class ComInformDTO {

	private String comnumber;
	private String comname;
	private String comowner;
	private String commoney;
	private String comtel;
	private String comfax;
	private String comemail;
	private String comloc;
	private Date comdate;
	private int comemp;
	private int comtran;
	public ComInformDTO() {
		super();
	}
	public ComInformDTO(String comnumber, String comname, String comowner, String commoney, String comtel,
			String comfax, String comemail, String comloc, Date comdate, int comemp, int comtran) {
		super();
		this.comnumber = comnumber;
		this.comname = comname;
		this.comowner = comowner;
		this.commoney = commoney;
		this.comtel = comtel;
		this.comfax = comfax;
		this.comemail = comemail;
		this.comloc = comloc;
		this.comdate = comdate;
		this.comemp = comemp;
		this.comtran = comtran;
	}
	public String getComnumber() {
		return comnumber;
	}
	public void setComnumber(String comnumber) {
		this.comnumber = comnumber;
	}
	public String getComname() {
		return comname;
	}
	public void setComname(String comname) {
		this.comname = comname;
	}
	public String getComowner() {
		return comowner;
	}
	public void setComowner(String comowner) {
		this.comowner = comowner;
	}
	public String getCommoney() {
		return commoney;
	}
	public void setCommoney(String commoney) {
		this.commoney = commoney;
	}
	public String getComtel() {
		return comtel;
	}
	public void setComtel(String comtel) {
		this.comtel = comtel;
	}
	public String getComfax() {
		return comfax;
	}
	public void setComfax(String comfax) {
		this.comfax = comfax;
	}
	public String getComemail() {
		return comemail;
	}
	public void setComemail(String comemail) {
		this.comemail = comemail;
	}
	public String getComloc() {
		return comloc;
	}
	public void setComloc(String comloc) {
		this.comloc = comloc;
	}
	public Date getComdate() {
		return comdate;
	}
	public void setComdate(Date comdate) {
		this.comdate = comdate;
	}
	public int getComemp() {
		return comemp;
	}
	public void setComemp(int comemp) {
		this.comemp = comemp;
	}
	public int getComtran() {
		return comtran;
	}
	public void setComtran(int comtran) {
		this.comtran = comtran;
	}
	
	
}
