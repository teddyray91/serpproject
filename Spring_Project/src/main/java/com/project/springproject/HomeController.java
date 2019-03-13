package com.project.springproject;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.project.springproject.member.beans.MemberDAO;
import com.project.springproject.member.beans.MemberLoginDTO;

@Controller
public class HomeController {
	// Session Create
	@Autowired
	public void setSqlsession(SqlSession SqlSession) {
		Session.sqlSession = SqlSession;
	}
	//최초 로그인 페이지
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index(HttpSession session) {
		if(session.getAttribute("auth") != null && !(session.getAttribute("auth").equals("0"))) {
			return "redirect:/home";
		}
		return "index";
	}
	// 관리자 페이지 접속
	@RequestMapping(value = "/admin", method = RequestMethod.GET)
	public String admin(HttpSession session) {
		if(!(session.getAttribute("auth").equals("5")) || session.getAttribute("auth") == null) {
			return "redirect:/loginfail";
		}else {
			return "admin/home";
		}
	}
	//로그인 프로세스
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(String id, String pw, HttpSession session) {
		MemberDAO dao = Session.sqlSession.getMapper(MemberDAO.class);
		ArrayList<MemberLoginDTO> list = new ArrayList<>();
		list = dao.login(id, pw);
		if(list.size() > 0 ) {
			session.setAttribute("auth", list.get(0).getGrantidx());
			session.setAttribute("memidx", list.get(0).getMemidx());
			session.setAttribute("id", list.get(0).getId());
			session.setAttribute("name", list.get(0).getName());
			session.setAttribute("email", list.get(0).getEmail());
			session.setAttribute("part", list.get(0).getPart());
			session.setAttribute("rank", list.get(0).getRank());
			// return "redirect:/home"; // 성공 시 home으로
		}
//		else {
//			session.invalidate();
//			return "redirect:/"; // 실패 시 처음으로
//		}
		return "redic/LoginOk"; // 성공 시 home으로
	}
	@RequestMapping(value="/loginfail")
	public String loginfail(HttpSession session) {
		session.invalidate();
		return "redirect:/";
	}
	@RequestMapping(value="/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/"; // 로그아웃시 최초 화면으로 이동
	}
	//메인홈으로 이동
	@RequestMapping(value="/home", method = RequestMethod.GET)
	public String home() {
		return "home/home"; // JSP 이동
	}
}
