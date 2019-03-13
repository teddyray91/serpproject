package com.project.springproject.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class MemberLoginInterceptor extends HandlerInterceptorAdapter {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		// TODO Auto-generated method stub
		System.out.println("PRE");
		HttpSession session = request.getSession();
		Boolean flag = false;
		if(session.getAttribute("auth") != null) {
			String auth = (String)session.getAttribute("auth");
			switch (auth) {
			case "1":
				System.out.println(auth);
				flag = true;
				break;
			case "2":
				System.out.println(auth);
				flag = true;
				break;
			case "3":
				System.out.println(auth);
				flag = true;
				break;
			case "4":
				System.out.println(auth);
				flag = true;
				break;
			case "5":
				System.out.println(auth);
				flag = true;
				break;

			default:
				flag = false;
				break;
			}
		}
		if(flag) {
			return super.preHandle(request, response, handler);
		}else {
			response.sendRedirect(request.getContextPath());
			return false;
		}
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("POST");
		super.postHandle(request, response, handler, modelAndView);
	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		System.out.println("AFTER");
		// TODO Auto-generated method stub
		super.afterCompletion(request, response, handler, ex);
	}

}
