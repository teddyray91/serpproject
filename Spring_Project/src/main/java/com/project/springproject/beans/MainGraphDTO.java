package com.project.springproject.beans;

public class MainGraphDTO {
	private int btotal;
	private int stotal;
	private int utotal;
	private int bpercent;
	private int spercent;
	private int upercent;
	public MainGraphDTO() {
		super();
	}
	public MainGraphDTO(int btotal, int stotal, int utotal, int bpercent, int spercent, int upercent) {
		super();
		this.btotal = btotal;
		this.stotal = stotal;
		this.utotal = utotal;
		this.bpercent = bpercent;
		this.spercent = spercent;
		this.upercent = upercent;
	}
	public int getBtotal() {
		return btotal;
	}
	public void setBtotal(int btotal) {
		this.btotal = btotal;
	}
	public int getStotal() {
		return stotal;
	}
	public void setStotal(int stotal) {
		this.stotal = stotal;
	}
	public int getUtotal() {
		return utotal;
	}
	public void setUtotal(int utotal) {
		this.utotal = utotal;
	}
	public int getBpercent() {
		return bpercent;
	}
	public void setBpercent(int bpercent) {
		this.bpercent = bpercent;
	}
	public int getSpercent() {
		return spercent;
	}
	public void setSpercent(int spercent) {
		this.spercent = spercent;
	}
	public int getUpercent() {
		return upercent;
	}
	public void setUpercent(int upercent) {
		this.upercent = upercent;
	}
	
}
