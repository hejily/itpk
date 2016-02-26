$(function()	{
	$("nav > ul > li").hover(function() {
		$("ul", this).show();
		$("p" , this).addClass("on");
	}, function() {
		$("ul", this).hide();
		$("p" , this).removeClass("on");
	});
});
$(function()	{
	$(".btnShowmore").click(function() {
		$(".openForm ").toggleClass("on");
		$(this).toggleClass("on");
		$(".openmenuReset").toggle();
	});
});
$(function()	{
	$(".btnFiltermore").click(function() {
		$(".openForm ").toggleClass("on");
		$(this).toggleClass("on");
		$(".openmenuReset").toggle();
	});
});

/*	modal popup	*/
$(function()	{
	$(".layerClose").click(function() {
		$(".modalBg").hide();
		$(".modalLayer").hide();		
		$(".alramList").hide();	
	});
});

/*	modal & part test	*/
$(function()	{
	$(".popup01").click(function() {
		$(".modalBg").show();
		$(".requestModal01").show();		
		$(".requestSavePopup").show();		
		$(".selectRecipientPopup").show();	
		$(".addSessionPopup").show();	
		$(".unsubmitConfirm").show();		
		$(".groupFilterPopup").show();
		$(".newNameSet").show();	
		$(".uploadPopup").show();	
	});
	$(".popup02").click(function() {
		$(".modalBg").show();
		$(".requestModal02").show();	
		$(".documentNewPopup").show();	
		$(".requestModal04").show();	
	});
	$(".popup03").click(function() {
		$(".modalBg").show();
		$(".requestModal03").show();
		$(".uploadPopup").show();				
		$(".deleteConfirm").show();		
	});	
	$(".partdisplay").click(function() {
		$(".addRecipientWrap").toggle();
		$(".noticeSendHead").toggle();		
		$(".addnoticeWrap .scrollTableWrap").toggle();
		$(".sendMailCheck").toggle();
		$(".resourceSendHead").toggle();	
		$(".addresourceWrap .scrollTableWrap").toggle();
//		$(".typeSelectWrap").toggleClass("off");
		$(".resourceHistoryWrap").toggle();
		$(".realGridArea").toggle();
	});
	$(".popupUpload").click(function() {
		$(".modalBg").show();
		$(".uploadPopup").show();
	});	
	$(".popupGroupFilter").click(function() {
		$(".modalBg").show();
		$(".groupFilterPopup").show();
	});	
});

/*	notice content	*/
$(function()	{
	$(".date").click(function() {
		$(this).parent().toggleClass("on");
	});
//	151002 Edit
	$(".noticeOpen").click(function() {
		$(this).parent().toggleClass("on");
	});

});

/*	add notice	*/
$(function()	{
	$(document).on({
		click: function() {
			$(".searchWrap ul li ul li").removeClass("on");
			$(".searchWrap ul li p").removeClass("on").removeClass("open");
			$(this).addClass("on").parent().prev().addClass("open");
		}
	}, ".searchWrap ul li ul li");

	$(document).on({
		click: function() {
			if(!$(this).hasClass("on")){
				$(".searchWrap ul li p").removeClass("on").removeClass("open");
				$(this).addClass("on");
				//$(".searchWrap ul li ul").hide();
				$(".searchWrap ul li ul li").removeClass("on");
				$(this).next().show();
			}else{
				$(this).removeClass("on");
				$(this).next().hide();
			}
		}
	}, ".searchWrap ul li p");

	$(document).on({
		click: function() {
			$(this).parent().toggleClass("on").siblings("tr").removeClass("on");
		}
	}, ".selectedItem .scrollTableWrap td");
});

function noticeStyle(){
	$(".searchWrap ul li:last-child").css("border-bottom","1px solid #d0d0d0");
	$(".searchWrap ul li ul li:last-child").css("border-bottom","none");
}

/*	151002 CTP Home	test	*/
$(function()	{
/*	151006	*/
	$(".popuptest .moreView").click(function() {
		$(".modalBg").show();
		$(".alramList").show();			
	});
	
	$(".style01").click(function() {
		$(".requestListWrap.dataList").toggle();
		$(".requestListWrap.nodata").toggle();
	});
	$(".style02").click(function() {
		$(".allocationValue.line3value").toggle();
		$(".allocationValue.line5value").toggle();
		$("p.allocationViewMore").toggle();
	});
	/*
	$("p.subgroupToggle a").click(function () {
		if ($(this).html() == "Open all level of subgroups")
        {
			$(this).html("Close all level of subgroups ")
		}
        else
        {
			$(this).html("Open all level of subgroups")
        }
        $(this).toggleClass("open");
    });
	*/
	/*
	$("p.allocationViewMore a").click(function () {
		$(".allocatoinDetail").toggle();
		if ($(this).html() == "View details")
        {
			$(this).html("Close details")
		}
        else
        {
			$(this).html("View details")
        }
        $(this).toggleClass("open");
    });
	*/
});

/*	151008 header	*/
$(function()	{
	$(".messageContainer .welcomeName").click(function() {
		$(".gnbUserInfoBox").show();
		$(".modalBg.transparent").show();
	});

	$(".gnbUserInfoBox	.gnbUserInfoClose a").click(function(){
		$(".gnbUserInfoBox").hide();
		$(".modalBg.transparent").hide();
	})
});

/*	151109 alram	*/
$(function()	{
	$(".welcomeAlert").click(function() {
		$(".alertWrap").show();
		$(".modalBg.transparent").show();
	});

	$(".alertWrap .alertListClose").click(function(){
		$(".alertWrap").hide();
		$(".modalBg.transparent").hide();
	})
});

/*	151012 quota	*/
$(function()	{
	$(".btnQuotaShowmore").click(function() {
		$(this).toggleClass("on");
		$(".openformWrap").toggleClass("on");
		$(".openformWrap .hideOption").toggle();
		$(".openformWrap .disciplineSubWrap").toggle();
	});
});

$(function()	{
	$(".quotaSubInfo").click(function() {
		$(".inputSubSelect").toggle();
	});
});


/*	151030	*/
$(function()	{
	$(".infoWindow").click(function() {
		$(".winInfoWrap").hide();
		$(this).parent().parent().find(".winInfoWrap").show();
	});
});
/*	151030	*/
$(function()	{
	$(".infoWindowSchedule").click(function() {
		$(".winInfoWrap.scheduleInfo").show();
		$(".modalBg.transparent").show();
	});
});
$(function()	{
	$(".winInfoWrap .layerClose").click(function() {
		$(this).parent().hide();
		$(".modalBg.transparent").hide();
	});
});

$(function()	{
	$(".calendarCell").hover(function() {
		$(this).addClass("over");
	}, function() {
		$(this).removeClass("over");
	});
});

$(function()	{
	if($(".nocWrap").css("display") == "block"){
		$(".allocaSheetWrap .searchBtnWrap").css("padding-top","56px");
	}
});



/*	160104	*/
/*
$(function(){

	$(".placeholderWrap .formText").focus(function(){
		$(this).parent().addClass("off");
	}).blur(function(){
		if($(this).val() == "" || $(this).val().length < 1){
			$(this).parent().removeClass("off");
		}
	});

});
*/

$(document).ready(function(){
  var fileTarget = $('.filebox .upload-hidden');

  fileTarget.on('change', function(){
    if(window.FileReader){
      var filename = $(this)[0].files[0].name;
    } 
    else {
      var filename = $(this).val().split('/').pop().split('\\').pop();
    }
    
    $(this).siblings('.upload-name').val(filename);
  });
}); 