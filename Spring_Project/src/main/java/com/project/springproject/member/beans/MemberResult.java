package com.project.springproject.member.beans;

import java.util.ArrayList;

public class MemberResult {
	private int cnt;
	private String state;
	private ArrayList<MemberDTO> list;
	public MemberResult(int cnt, String state, ArrayList<MemberDTO> list) {
		super();
		this.cnt = cnt;
		this.state = state;
		this.list = list;
	}
	public MemberResult() {
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
	public ArrayList<MemberDTO> getList() {
		return list;
	}
	public void setList(ArrayList<MemberDTO> list) {
		this.list = list;
	}
	
	
}
