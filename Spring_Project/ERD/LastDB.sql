--
--drop user spring cascade;
--
--create user spring identified by spring;
--grant connect, resource, create view, create procedure to spring;

/* Drop Tables */

DROP TABLE cash_log CASCADE CONSTRAINTS;
DROP TABLE trans_code CASCADE CONSTRAINTS;
DROP TABLE busi_infomation CASCADE CONSTRAINTS;
DROP TABLE com_inform CASCADE CONSTRAINTS;
DROP TABLE co_board CASCADE CONSTRAINTS;
DROP TABLE co_exit CASCADE CONSTRAINTS;
DROP TABLE co_member CASCADE CONSTRAINTS;
DROP TABLE co_grant CASCADE CONSTRAINTS;
DROP TABLE co_part CASCADE CONSTRAINTS;
DROP TABLE co_rank CASCADE CONSTRAINTS;
DROP TABLE delete_busi_infomation CASCADE CONSTRAINTS;
DROP TABLE delete_cash_log CASCADE CONSTRAINTS;
DROP TABLE delete_trans_code CASCADE CONSTRAINTS;
DROP TABLE InOutStorage CASCADE CONSTRAINTS;
DROP TABLE item_storage CASCADE CONSTRAINTS;
DROP sequence memidx_seq;
DROP sequence iostorageidx_seq;
drop view V_CO_MEMBER_ACCEPT_ROW;
drop view V_CO_MEMBER_READY_ROW;
drop view V_CO_MEMBER_ALL_ROW;
drop view v_busi_infomation_row;
drop view v_busi_infomation_farm_row;
drop view v_busi_infomation_mart_row;
drop view v_trans_code_buy_all_row;
drop view v_trans_code_buy_unconfirm_row;
drop view v_trans_code_buy_confirm_row;
drop view v_trans_code_sell_all_row;
drop view v_trans_code_sell_uconfirm_row;
drop view v_trans_code_sell_confirm_row;
drop view v_item_storage_all_row;
drop view v_inoutstorage_all_row;


/* Create Tables */

CREATE TABLE busi_infomation
(
	busi_number varchar2(100) NOT NULL,
	busi_name varchar2(200) NOT NULL,
	busi_address varchar2(200) NOT NULL,
	busi_phone varchar2(100) NOT NULL,
	busi_owner varchar2(50) NOT NULL,
	busi_index varchar2(10) NOT NULL,
	PRIMARY KEY (busi_number)
);


CREATE TABLE cash_log
(
	trans_code varchar2(200) NOT NULL,
	item_code varchar2(50) NOT NULL,
	item_category varchar2(100) NOT NULL,
	item_name varchar2(100) NOT NULL,
	cash_cnt varchar2(100) NOT NULL,
	cash_money varchar2(200) NOT NULL
);


CREATE TABLE com_inform
(
	comnumber varchar2(50) NOT NULL,
	comname varchar2(50) NOT NULL,
	comowner varchar2(50) NOT NULL,
	comdate date NOT NULL,
	commoney varchar2(200) NOT NULL,
	comtel varchar2(50) NOT NULL,
	comfax varchar2(50) NOT NULL,
	comemail varchar2(50) NOT NULL,
	comloc varchar2(200) NOT NULL,
	PRIMARY KEY (comnumber)
);


CREATE TABLE co_board
(
	memidx number NOT NULL
);


CREATE TABLE co_exit
(
	memidx number NOT NULL
);


CREATE TABLE co_grant
(
	grantidx number NOT NULL,
	grantname varchar2(50) NOT NULL,
	PRIMARY KEY (grantidx)
);


CREATE TABLE co_member
(
	memidx number NOT NULL,
	grantidx number NOT NULL,
	partidx number NOT NULL,
	rankidx number NOT NULL,
	id varchar2(50) NOT NULL,
	pw varchar2(200) NOT NULL,
	name varchar2(50) NOT NULL,
	gender number,
	phonenum varchar2(50) NOT NULL,
	email varchar2(50) NOT NULL,
	birthday date NOT NULL,
	joindate date NOT NULL,
	PRIMARY KEY (memidx)
);


CREATE TABLE co_part
(
	partidx number NOT NULL,
	partname varchar2(50) NOT NULL,
	PRIMARY KEY (partidx)
);


CREATE TABLE co_rank
(
	rankidx number NOT NULL,
	rankname varchar2(50) NOT NULL,
	PRIMARY KEY (rankidx)
);


CREATE TABLE delete_busi_infomation
(
	busi_number varchar2(100) NOT NULL,
	busi_name varchar2(200) NOT NULL,
	busi_address varchar2(200) NOT NULL,
	busi_phone varchar2(100) NOT NULL,
	busi_owner varchar2(50) NOT NULL,
	busi_index varchar2(10) NOT NULL
);


CREATE TABLE delete_cash_log
(
	trans_code varchar2(200) NOT NULL,
	item_code varchar2(50) NOT NULL,
	item_category varchar2(100) NOT NULL,
	item_name varchar2(100) NOT NULL,
	cash_cnt varchar2(100) NOT NULL,
	cash_money varchar2(200) NOT NULL
);


CREATE TABLE delete_trans_code
(
	trans_code varchar2(200) NOT NULL,
	trans_index varchar2(10) NOT NULL,
	busi_number varchar2(100) NOT NULL,
	busi_name varchar2(200) NOT NULL,
	trans_tmoney varchar2(200) NOT NULL,
	trans_subject varchar2(100) NOT NULL,
	trans_date date NOT NULL,
	trans_san varchar2(10) NOT NULL,
	memidx number NOT NULL,
	name varchar2(50) NOT NULL,
	writedate date NOT NULL
);


CREATE TABLE InOutStorage
(
	iostorageidx number NOT NULL,
	trans_code varchar2(200) NOT NULL,
	trans_index varchar2(10) NOT NULL,
	busi_number varchar2(100) NOT NULL,
	busi_name varchar2(200) NOT NULL,
	trans_tmoney varchar2(200) NOT NULL,
	trans_subject varchar2(100) NOT NULL,
	trans_date date NOT NULL,
	memidx number NOT NULL,
	name varchar2(50) NOT NULL,
	inout varchar2(20) NOT NULL,
	run_date date NOT NULL,
	PRIMARY KEY (iostorageidx)
);


CREATE TABLE item_storage
(
	item_code varchar2(50) NOT NULL,
	item_category varchar2(100) NOT NULL,
	item_name varchar2(100) NOT NULL,
	item_cnt varchar2(200) NOT NULL,
	buy_money varchar2(200) NOT NULL,
	sell_money varchar2(200) NOT NULL,
	PRIMARY KEY (item_code)
);


CREATE TABLE trans_code
(
	trans_code varchar2(200) NOT NULL,
	trans_index varchar2(10) NOT NULL,
	busi_number varchar2(100) NOT NULL,
	busi_name varchar2(200) NOT NULL,
	trans_tmoney varchar2(200) NOT NULL,
	trans_subject varchar2(100) NOT NULL,
	trans_date date NOT NULL,
	trans_san varchar2(10) NOT NULL,
	memidx number NOT NULL,
	name varchar2(50) NOT NULL,
	writedate date NOT NULL,
	PRIMARY KEY (trans_code)
);



/* Create Foreign Keys */

ALTER TABLE trans_code
	ADD FOREIGN KEY (busi_number)
	REFERENCES busi_infomation (busi_number)
;


ALTER TABLE co_member
	ADD FOREIGN KEY (grantidx)
	REFERENCES co_grant (grantidx)
;


ALTER TABLE co_board
	ADD FOREIGN KEY (memidx)
	REFERENCES co_member (memidx)
;


ALTER TABLE co_exit
	ADD FOREIGN KEY (memidx)
	REFERENCES co_member (memidx)
;


ALTER TABLE co_member
	ADD FOREIGN KEY (partidx)
	REFERENCES co_part (partidx)
;


ALTER TABLE co_member
	ADD FOREIGN KEY (rankidx)
	REFERENCES co_rank (rankidx)
;


ALTER TABLE cash_log
	ADD FOREIGN KEY (trans_code)
	REFERENCES trans_code (trans_code)
;

CREATE sequence memidx_seq;
CREATE sequence iostorageidx_seq;

/* 페이징을 위한 뷰 생성 */
/* 회원정보 보기[관리자] */
CREATE VIEW V_CO_MEMBER_ACCEPT_ROW AS SELECT ROWNUM rnum, M.* FROM 
(SELECT memidx, rank.rankname rankidx, part.partname partidx, name, grant1.grantname grantidx, gender, phonenum, email, birthday, joindate, id, pw
		FROM co_member mem
		JOIN co_part part ON mem.partidx = part.partidx
		JOIN co_rank rank ON mem.rankidx = rank.rankidx
		JOIN co_grant grant1 ON mem.grantidx = grant1.grantidx
		WHERE NOT grant1.grantname LIKE '대기'
		ORDER BY memidx DESC) M;
		
CREATE VIEW V_CO_MEMBER_READY_ROW AS SELECT ROWNUM rnum, M.* FROM 
(SELECT memidx, rank.rankname rankidx, part.partname partidx, name, grant1.grantname grantidx, gender, phonenum, email, birthday, joindate, id, pw
		FROM co_member mem
		JOIN co_part part ON mem.partidx = part.partidx
		JOIN co_rank rank ON mem.rankidx = rank.rankidx
		JOIN co_grant grant1 ON mem.grantidx = grant1.grantidx
		WHERE grant1.grantname LIKE '대기'
		ORDER BY memidx DESC) M;
		
CREATE VIEW V_CO_MEMBER_ALL_ROW AS SELECT ROWNUM rnum, M.* FROM 
(SELECT memidx, rank.rankname rankidx, part.partname partidx, name, grant1.grantname grantidx, gender, phonenum, email, birthday, joindate, id, pw
		FROM co_member mem
		JOIN co_part part ON mem.partidx = part.partidx
		JOIN co_rank rank ON mem.rankidx = rank.rankidx
		JOIN co_grant grant1 ON mem.grantidx = grant1.grantidx
		ORDER BY memidx DESC) M;
		
CREATE VIEW v_busi_infomation_row AS SELECT ROWNUM rnum, M.* FROM 
(SELECT busi_number, BUSI_NAME, BUSI_ADDRESS, BUSI_PHONE, BUSI_OWNER, BUSI_INDEX
		FROM BUSI_INFOMATION busi) M;
		
CREATE VIEW v_busi_infomation_farm_row AS SELECT ROWNUM rnum, M.* FROM 
(SELECT busi_number, BUSI_NAME, BUSI_ADDRESS, BUSI_PHONE, BUSI_OWNER, BUSI_INDEX
		FROM BUSI_INFOMATION busi
		WHERE busi.busi_index LIKE '농장') M;
		
CREATE VIEW v_busi_infomation_mart_row AS SELECT ROWNUM rnum, M.* FROM 
(SELECT busi_number, BUSI_NAME, BUSI_ADDRESS, BUSI_PHONE, BUSI_OWNER, BUSI_INDEX
		FROM BUSI_INFOMATION busi
		WHERE busi.busi_index LIKE '마트') M;
		
		
CREATE VIEW v_trans_code_buy_all_row AS SELECT ROWNUM rnum, M.* FROM 
(SELECT trans_code, trans_date, trans_subject, busi.busi_name busi_name, trans_tmoney, trans_san, memidx
		FROM trans_code t_code
		JOIN busi_infomation busi ON t_code.busi_number = busi.busi_number
		WHERE trans_index = '구매' ORDER BY trans_date DESC) M;

CREATE VIEW v_trans_code_buy_unconfirm_row AS SELECT ROWNUM rnum, M.* FROM 
(SELECT trans_code, trans_date, trans_subject, busi.busi_name busi_name, trans_tmoney, trans_san, memidx
		FROM trans_code t_code
		JOIN busi_infomation busi ON t_code.busi_number = busi.busi_number
		WHERE trans_index = '구매' AND trans_san = '0' ORDER BY trans_date DESC) M;	

CREATE VIEW v_trans_code_buy_confirm_row AS SELECT ROWNUM rnum, M.* FROM 
(SELECT trans_code, trans_date, trans_subject, busi.busi_name busi_name, trans_tmoney, trans_san, memidx
		FROM trans_code t_code
		JOIN busi_infomation busi ON t_code.busi_number = busi.busi_number
		WHERE trans_index = '구매' AND trans_san = '1' ORDER BY trans_date DESC) M;
		
CREATE VIEW v_trans_code_sell_all_row AS SELECT ROWNUM rnum, M.* FROM 
(SELECT trans_code, trans_date, trans_subject, busi.busi_name busi_name, trans_tmoney, trans_san, memidx
		FROM trans_code t_code
		JOIN busi_infomation busi ON t_code.busi_number = busi.busi_number
		WHERE trans_index = '판매' ORDER BY trans_date DESC) M;

CREATE VIEW v_trans_code_sell_uconfirm_row AS SELECT ROWNUM rnum, M.* FROM 
(SELECT trans_code, trans_date, trans_subject, busi.busi_name busi_name, trans_tmoney, trans_san, memidx
		FROM trans_code t_code
		JOIN busi_infomation busi ON t_code.busi_number = busi.busi_number
		WHERE trans_index = '판매' AND trans_san = '0' ORDER BY trans_date DESC) M;
		
CREATE VIEW v_trans_code_sell_confirm_row AS SELECT ROWNUM rnum, M.* FROM 
(SELECT trans_code, trans_date, trans_subject, busi.busi_name busi_name, trans_tmoney, trans_san, memidx
		FROM trans_code t_code
		JOIN busi_infomation busi ON t_code.busi_number = busi.busi_number
		WHERE trans_index = '판매' AND trans_san = '1' ORDER BY trans_date DESC) M;
		
CREATE VIEW v_item_storage_all_row AS SELECT ROWNUM rnum, M.* FROM 
(SELECT ITEM_CODE, ITEM_CATEGORY, ITEM_NAME, ITEM_CNT, BUY_MONEY, SELL_MONEY
		FROM item_storage) M;

CREATE VIEW v_inoutstorage_all_row AS SELECT ROWNUM rnum, M.* FROM 
		(SELECT IOSTORAGEIDX, TRANS_CODE, TRANS_INDEX, BUSI_NUMBER, BUSI_NAME, TRANS_TMONEY, TRANS_SUBJECT, TRANS_DATE, MEMIDX, NAME, INOUT, RUN_DATE
		FROM INOUTSTORAGE) M;

		
		
/* 권한 생성 */
insert into co_grant values(0, '대기');
insert into co_grant values(1, '일반');
insert into co_grant values(2, '인사관리자');
insert into co_grant values(3, '영업관리자');
insert into co_grant values(4, '창고관리자');
insert into co_grant values(5, '총관리자');
insert into co_grant values(6, '퇴직');

/* 부서 생성 */
insert into co_part values(1, '총괄');
insert into co_part values(2, '생산');
insert into co_part values(3, '인사');
insert into co_part values(4, '영업');

/* 직급 생성 */
insert into co_rank values(1, '회장');
insert into co_rank values(2, '부회장');
insert into co_rank values(3, '사장');
insert into co_rank values(4, '부사장');
insert into co_rank values(5, '전무');
insert into co_rank values(6, '상무');
insert into co_rank values(7, '이사');
insert into co_rank values(8, '부장');
insert into co_rank values(9, '차장');
insert into co_rank values(10, '과장');
insert into co_rank values(11, '대리');
insert into co_rank values(12, '주임');
insert into co_rank values(13, '사원');

/* 유저 생성 */
insert into co_member VALUES(memidx_seq.nextval, 5, 1, 12, 'admin', 'admin', '관리자', 1, '01000000000', 'admin@test.com', '1982-07-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 4, 2, 8, 'test1', 'test1', '테스트1', 1, '01082739483', 'test1@test.com', '1965-06-27', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 3, 4, 8, 'test2', 'test2', '테스트2', 1, '01083917382', 'test2@test.com', '1970-03-06', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 2, 3, 8, 'test3', 'test3', '테스트3', 2, '01099387382', 'test3@test.com', '1966-11-09', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 1, 4, 13, 'test4', 'test4', '테스트4', 1, '01084753944', 'test4@test.com', '1986-12-20', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 4, 13, 'test5', 'test5', '테스트5', 2, '01014594784', 'test5@test.com', '1988-03-10', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 2, 13, 'test6', 'test6', '테스트6', 1, '01028436293', 'test6@test.com', '1990-08-19', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 2, 13, 'test7', 'test7', '테스트7', 2, '01018475294', 'test7@test.com', '1992-06-13', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 3, 13, 'test8', 'test8', '테스트8', 1, '01084759454', 'test8@test.com', '1989-09-26', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 1, 13, 'test9', 'test9', '테스트9', 2, '01065372833', 'test9@test.com', '1986-03-29', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 4, 13, 'test10', 'test10', '테스트10', 1, '01078329123', 'test10@test.com', '1988-02-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 3, 13, 'test11', 'test11', '테스트11', 1, '01046746467', 'test11@test.com', '1988-02-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 2, 13, 'test12', 'test12', '테스트12', 1, '01001353958', 'test12@test.com', '1988-02-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 2, 13, 'test13', 'test13', '테스트13', 1, '01035236894', 'test13@test.com', '1988-02-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 3, 13, 'test14', 'test14', '테스트14', 1, '01045934634', 'test14@test.com', '1988-02-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 3, 13, 'test15', 'test15', '테스트15', 1, '01096824604', 'test15@test.com', '1988-02-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 3, 13, 'test16', 'test16', '테스트16', 1, '01000453493', 'test16@test.com', '1988-02-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 4, 13, 'test17', 'test17', '테스트17', 1, '01049399342', 'test17@test.com', '1988-02-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 4, 13, 'test18', 'test18', '테스트18', 1, '01044390333', 'test18@test.com', '1988-02-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 4, 13, 'test19', 'test19', '테스트19', 1, '01049493049', 'test19@test.com', '1988-02-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 3, 13, 'test20', 'test20', '테스트20', 1, '01038829400', 'test20@test.com', '1988-02-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 2, 13, 'test21', 'test21', '테스트21', 1, '01044838444', 'test21@test.com', '1988-02-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 1, 13, 'test22', 'test22', '테스트22', 1, '01094949993', 'test22@test.com', '1988-02-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 2, 13, 'test23', 'test23', '테스트23', 1, '01044453442', 'test23@test.com', '1988-02-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 4, 13, 'test24', 'test24', '테스트24', 1, '01048488834', 'test24@test.com', '1988-02-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 3, 13, 'test25', 'test25', '테스트25', 1, '01099293827', 'test25@test.com', '1988-02-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 2, 13, 'test26', 'test26', '테스트26', 1, '01044493833', 'test26@test.com', '1988-02-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 1, 13, 'test27', 'test27', '테스트27', 1, '01022293232', 'test27@test.com', '1988-02-11', SYSDATE);
insert into co_member VALUES(memidx_seq.nextval, 0, 2, 13, 'test28', 'test28', '테스트28', 1, '01044443342', 'test28@test.com', '1988-02-11', SYSDATE);

/* 마트 생성 */
insert into busi_infomation VALUES('25245734573', '농장1', '서울시 강남구', '01023925353', '홍길동', '농장');
insert into busi_infomation VALUES('98347524483', '농장2', '서울시 송파구', '01034738432', '오춘삼', '농장');
insert into busi_infomation VALUES('47523945435', '농장3', '서울시 성북구', '01049582743', '고길동', '농장');
insert into busi_infomation VALUES('28347524543', '농장4', '서울시 구로구', '01057192383', '상남자', '농장');
insert into busi_infomation VALUES('98457498732', '마트1', '서울시 강남구', '01038492454', '이런이', '마트');
insert into busi_infomation VALUES('37458273454', '마트2', '서울시 송파구', '01098457914', '저런이', '마트');
insert into busi_infomation VALUES('98475234752', '마트3', '서울시 성북구', '01017591554', '고런이', '마트');
insert into busi_infomation VALUES('82764587234', '마트4', '서울시 구로구', '01088457294', '마지막', '마트');
insert into busi_infomation VALUES('24572457254', '농장5', '서울시 구로구', '01088877798', '이름은', '농장');
insert into busi_infomation VALUES('44463466323', '마트5', '서울시 강남구', '01099986666', '항상', '마트');
insert into busi_infomation VALUES('46457575757', '농장6', '서울시 구로구', '01044478932', '어렵다', '농장');
insert into busi_infomation VALUES('46362722733', '마트6', '서울시 강남구', '01092032899', '그래도', '마트');
insert into busi_infomation VALUES('44432222778', '농장7', '서울시 구로구', '01099283922', '지어야', '농장');
insert into busi_infomation VALUES('99939488837', '마트7', '서울시 강남구', '01011103993', '한다는', '마트');
insert into busi_infomation VALUES('00184832934', '농장8', '서울시 구로구', '01032030200', '게너무', '농장');
insert into busi_infomation VALUES('88394737234', '마트8', '서울시 강남구', '01049499939', '피곤한', '마트');
insert into busi_infomation VALUES('84848573894', '농장9', '서울시 구로구', '01038888283', '느낌이', '농장');
insert into busi_infomation VALUES('94843729283', '마트9', '서울시 강남구', '01088832938', '들어요', '마트');
insert into busi_infomation VALUES('99475743283', '농장10', '서울시 구로구', '01093829311', '화이팅', '농장');
insert into busi_infomation VALUES('84848483939', '마트10', '서울시 강남구', '01093829388', '다한다', '마트');
insert into busi_infomation VALUES('84392839454', '농장11', '서울시 구로구', '01047473847', '이것도', '농장');
insert into busi_infomation VALUES('88293849399', '마트11', '서울시 강남구', '01000302323', '마무리', '마트');

/* 제품 코드 생성 */
insert into item_storage VALUES('U001', '육류', '소고기', '0', '1000', '2000');
insert into item_storage VALUES('U002', '육류', '돼지고기', '0', '700', '1400');
insert into item_storage VALUES('U003', '육류', '양고기', '0', '1200', '2100');
insert into item_storage VALUES('U004', '육류', '닭', '0', '600', '1000');
insert into item_storage VALUES('U005', '육류', '오리', '0', '800', '1500');
insert into item_storage VALUES('C001', '채소', '양파', '0', '300', '700');
insert into item_storage VALUES('C002', '채소', '배추', '0', '800', '1650');
insert into item_storage VALUES('C003', '채소', '마늘', '0', '300', '550');
insert into item_storage VALUES('D001', '가공품', '치즈', '0', '700', '1400');
insert into item_storage VALUES('D002', '가공품', '스팸', '0', '500', '1200');
insert into item_storage VALUES('D003', '가공품', '통조림', '0', '900', '1280');
insert into item_storage VALUES('E001', '인스턴스', '라면', '0', '450', '800');
insert into item_storage VALUES('E002', '인스턴스', '과자', '0', '280', '1000');
insert into item_storage VALUES('E003', '인스턴스', '햄버거', '0', '670', '1430');



/* 거래내역 생성 */
INSERT INTO trans_code VALUES ('구매-25245734573-1', '구매', '25245734573', '홍길동', '10000', '구매요청1', '2019-01-15', '0', 1, '관리자', SYSDATE);
INSERT INTO trans_code VALUES ('구매-98347524483-1', '구매', '98347524483', '오춘삼', '21000', '구매요청2', '2019-01-17', '0', 2, '테스트1', SYSDATE);
INSERT INTO trans_code VALUES ('구매-47523945435-1', '구매', '47523945435', '고길동', '12000', '구매요청3', '2019-01-19', '0', 3, '테스트2', SYSDATE);
INSERT INTO trans_code VALUES ('구매-28347524543-1', '구매', '28347524543', '상남자', '18000', '구매요청4', '2019-01-20', '0', 1, '관리자', SYSDATE);
INSERT INTO trans_code VALUES ('구매-98457498732-1', '구매', '98457498732', '이런이', '12000', '구매요청5', '2019-01-21', '0', 2, '테스트1', SYSDATE);
INSERT INTO trans_code VALUES ('구매-37458273454-1', '구매', '37458273454', '저런이', '12000', '구매요청6', '2019-01-23', '0', 3, '테스트2', SYSDATE);
INSERT INTO trans_code VALUES ('구매-98475234752-1', '구매', '98475234752', '고런이', '16000', '구매요청7', '2019-01-24', '0', 1, '관리자', SYSDATE);
INSERT INTO trans_code VALUES ('구매-82764587234-1', '구매', '82764587234', '마지막', '15000', '구매요청8', '2019-01-25', '0', 2, '테스트1', SYSDATE);
INSERT INTO trans_code VALUES ('구매-24572457254-1', '구매', '24572457254', '이름은', '14000', '구매요청9', '2019-01-27', '0', 3, '테스트2', SYSDATE);
INSERT INTO trans_code VALUES ('구매-44463466323-1', '구매', '44463466323', '항상', '18000', '구매요청10', '2019-01-31', '0', 1, '관리자', SYSDATE);
INSERT INTO trans_code VALUES ('구매-46457575757-1', '구매', '46457575757', '어렵다', '9000', '구매요청11', '2019-02-01', '0', 2, '테스트1', SYSDATE);
INSERT INTO trans_code VALUES ('구매-46362722733-1', '구매', '46362722733', '그래도', '45000', '구매요청12', '2019-02-04', '0', 3, '테스트2', SYSDATE);
INSERT INTO trans_code VALUES ('구매-44432222778-1', '구매', '44432222778', '지어야', '28000', '구매요청13', '2019-02-08', '0', 1, '관리자', SYSDATE);
INSERT INTO trans_code VALUES ('구매-99939488837-1', '구매', '99939488837', '한다는', '6700', '구매요청14', '2019-02-13', '0', 2, '테스트1', SYSDATE);
INSERT INTO trans_code VALUES ('구매-00184832934-1', '구매', '00184832934', '개너무', '24000', '구매요청15', '2019-02-16', '0', 3, '테스트2', SYSDATE);

INSERT INTO cash_log VALUES ('구매-25245734573-1', 'U001', '육류', '소고기', '10', '1000');
INSERT INTO cash_log VALUES ('구매-98347524483-1', 'U002', '육류', '돼지고기', '30', '700');
INSERT INTO cash_log VALUES ('구매-47523945435-1', 'U003', '육류', '양고기', '10', '1200');
INSERT INTO cash_log VALUES ('구매-28347524543-1', 'U004', '육류', '닭', '30', '600');
INSERT INTO cash_log VALUES ('구매-98457498732-1', 'U005', '육류', '오리', '15', '800');
INSERT INTO cash_log VALUES ('구매-37458273454-1', 'C001', '채소', '양파', '40', '300');
INSERT INTO cash_log VALUES ('구매-98475234752-1', 'C002', '채소', '배추', '20', '800');
INSERT INTO cash_log VALUES ('구매-82764587234-1', 'C003', '채소', '마늘', '50', '300');
INSERT INTO cash_log VALUES ('구매-24572457254-1', 'D001', '가공품', '치즈', '20', '700');
INSERT INTO cash_log VALUES ('구매-44463466323-1', 'D002', '가공품', '스팸', '36', '500');
INSERT INTO cash_log VALUES ('구매-46457575757-1', 'D003', '가공품', '통조림', '10', '900');
INSERT INTO cash_log VALUES ('구매-46362722733-1', 'E001', '인스턴스', '라면', '100', '450');
INSERT INTO cash_log VALUES ('구매-44432222778-1', 'E002', '인스턴스', '과자', '100', '280');
INSERT INTO cash_log VALUES ('구매-99939488837-1', 'E003', '인스턴스', '햄버거', '10', '670');
INSERT INTO cash_log VALUES ('구매-00184832934-1', 'U001', '육류', '소고기', '24', '1000');



INSERT INTO trans_code VALUES ('판매-25245734573-1', '판매', '25245734573', '홍길동', '14300', '판매요청1', '2019-01-18', '0', 1, '관리자', SYSDATE);
INSERT INTO trans_code VALUES ('판매-98347524483-1', '판매', '98347524483', '오춘삼', '30000', '판매요청2', '2019-01-19', '0', 2, '테스트1', SYSDATE);
INSERT INTO trans_code VALUES ('판매-47523945435-1', '판매', '47523945435', '고길동', '8000', '판매요청3', '2019-01-21', '0', 3, '테스트2', SYSDATE);
INSERT INTO trans_code VALUES ('판매-28347524543-1', '판매', '28347524543', '상남자', '6400', '판매요청4', '2019-01-23', '0', 1, '관리자', SYSDATE);
INSERT INTO trans_code VALUES ('판매-98457498732-1', '판매', '98457498732', '이런이', '6000', '판매요청5', '2019-01-24', '0', 2, '테스트1', SYSDATE);
INSERT INTO trans_code VALUES ('판매-37458273454-1', '판매', '37458273454', '저런이', '7000', '판매요청6', '2019-01-26', '0', 3, '테스트2', SYSDATE);
INSERT INTO trans_code VALUES ('판매-98475234752-1', '판매', '98475234752', '고런이', '5500', '판매요청7', '2019-01-27', '0', 1, '관리자', SYSDATE);
INSERT INTO trans_code VALUES ('판매-82764587234-1', '판매', '82764587234', '마지막', '16500', '판매요청8', '2019-01-28', '0', 2, '테스트1', SYSDATE);
INSERT INTO trans_code VALUES ('판매-24572457254-1', '판매', '24572457254', '이름은', '7000', '판매요청9', '2019-01-30', '0', 3, '테스트2', SYSDATE);
INSERT INTO trans_code VALUES ('판매-44463466323-1', '판매', '44463466323', '항상', '15000', '판매요청10', '2019-02-03', '0', 1, '관리자', SYSDATE);
INSERT INTO trans_code VALUES ('판매-46457575757-1', '판매', '46457575757', '어렵다', '5000', '판매요청11', '2019-02-05', '0', 2, '테스트1', SYSDATE);
INSERT INTO trans_code VALUES ('판매-46362722733-1', '판매', '46362722733', '그래도', '10500', '판매요청12', '2019-02-08', '0', 3, '테스트2', SYSDATE);
INSERT INTO trans_code VALUES ('판매-44432222778-1', '판매', '44432222778', '지어야', '7000', '판매요청13', '2019-02-08', '0', 1, '관리자', SYSDATE);
INSERT INTO trans_code VALUES ('판매-99939488837-1', '판매', '99939488837', '한다는', '10000', '판매요청14', '2019-02-15', '0', 2, '테스트1', SYSDATE);
INSERT INTO trans_code VALUES ('판매-00184832934-1', '판매', '00184832934', '개너무', '7150', '판매요청15', '2019-02-19', '0', 3, '테스트2', SYSDATE);

 
INSERT INTO cash_log VALUES ('판매-25245734573-1', 'E003', '인스턴스', '햄버거', '10', '14300');
INSERT INTO cash_log VALUES ('판매-98347524483-1', 'E002', '인스턴스', '과자', '30', '30000');
INSERT INTO cash_log VALUES ('판매-47523945435-1', 'E001', '인스턴스', '라면', '10', '8000');
INSERT INTO cash_log VALUES ('판매-28347524543-1', 'D003', '가공품', '통조림', '5', '6400');
INSERT INTO cash_log VALUES ('판매-98457498732-1', 'D002', '가공품', '스팸', '5', '6000');
INSERT INTO cash_log VALUES ('판매-37458273454-1', 'D001', '가공품', '치즈', '5', '7000');
INSERT INTO cash_log VALUES ('판매-98475234752-1', 'C003', '채소', '마늘', '10', '5500');
INSERT INTO cash_log VALUES ('판매-82764587234-1', 'C002', '채소', '배추', '10', '16500');
INSERT INTO cash_log VALUES ('판매-24572457254-1', 'C001', '채소', '양파', '10', '7000');
INSERT INTO cash_log VALUES ('판매-44463466323-1', 'U005', '육류', '오리', '10', '15000');
INSERT INTO cash_log VALUES ('판매-46457575757-1', 'U004', '육류', '닭', '5', '5000');
INSERT INTO cash_log VALUES ('판매-46362722733-1', 'U003', '육류', '양고기', '5', '10500');
INSERT INTO cash_log VALUES ('판매-44432222778-1', 'U002', '육류', '돼지고기', '5', '7000');
INSERT INTO cash_log VALUES ('판매-99939488837-1', 'U001', '육류', '소고기', '5', '10000');
INSERT INTO cash_log VALUES ('판매-00184832934-1', 'E003', '인스턴스', '햄버거', '5', '7150');


