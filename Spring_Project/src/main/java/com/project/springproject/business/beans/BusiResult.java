package com.project.springproject.business.beans;

import java.util.ArrayList;

public class BusiResult {
	private int cnt;
	private String state;
	private ArrayList<BusiDTO> list;
	public BusiResult(int cnt, String state, ArrayList<BusiDTO> list) {
		super();
		this.cnt = cnt;
		this.state = state;
		this.list = list;
	}
	public BusiResult() {
		super();
	}
	public int getCnt() {
		return cnt;
	}
	public void setCnt(int cnt) {
		this.cnt = cnt;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public ArrayList<BusiDTO> getList() {
		return list;
	}
	public void setList(ArrayList<BusiDTO> list) {
		this.list = list;
	}
	
	
}
