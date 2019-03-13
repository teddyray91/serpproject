package com.project.springproject.trans.beans;

import java.util.ArrayList;

public class TransDetailResult {
	private int cnt;
	private String state;
	private ArrayList<TransDTO> list1;
	private ArrayList<TransCashLogDTO> list2;
	public TransDetailResult(int cnt, String state, ArrayList<TransDTO> list1, ArrayList<TransCashLogDTO> list2) {
		super();
		this.cnt = cnt;
		this.state = state;
		this.list1 = list1;
		this.list2 = list2;
	}
	public TransDetailResult() {
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
	public ArrayList<TransDTO> getList1() {
		return list1;
	}
	public void setList1(ArrayList<TransDTO> list1) {
		this.list1 = list1;
	}
	public ArrayList<TransCashLogDTO> getList2() {
		return list2;
	}
	public void setList2(ArrayList<TransCashLogDTO> list2) {
		this.list2 = list2;
	}
	
	
	
}
