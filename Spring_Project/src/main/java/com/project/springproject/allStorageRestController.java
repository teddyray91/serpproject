package com.project.springproject;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project.springproject.beans.StorageDAO;
import com.project.springproject.beans.StorageDTO;
import com.project.springproject.beans.StorageResult;

@RestController
@RequestMapping(value="/allstorage")
public class allStorageRestController {
	@RequestMapping(value="/list", method = RequestMethod.GET)
	public StorageResult list(StorageDTO dto, String page) {
		StorageResult result = new StorageResult();
		StorageDAO dao = Session.sqlSession.getMapper(StorageDAO.class);
		int temp=0;
		int total = 0;
		if(page == null)page = "1";
		ArrayList<StorageDTO> list  = new ArrayList<>();
		list = dao.allstoragelist_page(page);
		total = dao.allstoragelist_totalpage();
		temp=list.size();
		if(temp>0) {
			result.setState("ok");
			result.setCnt(total);
			result.setList(list);
		}else {
			result.setState("fail");
			result.setCnt(total);
			result.setList(list);
		}
		return result;
	}
	
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public StorageResult add(StorageDTO dto) {
		StorageResult result = new StorageResult();
		StorageDAO dao = Session.sqlSession.getMapper(StorageDAO.class);
		int temp = 0;
		temp = dao.allstorageadd(dto);
		if(temp > 0) {
			result.setState("ok");
			result.setCnt(temp);
		}else {
			result.setState("fail");
			result.setCnt(temp);
		}
		return result;
	}
	// 재고변경
		@RequestMapping(value = "/modify",method =RequestMethod.POST )
		public StorageResult modify(StorageDTO dto) {
			StorageResult result = new StorageResult();
			StorageDAO dao = Session.sqlSession.getMapper(StorageDAO.class);
			int temp = 0;
			temp = dao.allstoragemodify(dto);
			if(temp > 0) {
				result.setState("ok");
				result.setCnt(temp);
			}else {
				result.setState("fail");
				result.setCnt(temp);
			}
			return result;
		}
		
		@RequestMapping(value="/remove",method= RequestMethod.POST )
		public StorageResult remove(StorageDTO dto) {
			StorageResult result = new StorageResult();
			StorageDAO dao = Session.sqlSession.getMapper(StorageDAO.class);
			int temp = 0;
			temp = dao.storageremove(dto);
			if(temp > 0) {
				result.setState("ok");
				result.setCnt(temp);
			}else {
				result.setState("fail");
				result.setCnt(temp);
			}
			return result;
		}
			
		@RequestMapping(value="/searchstorage",method= { RequestMethod.GET, RequestMethod.POST })
		public StorageResult storageserchlist(String searchoption, String searchvalue, String page) {
			StorageResult result = new StorageResult();
			StorageDAO dao = Session.sqlSession.getMapper(StorageDAO.class);
			ArrayList<StorageDTO> list  = new ArrayList<>();
			int temp=0;
			int total=0;
			if(page == null) page = "1";
			if(searchoption.equals("item_code")) {
				list = dao.search_allstoragecode_page(searchvalue, page);
				total = dao.search_allstoragecode_totalpage(searchvalue);
			} else if (searchoption.equals("item_category")) {
				list = dao.search_allstoragecategory_page(searchvalue, page);
				total = dao.search_allstoragecategory_totalpage(searchvalue);
			}
			temp = list.size();
			if(temp >0) {
				result.setState("ok");
				result.setCnt(total);
				result.setList(list);
			} else {
				result.setState("fail");
				result.setCnt(total);
				result.setList(list);
			}
			return result;
		}
}
