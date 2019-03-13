package com.project.springproject;


import java.util.ArrayList;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project.springproject.beans.IOStorageDAO;
import com.project.springproject.beans.IOStorageDTO;
import com.project.springproject.beans.IOStorageResult;
import com.project.springproject.command.TransSanIO;
import com.project.springproject.trans.beans.TransDTO;



@RestController
@RequestMapping(value="/iostorage")
public class IOStorageRestController {
	
	@RequestMapping(value="/search/list", method=RequestMethod.POST)
	public IOStorageResult iostorageCheck(String page) {
		IOStorageDAO dao = Session.sqlSession.getMapper(IOStorageDAO.class);
		IOStorageResult result = new IOStorageResult();
		ArrayList<IOStorageDTO> list = new ArrayList<>();
		int total = 0;
		if(page == null)page ="1";
		list = dao.IOStorageListAll_page(page);
		total = dao.IOStorageListAll_totalpage();
		if(list.size() > 0) {
			result.setCnt(total);
			result.setState("ok");
			result.setList(list);
		}else {
			result.setCnt(total);
			result.setState("fail");
		}
		return result;
	}
	
	@RequestMapping(value="/search/listok", method=RequestMethod.POST)
	public IOStorageResult iostorageCheckByok(String index, String page) {
		IOStorageDAO dao = Session.sqlSession.getMapper(IOStorageDAO.class);
		IOStorageResult result = new IOStorageResult();
		ArrayList<IOStorageDTO> list = new ArrayList<>();
		int total = 0;
		if(page == null) page ="1";
		list = dao.IOStorageListIndex_page(index, page);
		total = dao.IOStorageListIndex_totalpage(index);
		
		if(list.size() > 0) {
			result.setCnt(total);
			result.setState("ok");
			result.setList(list);
		}else {
			result.setCnt(total);
			result.setState("fail");
		}
		return result;
	}
	
	@RequestMapping(value="/search/listsearch", method=RequestMethod.POST)
	public IOStorageResult iostorageCheckBysearch(String searchindex, String searchword, String page) {
		IOStorageDAO dao = Session.sqlSession.getMapper(IOStorageDAO.class);
		IOStorageResult result = new IOStorageResult();
		ArrayList<IOStorageDTO> list = new ArrayList<>();
		int total = 0;
		if(page == null) page = "1";
		
		switch (searchindex) {
		case "trans_code":
			list = dao.IOStorageListsearchByTranscode_page(searchindex ,searchword, page);
			total = dao.IOStorageListsearchByTranscode_totalpage(searchindex, searchword);
			break;
		case "busi_number":
			list = dao.IOStorageListsearchByBusiNumber_page(searchindex, searchword, page);
			total = dao.IOStorageListsearchByBusiNumber_totalpage(searchindex, searchword);
			break;
		case "busi_name":
			list = dao.IOStorageListsearchByBusiName_page(searchindex, searchword, page);
			total = dao.IOStorageListsearchByBusiName_totalpage(searchindex, searchword);
			break;
		case "name":
			list = dao.IOStorageListsearchByName_page(searchindex, searchword, page);
			total = dao.IOStorageListsearchByName_totalpage(searchindex, searchword);
			break;
		default:
			break;
		}
		if(list.size() > 0) {
			result.setCnt(total);
			result.setState("ok");
			result.setList(list);
		}else {
			result.setCnt(total);
			result.setState("fail");
		}
		return result;
	}
	
	@RequestMapping(value="/inout", method=RequestMethod.POST)
	public IOStorageResult inout(TransDTO dto) {
		IOStorageResult result = new IOStorageResult();
		result = TransSanIO.iteminout(dto);		
		return result;
	}
	
	@RequestMapping(value="/main/unconflist", method=RequestMethod.POST)
	public IOStorageResult unconfirmlist() {
		IOStorageDAO dao = Session.sqlSession.getMapper(IOStorageDAO.class);
		IOStorageResult result = new IOStorageResult();
		ArrayList<IOStorageDTO> list = new ArrayList<>();
		list = dao.unconfirmlist();
		if(list.size() > 0) {
			result.setCnt(list.size());
			result.setState("ok");
			result.setList(list);
		}else {
			result.setCnt(list.size());
			result.setState("fail");
		}
		return result;
	}
	
	
}
