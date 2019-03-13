package com.project.springproject.trans.beans;

import java.util.ArrayList;

public class TransResult {
	private int cnt;
	private String state;
	private ArrayList<TransDTO> list;
	public TransResult(int cnt, String state, ArrayList<TransDTO> list) {
		super();
		this.cnt = cnt;
		this.state = state;
		this.list = list;
	}
	public TransResult() {
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
	public ArrayList<TransDTO> getList() {
		return list;
	}
	public void setList(ArrayList<TransDTO> list) {
		this.list = list;
	}
	
	
}
