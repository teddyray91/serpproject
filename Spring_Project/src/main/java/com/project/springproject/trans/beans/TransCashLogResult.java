package com.project.springproject.trans.beans;

import java.util.ArrayList;

public class TransCashLogResult {
	private int cnt;
	private String state;
	private ArrayList<TransCashLogDTO> list;
	public TransCashLogResult(int cnt, String state, ArrayList<TransCashLogDTO> list) {
		super();
		this.cnt = cnt;
		this.state = state;
		this.list = list;
	}
	public TransCashLogResult() {
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
	public ArrayList<TransCashLogDTO> getList() {
		return list;
	}
	public void setList(ArrayList<TransCashLogDTO> list) {
		this.list = list;
	}
	
	
}
