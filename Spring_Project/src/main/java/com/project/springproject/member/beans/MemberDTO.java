package com.project.springproject.member.beans;

import java.sql.Timestamp;

public class MemberDTO {
	
	private int rnum;
	private int memidx;
	private String grantidx;
	private String partidx;
	private String rankidx;
	private String id;
	private String pw;
	private String name;
	private int gender;
	private String phonenum;
	private String email;
	private Timestamp birthday;
	private Timestamp joindate;
	public MemberDTO() {
		super();
	}
	public MemberDTO(int rnum, int memidx, String grantidx, String partidx, String rankidx, String id, String pw,
			String name, int gender, String phonenum, String email, Timestamp birthday, Timestamp joindate) {
		super();
		this.rnum = rnum;
		this.memidx = memidx;
		this.grantidx = grantidx;
		this.partidx = partidx;
		this.rankidx = rankidx;
		this.id = id;
		this.pw = pw;
		this.name = name;
		this.gender = gender;
		this.phonenum = phonenum;
		this.email = email;
		this.birthday = birthday;
		this.joindate = joindate;
	}
	public int getRnum() {
		return rnum;
	}
	public void setRnum(int rnum) {
		this.rnum = rnum;
	}
	public int getMemidx() {
		return memidx;
	}
	public void setMemidx(int memidx) {
		this.memidx = memidx;
	}
	public String getGrantidx() {
		return grantidx;
	}
	public void setGrantidx(String grantidx) {
		this.grantidx = grantidx;
	}
	public String getPartidx() {
		return partidx;
	}
	public void setPartidx(String partidx) {
		this.partidx = partidx;
	}
	public String getRankidx() {
		return rankidx;
	}
	public void setRankidx(String rankidx) {
		this.rankidx = rankidx;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPw() {
		return pw;
	}
	public void setPw(String pw) {
		this.pw = pw;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getGender() {
		return gender;
	}
	public void setGender(int gender) {
		this.gender = gender;
	}
	public String getPhonenum() {
		return phonenum;
	}
	public void setPhonenum(String phonenum) {
		this.phonenum = phonenum;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Timestamp getBirthday() {
		return birthday;
	}
	public void setBirthday(Timestamp birthday) {
		this.birthday = birthday;
	}
	public Timestamp getJoindate() {
		return joindate;
	}
	public void setJoindate(Timestamp joindate) {
		this.joindate = joindate;
	}
	
	
	
	
}
