package com.project.springproject.beans;

import java.util.ArrayList;

public interface StorageDAO {
	public ArrayList<StorageDTO> storagelist_page(String page);
	public int storagelist_totalpage();
	public int storageadd(StorageDTO dto); 
	public ArrayList<StorageDTO> allstoragelist_page(String page);
	public int allstoragelist_totalpage();
	public int allstorageadd(StorageDTO dto);
	public int storagemodify(StorageDTO dto);
	public int storageremove(StorageDTO dto);
	public int allstoragemodify(StorageDTO dto);
	public int allstorageremove(StorageDTO dto);
	
	public ArrayList<StorageDTO> search_storagecode_page(String item_code, String page);
	public int search_storagecode_totalpage(String item_code);
	public ArrayList<StorageDTO> search_storagecategory_page(String item_category, String page);
	public int search_storagecategory_totalpage(String item_category);
	
	public ArrayList<StorageDTO> search_allstoragecode_page(String item_code, String page);
	public int search_allstoragecode_totalpage(String item_code);
	public ArrayList<StorageDTO> search_allstoragecategory_page(String item_category, String page);
	public int search_allstoragecategory_totalpage(String item_category);
	
	public ArrayList<StorageDTO> search_item_code(String item_code);
}
