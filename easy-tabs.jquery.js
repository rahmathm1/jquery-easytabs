$.fn.easyTabs = function() {
    $(this).find('li').bind('click',function() {
		$('.easytab-tab').removeClass('active');
		$(this).addClass('active');
		$(".easytab-content").hide();
		var selected_tab = $(this).find('a').attr('href');
		$(selected_tab).show();
		return false;
	});
    return this;
}
    
