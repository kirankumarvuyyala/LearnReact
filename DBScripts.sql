
USE [mPitesan_Consumer]
GO


CREATE TABLE [dbo].[tbl_merchant_dyn_forms](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[PROVIDERID] [int] NOT NULL,
	[ORDERNO] [int] NOT NULL,
	[TITLE_EN] [varchar](100) NULL,
	[TITLE_MM] [nvarchar](100) NULL,
	[CONTROL_TYPE] [int] NULL,
	[IS_MANDATORY] [tinyint] NULL,
	[MAX_LEN] [smallint] NULL,
	[INPUT_TYPE] [tinyint] NULL,
	[SHOW_IN_CONFIRM_PAGE] [tinyint] NULL,
	[CONFIRM_PAGE_DISP_ORDER] [tinyint] NULL,
	[SHOW_IN_FINAL_RECEIPT] [tinyint] NULL,
	[Hint_Text_EN] [varchar](255) NULL,
	[Hint_Text_MM] [nvarchar](255) NULL,
	[MIN_LIMIT] [varchar](15) NULL,
	[MAX_LIMIT] [varchar](15) NULL,
	[DATA_VAL_EN] [varchar](4000) NULL,
	[DATA_VAL_MM] [nvarchar](4000) NULL,
	[MAX_LINES] [tinyint] NULL,
	[TEXT_EN] [varchar](max) NULL,
	[TEXT_MM] [nvarchar](max) NULL,
	[IMAGE_EN] [varchar](255) NULL,
	[IMAGE_MM] [varchar](255) NULL,
	[FORM_VAR_NAME] [varchar](50) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Control ID' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'ID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'ID generated for the OfflineMerchant primary key in tbl_serviceproviders' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'PROVIDERID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Order within the merchant form fields list ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'ORDERNO'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Contol Name / Lable to be displayed in form' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'TITLE_EN'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Contol Name / Lable to be displayed in form' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'TITLE_MM'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Control ID defined in tbl_merchant_dyn_ctrls' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'CONTROL_TYPE'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'0=optional; 1=mandatory' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'IS_MANDATORY'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'max length allowed for this form variable' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'MAX_LEN'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'1=Numeric; 2=AlphaNumeric Keyboards' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'INPUT_TYPE'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'will come in getfee response' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'SHOW_IN_CONFIRM_PAGE'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'order in getfee response' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'CONFIRM_PAGE_DISP_ORDER'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Show in final receipt' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'SHOW_IN_FINAL_RECEIPT'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Only applicable to specific controls' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'Hint_Text_EN'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Only applicable to specific controls' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'Hint_Text_MM'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Only applicable to specific controls - Can be a Numeric Value / Date' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'MIN_LIMIT'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Only applicable to specific controls - Can be a Numeric Value / Date' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'MAX_LIMIT'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Only applicable to specific controls - Can be an array of Name,Value paires [Json]' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'DATA_VAL_EN'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Only applicable to specific controls - Can be an array of Name,Value paires [Json]' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'DATA_VAL_MM'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Only applicable to specific controls - can be like 3 etc....' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'MAX_LINES'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Only applicable to specific controls - Can be html' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'TEXT_EN'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Only applicable to specific controls - Can be html' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'TEXT_MM'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Only applicable to specific controls - Banner Image English' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'IMAGE_EN'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Only applicable to specific controls - Banner Image Myanmar' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'IMAGE_MM'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Specific Variable Name with in the Form' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_forms', @level2type=N'COLUMN',@level2name=N'FORM_VAR_NAME'
GO

alter table tbl_merchant_dyn_forms  add ptext_en varchar(50)
alter table tbl_merchant_dyn_forms  add ptext_mm nvarchar(200)


USE [mPitesan_Consumer]
GO

/* author name: kirankumar.v          
cretead date:06/02/2023          
updated date: 27/02/2023         
purpose:Dynamic Form Controls (Insert,Update,Delete,Display)          
remarks: Added Pre Text En&&Mm         
*/          
alter PROCEDURE [udp_dyn_get_merchant_forms]                
(@ID int=null,            
@PROVIDERID int=NULL,                
 @ORDERNO int =null,                
 @TITLE_EN varchar(100)=null,                
      @TITLE_MM nvarchar(100)=null,                
      @CONTROL_TYPE int=null,                
     @IS_MANDATORY tinyint=null,                
      @MAX_LEN smallint=null,                
      @INPUT_TYPE tinyint=null,                
      @SHOW_IN_CONFIRM_PAGE tinyint =null,                
      @CONFIRM_PAGE_DISP_ORDER tinyint=null,                
      @SHOW_IN_FINAL_RECEIPT tinyint=null,                
      @Hint_Text_EN varchar(255)=null,                
      @Hint_Text_MM nvarchar(255)=null,                
      @MIN_LIMIT varchar(15)=null,                
      @MAX_LIMIT varchar(15)=null,                
      @DATA_VAL_EN varchar(4000)=null,                
      @DATA_VAL_MM nvarchar(4000)=null,                
     @MAX_LINES tinyint=null,                
     @TEXT_EN varchar(max)=null,                
      @TEXT_MM  nvarchar(max)=null,                
      @IMAGE_EN varchar(255)=null,                
      @IMAGE_MM nvarchar(255)=null,                
  @FORM_VAR_NAME varchar(100)=null,    
  @Pre_Text_en varchar(50)=null,  
  @Pre_Text_mm nvarchar(200)=null,  
   @RETVAL INT=NULL OUTPUT,            
  @MODE varchar(30))                
  as begin                
  IF(@MODE='GET')                
  BEGIN                
  SELECT * FROM tbl_merchant_dyn_forms where PROVIDERID=@PROVIDERID                
  END                
  IF(@MODE='INSERT')                
  begin            
  IF EXISTS(SELECT * from tbl_merchant_dyn_forms where PROVIDERID=@PROVIDERID and             
  CONTROL_TYPE=case when @CONTROL_TYPE='1' then 1 else '0' end)            
  begin            
  if(@@ERROR=0)            
  set @RETVAL=2            
  return @RETVAL            
  end            
  else            
  begin            
  INSERT INTO tbl_merchant_dyn_forms(PROVIDERID,ORDERNO,TITLE_EN,TITLE_MM,CONTROL_TYPE,IS_MANDATORY,                
  MAX_LEN,INPUT_TYPE,SHOW_IN_CONFIRM_PAGE,CONFIRM_PAGE_DISP_ORDER,SHOW_IN_FINAL_RECEIPT,                
  Hint_Text_EN,Hint_Text_MM,MIN_LIMIT,MAX_LIMIT,DATA_VAL_EN,DATA_VAL_MM,MAX_LINES,TEXT_EN,                
  TEXT_MM,IMAGE_EN,IMAGE_MM,FORM_VAR_NAME,ptext_en,ptext_mm)                
  VALUES(@PROVIDERID,@ORDERNO,@TITLE_EN,@TITLE_MM,@CONTROL_TYPE,@IS_MANDATORY,                
 @MAX_LEN,@INPUT_TYPE,@SHOW_IN_CONFIRM_PAGE,@CONFIRM_PAGE_DISP_ORDER,@SHOW_IN_FINAL_RECEIPT,                
 @Hint_Text_EN,@Hint_Text_MM,@MIN_LIMIT,@MAX_LIMIT,@DATA_VAL_EN,@DATA_VAL_MM,@MAX_LINES,@TEXT_EN,                
  @TEXT_MM,@IMAGE_EN,@IMAGE_MM,@FORM_VAR_NAME, @Pre_Text_en, @Pre_Text_mm)              
    if(@@ERROR=0)            
  set @RETVAL=1            
  return @RETVAL            
  end             
  end            
   IF(@MODE='UPDATE')                
  begin              
  update tbl_merchant_dyn_forms set ORDERNO=@ORDERNO,            
  CONTROL_TYPE=@CONTROL_TYPE,            
  TITLE_EN=@TITLE_EN,TITLE_MM=@TITLE_MM,              
  IS_MANDATORY=@IS_MANDATORY,                
  MAX_LEN=@MAX_LEN,INPUT_TYPE=@INPUT_TYPE,               
  SHOW_IN_CONFIRM_PAGE=@SHOW_IN_CONFIRM_PAGE,              
  CONFIRM_PAGE_DISP_ORDER=@CONFIRM_PAGE_DISP_ORDER,              
  SHOW_IN_FINAL_RECEIPT=@SHOW_IN_FINAL_RECEIPT,              
  Hint_Text_EN=@Hint_Text_EN,Hint_Text_MM=@Hint_Text_MM,              
  MIN_LIMIT=@MIN_LIMIT,MAX_LIMIT=@MAX_LIMIT,              
  DATA_VAL_EN=@DATA_VAL_EN,      
  DATA_VAL_MM=@DATA_VAL_MM,              
  MAX_LINES=@MAX_LINES,              
  TEXT_EN=@TEXT_EN,TEXT_MM=@TEXT_MM,              
  IMAGE_EN=CASE WHEN  ISNULL(@IMAGE_EN,'') = '' THEN  IMAGE_EN ELSE @IMAGE_EN END,              
  IMAGE_MM=CASE WHEN  ISNULL(@IMAGE_MM,'') = '' THEN  IMAGE_MM ELSE @IMAGE_MM END,              
  FORM_VAR_NAME=@FORM_VAR_NAME,  
  ptext_en=@Pre_Text_en,  
  ptext_mm=@Pre_Text_mm  
  WHERE PROVIDERID=@PROVIDERID AND ID=@ID             
   set @RETVAL=1            
  return @RETVAL            
  end       
  IF(@MODE='UPDATE_DATAVAL')      
  BEGIN      
  update tbl_merchant_dyn_forms set   DATA_VAL_EN=@DATA_VAL_EN,      
  DATA_VAL_MM=@DATA_VAL_MM       
  WHERE PROVIDERID=@PROVIDERID AND ID=@ID             
   set @RETVAL=1            
  return @RETVAL             
  END      
  IF(@MODE='DELETE')           
  BEGIN            
  delete from tbl_merchant_dyn_forms where ID=@ID            
    set @RETVAL=1            
  return @RETVAL            
  END            
  END   
  go
  -------------------

  USE [mPitesan_Consumer]
GO


CREATE TABLE [dbo].[tbl_merchant_dyn_ctrls](
	[ID] [int] NOT NULL,
	[CODE] [varchar](5) NULL,
	[NAME] [varchar](50) NOT NULL,
	[REMARKS] [varchar](500) NOT NULL,
	[MetaIDS] [varchar](100) NULL,
 CONSTRAINT [PK_tbl_merchant_dyn_ctrls] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Control ID - this will be saved in ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_ctrls', @level2type=N'COLUMN',@level2name=N'ID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Control Code' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_ctrls', @level2type=N'COLUMN',@level2name=N'CODE'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Name of the Control - will be displayed in Config Screen' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_merchant_dyn_ctrls', @level2type=N'COLUMN',@level2name=N'NAME'
GO

  USE [mPitesan_Consumer]
GO

 /* author name: kirankumar.v  
cretead date:06/02/2023  
updated date:  
purpose:Dynamic Controls (for Display in Control Type)  
remarks:  
*/  
CREATE procedure [dbo].[udp_dyn_get_controls]          
as           
begin       
select NAME,ID from [tbl_merchant_dyn_ctrls]     
end 
go
--------------------
USE [mPitesan_Consumer]
GO

/****** Object:  Table [dbo].[TBL_SERVICE_MASTER]    Script Date: 2/20/2023 3:18:03 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[TBL_SERVICE_MASTER](
	[SRVID] [int] IDENTITY(1,1) NOT NULL,
	[SRVNAME] [varchar](50) NULL,
	[SRVTYPE] [int] NULL,
	[ORDER] [int] NULL,
	[STATUS] [varchar](1) NULL,
	[HISTORYKEY] [varchar](20) NULL,
	[VERSION_ID] [varchar](5) NOT NULL,
	[icon] [varchar](200) NULL,
	[special] [bit] NULL,
	[url] [varchar](1000) NULL,
	[external] [varchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[SRVID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[TBL_SERVICE_MASTER] ADD  DEFAULT ('A') FOR [STATUS]
GO

ALTER TABLE [dbo].[TBL_SERVICE_MASTER] ADD  DEFAULT ('1.0') FOR [VERSION_ID]
GO


USE [mPitesan_Consumer]
GO
 /* author name: kirankumar.v    
cretead date:05/02/2023    
updated date:    
purpose:Merchant Service (for Display in Service Type,Parent)    
remarks:    
*/    
CREATE procedure [dbo].[udp_dyn_get_services]              
as               
begin              
 -- show all services and billers              
 select SRVID,SRVNAME from tbl_service_master where status = 'A'                    
end  
go
------------------
USE [mPitesan_Consumer]
GO



CREATE TABLE [dbo].[TBL_SERVICEPROVIDERS](
	[PROVIDERID] [int] IDENTITY(1,1) NOT NULL,
	[BILLERCODE] [varchar](30) NULL,
	[BILLERNAME] [varchar](100) NULL,
	[ICON] [varchar](100) NULL,
	[SRV_MID] [int] NULL,
	[ORDER] [int] NULL,
	[ENABLETOWNS] [char](2) NULL,
	[ENQUIRYTYPE] [varchar](50) NULL,
	[VIEWHISTORY] [varchar](50) NULL,
	[URL] [varchar](500) NULL,
	[EXTERNAL] [varchar](10) NULL,
	[SHOWENQUIRY] [varchar](10) NULL,
	[SHOWPACKAGES] [varchar](10) NULL,
	[FORM] [varchar](2000) NULL,
	[DENOMINATIONS] [varchar](1000) NULL,
	[SHOWINAPP] [smallint] NULL,
	[VERSION_ID] [varchar](5) NOT NULL,
	[BILLER_TYPE] [smallint] NOT NULL,
	[parentgroup] [smallint] NULL,
	[REMARKS_PARAMS] [varchar](2000) NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[TBL_SERVICEPROVIDERS] ADD  DEFAULT ((1)) FOR [SHOWINAPP]
GO

ALTER TABLE [dbo].[TBL_SERVICEPROVIDERS] ADD  DEFAULT ('1.0') FOR [VERSION_ID]
GO

ALTER TABLE [dbo].[TBL_SERVICEPROVIDERS] ADD  DEFAULT ('1') FOR [BILLER_TYPE]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TBL_SERVICEPROVIDERS', @level2type=N'COLUMN',@level2name=N'PROVIDERID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'enquirytype - is the additional parameter used while billenquiry and billpayment api calls' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TBL_SERVICEPROVIDERS', @level2type=N'COLUMN',@level2name=N'ENQUIRYTYPE'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'based on this - decide on view history display' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TBL_SERVICEPROVIDERS', @level2type=N'COLUMN',@level2name=N'VIEWHISTORY'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'If biller requires redirection like "Travel" - Url will be stored in this' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TBL_SERVICEPROVIDERS', @level2type=N'COLUMN',@level2name=N'URL'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Need to show in webview / launch browser from app - Y/N' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TBL_SERVICEPROVIDERS', @level2type=N'COLUMN',@level2name=N'EXTERNAL'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Based on this - app will show bill enquiry / skips bill enquiry' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TBL_SERVICEPROVIDERS', @level2type=N'COLUMN',@level2name=N'SHOWENQUIRY'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'if Y - shows packs / N - no need to show packs' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TBL_SERVICEPROVIDERS', @level2type=N'COLUMN',@level2name=N'SHOWPACKAGES'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'New colum added for dynamic form merchants. It will help us to frame and pass parameter "remarks" to merchantpay api. [added on 31Jan23] ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TBL_SERVICEPROVIDERS', @level2type=N'COLUMN',@level2name=N'REMARKS_PARAMS'
GO


USE [mPitesan_Consumer]
GO

 /* author name: kirankumar.v    
cretead date:04/02/2023    
updated date:    
purpose:Offline_Merchants (Insert,Update,Delete,Display)    
remarks:    
*/    
    
CREATE procedure [dbo].[udp_dyn_get_merchant]                 
(              
@Action varchar(30),              
@BILLERCODE varchar(30)=null,              
@BILLERNAME varchar(100)=null,              
@ICON varchar(100)=null,              
@SRV_MID int=null,              
@ORDERID int=null,            
@PROVIDERID int =null,         
 @RETVAL INT=NULL OUTPUT,        
@parentgroup smallint=null              
              
)              
as                       
begin                
if(@Action='GET')              
begin              
 select [providerid],[billercode],[billername],[icon],[srv_mid],[order],[enabletowns],[enquirytype],            
 [viewhistory],[url],[external],[showenquiry],[showpackages],[form],[denominations],[ShowInApp],            
 [version_id],[biller_type],ISNULL(parentgroup,'') AS "parentgroup", [form]             
 from tbl_serviceproviders             
 where srv_mid in (select srvid from tbl_service_master where status = 'A') and BILLER_TYPE=4 order by PROVIDERID desc                    
end              
if(@Action='GETBYID')            
begin            
select [billercode],[billername],[icon],[srv_mid],[order],[parentgroup] from TBL_SERVICEPROVIDERS            
where  PROVIDERID=@PROVIDERID            
end            
  if(@Action='SEARCH')           
  begin          
  select providerid,billercode,billername,icon,srv_mid,  
  parentgroup,ShowInApp,[order] from  TBL_SERVICEPROVIDERS           
  where billername like '%'+@BILLERNAME+'%'           
  end          
if(@Action='INSERT')              
begin     
if exists(select * from TBL_SERVICEPROVIDERS where billercode=@BILLERCODE)  
begin  
 set @RETVAL=2        
  return @RETVAL   
end  
else  
begin  
insert into TBL_SERVICEPROVIDERS ([billercode],[billername],[icon],[srv_mid],[order],[enabletowns],            
   [showenquiry],[showpackages],[ShowInApp],[version_id],[parentgroup],[biller_type])             
  values(@BILLERCODE,@BILLERNAME,@ICON,@SRV_MID,@ORDERID,'N','N','N',0,1.3,@parentgroup,4)         
  set @RETVAL=@@IDENTITY        
  return @RETVAL         
end     
end  
if(@Action='UPDATE')            
begin            
update TBL_SERVICEPROVIDERS set billercode=@BILLERCODE,[billername]=@BILLERNAME,            
[icon]= CASE WHEN  ISNULL(@ICON,'') = '' THEN  icon ELSE @ICON END,            
[srv_mid]=@SRV_MID,[order]=@ORDERID,[parentgroup]=@parentgroup            
where PROVIDERID=@PROVIDERID            
end            
end  
go
  
  
  
------------------


