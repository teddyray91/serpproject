package com.project.springproject.beans;

import java.util.ArrayList;

public class StorageResult {
	private int cnt;
	private String state;
	private ArrayList<StorageDTO> list;
	public StorageResult(int cnt, String state, ArrayList<StorageDTO> list) {
		super();
		this.cnt = cnt;
		this.state = state;
		this.list = list;
	}
	public StorageResult() {
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
	public ArrayList<StorageDTO> getList() {
		return list;
	}
	public void setList(ArrayList<StorageDTO> list) {
		this.list = list;
	}
	
}
