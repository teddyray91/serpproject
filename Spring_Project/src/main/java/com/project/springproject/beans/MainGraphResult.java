package com.project.springproject.beans;

import java.util.ArrayList;

public class MainGraphResult {
	private int cnt;
	private String state;
	private ArrayList<MainGraphDTO> list;
	public MainGraphResult(int cnt, String state, ArrayList<MainGraphDTO> list) {
		super();
		this.cnt = cnt;
		this.state = state;
		this.list = list;
	}
	public MainGraphResult() {
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
	public ArrayList<MainGraphDTO> getList() {
		return list;
	}
	public void setList(ArrayList<MainGraphDTO> list) {
		this.list = list;
	}
	
	
}
