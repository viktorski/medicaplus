if($.browser.mozilla||$.browser.opera){document.removeEventListener("DOMContentLoaded",$.ready,false);document.addEventListener("DOMContentLoaded",function(){$.ready()},false)}$.event.remove(window,"load",$.ready);$.event.add( window,"load",function(){$.ready()});$.extend({includeStates:{},include:function(url,callback,dependency){if(typeof callback!='function'&&!dependency){dependency=callback;callback=null}url=url.replace('\n','');$.includeStates[url]=false;var script=document.createElement('script');script.type='text/javascript';script.onload=function(){$.includeStates[url]=true;if(callback)callback.call(script)};script.onreadystatechange=function(){if(this.readyState!="complete"&&this.readyState!="loaded")return;$.includeStates[url]=true;if(callback)callback.call(script)};script.src=url;if(dependency){if(dependency.constructor!=Array)dependency=[dependency];setTimeout(function(){var valid=true;$.each(dependency,function(k,v){if(!v()){valid=false;return false}});if(valid)document.getElementsByTagName('head')[0].appendChild(script);else setTimeout(arguments.callee,10)},10)}else document.getElementsByTagName('head')[0].appendChild(script);return function(){return $.includeStates[url]}},readyOld:$.ready,ready:function(){if($.isReady) return;imReady=true;$.each($.includeStates,function(url,state){if(!state)return imReady=false});if(imReady){$.readyOld.apply($,arguments)}else{setTimeout(arguments.callee,10)}}});
$.include('js/superfish.js')
$.include('js/floatdialog.js')
$.include('js/coin-slider.js')
$.include('js/FF-cash.js')
$.include('js/jquery.easing.1.3.js')
$.include('js/jquery.cycle.all.min.js')
$.include('js/jquery.color.js')
$.include('js/jquery.backgroundPosition.js')
$(function(){
	if($.browser.msie){$.include('js/jquery.hoverIntent.js')}
	if($('.fixedtip').length||$('.clicktip').length||$('.normaltip').length)$.include('js/jquery.atooltip.pack.js')
	if($('#datepicker').length)$.include('js/jquery-ui-1.8.16.custom.min.js')
	if($('#form1').length)$.include('js/forms.js')
	if($('.top1').length||$('.layouts-nav li a').length)$.include('js/scrollTop.js')
	if($('.kwicks').length)$.include('js/kwicks-1.5.1.pack.js')
	if($("#thumbs").length){$.include('js/jquery.galleriffic.js')}
	if($(".lightbox-image").length || $(".lightbox-video").length)$.include('js/jquery.prettyPhoto.js')
	if($("#twitter").length)$.include('js/jquery.twitter.js')
	if($('#countdown_dashboard').length)$.include('js/jquery.lwtCountdown-1.0.js')
	if($('.tabs').length)$.include('js/tabs.js')
	$('.top1').click(function(e){$('html,body').animate({scrollTop:'0px'},800);return false})
	$('.layouts-nav li a').click(function(){var offset=$($(this).attr('href')).offset();$('html,body').animate({scrollTop:offset.top},800);return false})
	$("#accordion dt.active").next("#accordion dd").css({display:'block'});
	$("#accordion dt").click(function(){$(this).next("#accordion dd").slideToggle("slow").siblings("#accordion dd:visible").slideUp("slow");$(this).toggleClass("active");$(this).siblings("#accordion dt").removeClass("active");return false});
	$(".slideDown dt").click(function(){$(this).toggleClass("active").parent(".slideDown").find("dd").slideToggle()})
	$(".code a.code-icon").toggle(function(){$(this).find("i").text("-");$(this).next("div.grabber").slideDown()},function(){$(this).find("i").text("+");$(this).next("div.grabber").slideUp()})
	$(".button").click(function(){Cufon.refresh()})
})

function onAfter(curr, next, opts, fwd){var $ht=$(this).height();$(this).parent().animate({height:$ht})}