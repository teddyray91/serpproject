package com.project.springproject;


import java.util.ArrayList;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project.springproject.beans.ComInformDAO;
import com.project.springproject.beans.ComInformDTO;
import com.project.springproject.beans.ComInformResult;


@RestController
@RequestMapping(value="/company")
public class ComInformRestController {
	// 회사 정보 가져오기
		@RequestMapping(value = "/inform", method = RequestMethod.POST)
		public ComInformResult cominformlist(ComInformDTO dto) {
			ComInformResult result = new ComInformResult();
			ComInformDAO dao = Session.sqlSession.getMapper(ComInformDAO.class);
			int temp = 0;
			ArrayList<ComInformDTO> list = new ArrayList<>();
			list = dao.cominformlist();
			temp = list.size();
			if (temp > 0) {
				result.setState("ok");
				result.setCnt(temp);
				result.setList(list);
			} else {
				result.setState("fail");
				result.setCnt(temp);
				result.setList(list);
			}
			return result;
		}

		// 회사정보 입력
		@RequestMapping(value = "/write", method = RequestMethod.POST)
		public ComInformResult cominformwrite(ComInformDTO dto) {
			ComInformResult result = new ComInformResult();
			ComInformDAO dao = Session.sqlSession.getMapper(ComInformDAO.class);
			int temp = 0;
			temp = dao.cominformadd(dto);
			if (temp > 0) {
				result.setState("ok");
				result.setCnt(temp);
			} else {
				result.setState("fail");
				result.setCnt(temp);
			}
			return result;
		}
		
		//회사 정보 수정
		@RequestMapping(value="/modify", method = RequestMethod.POST)
		public ComInformResult cominformmodify(ComInformDTO dto) {
			ComInformResult result = new ComInformResult();
			ComInformDAO dao = Session.sqlSession.getMapper(ComInformDAO.class);
			int temp = 0;
			temp = dao.comInformModify(dto);
			if(temp > 0) {
				result.setCnt(temp);
				result.setState("ok");
			}else {
				result.setCnt(temp);
				result.setState("fail");
			}
			return result;
		}
}
