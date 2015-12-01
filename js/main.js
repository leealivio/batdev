!function($,t,e,i){var n=function(i,n){this.elem=i,this.$elem=$(i),this.options=n,this.metadata=this.$elem.data("plugin-options"),this.$win=$(t),this.sections={},this.didScroll=!1,this.$doc=$(e),this.docHeight=this.$doc.height()};n.prototype={defaults:{navItems:"a",currentClass:"current",changeHash:!1,easing:"swing",filter:"",scrollSpeed:750,scrollThreshold:.5,begin:!1,end:!1,scrollChange:!1},init:function(){return this.config=$.extend({},this.defaults,this.options,this.metadata),this.$nav=this.$elem.find(this.config.navItems),""!==this.config.filter&&(this.$nav=this.$nav.filter(this.config.filter)),this.$nav.on("click.onePageNav",$.proxy(this.handleClick,this)),this.getPositions(),this.bindInterval(),this.$win.on("resize.onePageNav",$.proxy(this.getPositions,this)),this},adjustNav:function(t,e){t.$elem.find("."+t.config.currentClass).removeClass(t.config.currentClass),e.addClass(t.config.currentClass)},bindInterval:function(){var t=this,e;t.$win.on("scroll.onePageNav",function(){t.didScroll=!0}),t.t=setInterval(function(){e=t.$doc.height(),t.didScroll&&(t.didScroll=!1,t.scrollChange()),e!==t.docHeight&&(t.docHeight=e,t.getPositions())},250)},getHash:function(t){return t.attr("href").split("#")[1]},getPositions:function(){var t=this,e,i,n;t.$nav.each(function(){e=t.getHash($(this)),n=$("#"+e),n.length&&(i=n.offset().top,t.sections[e]=Math.round(i))})},getSection:function(t){var e=null,i=Math.round(this.$win.height()*this.config.scrollThreshold);for(var n in this.sections)this.sections[n]-i<t&&(e=n);return e},handleClick:function(e){var i=this,n=$(e.currentTarget),s=n.parent(),o="#"+i.getHash(n);s.hasClass(i.config.currentClass)||(i.config.begin&&i.config.begin(),i.adjustNav(i,s),i.unbindInterval(),i.scrollTo(o,function(){i.config.changeHash&&(t.location.hash=o),i.bindInterval(),i.config.end&&i.config.end()})),e.preventDefault()},scrollChange:function(){var t=this.$win.scrollTop(),e=this.getSection(t),i;null!==e&&(i=this.$elem.find('a[href$="#'+e+'"]').parent(),i.hasClass(this.config.currentClass)||(this.adjustNav(this,i),this.config.scrollChange&&this.config.scrollChange(i)))},scrollTo:function(t,e){var i=$(t).offset().top;$("html, body").animate({scrollTop:i},this.config.scrollSpeed,this.config.easing,e)},unbindInterval:function(){clearInterval(this.t),this.$win.unbind("scroll.onePageNav")}},n.defaults=n.prototype.defaults,$.fn.onePageNav=function(t){return this.each(function(){new n(this,t).init()})}}(jQuery,window,document),function($){var t={},e={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};$.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){$(this).bxSlider(n)}),this;var s={},o=this;t.el=this;var a=$(window).width(),r=$(window).height(),l=function(){s.settings=$.extend({},e,n),s.settings.slideWidth=parseInt(s.settings.slideWidth),s.children=o.children(s.settings.slideSelector),s.children.length<s.settings.minSlides&&(s.settings.minSlides=s.children.length),s.children.length<s.settings.maxSlides&&(s.settings.maxSlides=s.children.length),s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length)),s.active={index:s.settings.startSlide},s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1,s.carousel&&(s.settings.preloadImages="all"),s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin,s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin,s.working=!1,s.controls={},s.interval=null,s.animProp="vertical"==s.settings.mode?"top":"left",s.usingCSS=s.settings.useCSS&&"fade"!=s.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return s.cssPrefix=e[i].replace("Perspective","").toLowerCase(),s.animProp="-"+s.cssPrefix+"-transform",!0;return!1}(),"vertical"==s.settings.mode&&(s.settings.maxSlides=s.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(s.settings.slideSelector).each(function(){$(this).data("origStyle",$(this).attr("style"))}),d()},d=function(){o.wrap('<div class="'+s.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),s.viewport=o.parent(),s.loader=$('<div class="bx-loading" />'),s.viewport.prepend(s.loader),o.css({width:"horizontal"==s.settings.mode?100*s.children.length+215+"%":"auto",position:"relative"}),s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing");var t=f();s.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),s.viewport.parent().css({maxWidth:g()}),s.settings.pager||s.viewport.parent().css({margin:"0 auto 0px"}),s.children.css({"float":"horizontal"==s.settings.mode?"left":"none",listStyle:"none",position:"relative"}),s.children.css("width",p()),"horizontal"==s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin),"vertical"==s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin),"fade"==s.settings.mode&&(s.children.css({position:"absolute",zIndex:0,display:"none"}),s.children.eq(s.settings.startSlide).css({zIndex:s.settings.slideZIndex,display:"block"})),s.controls.el=$('<div class="bx-controls" />'),s.settings.captions&&T(),s.active.last=s.settings.startSlide==v()-1,s.settings.video&&o.fitVids();var e=s.children.eq(s.settings.startSlide);"all"==s.settings.preloadImages&&(e=s.children),s.settings.ticker?s.settings.pager=!1:(s.settings.pager&&y(),s.settings.controls&&w(),s.settings.auto&&s.settings.autoControls&&C(),(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)),c(e,h)},c=function(t,e){var i=t.find("img, iframe").length;if(0==i)return void e();var n=0;t.find("img, iframe").each(function(){$(this).one("load",function(){++n==i&&e()}).each(function(){this.complete&&$(this).load()})})},h=function(){if(s.settings.infiniteLoop&&"fade"!=s.settings.mode&&!s.settings.ticker){var t="vertical"==s.settings.mode?s.settings.minSlides:s.settings.maxSlides,e=s.children.slice(0,t).clone().addClass("bx-clone"),i=s.children.slice(-t).clone().addClass("bx-clone");o.append(e).prepend(i)}s.loader.remove(),x(),"vertical"==s.settings.mode&&(s.settings.adaptiveHeight=!0),s.viewport.height(u()),o.redrawSlider(),s.settings.onSliderLoad(s.active.index),s.initialized=!0,s.settings.responsive&&$(window).bind("resize",R),s.settings.auto&&s.settings.autoStart&&(v()>1||s.settings.autoSlideForOnePage)&&q(),s.settings.ticker&&A(),s.settings.pager&&z(s.settings.startSlide),s.settings.controls&&N(),s.settings.touchEnabled&&!s.settings.ticker&&j()},u=function(){var t=0,e=$();if("vertical"==s.settings.mode||s.settings.adaptiveHeight)if(s.carousel){var n=1==s.settings.moveSlides?s.active.index:s.active.index*m();for(e=s.children.eq(n),i=1;i<=s.settings.maxSlides-1;i++)e=n+i>=s.children.length?e.add(s.children.eq(i-1)):e.add(s.children.eq(n+i))}else e=s.children.eq(s.active.index);else e=s.children;return"vertical"==s.settings.mode?(e.each(function(e){t+=$(this).outerHeight()}),s.settings.slideMargin>0&&(t+=s.settings.slideMargin*(s.settings.minSlides-1))):t=Math.max.apply(Math,e.map(function(){return $(this).outerHeight(!1)}).get()),"border-box"==s.viewport.css("box-sizing")?t+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))+parseFloat(s.viewport.css("border-top-width"))+parseFloat(s.viewport.css("border-bottom-width")):"padding-box"==s.viewport.css("box-sizing")&&(t+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))),t},g=function(){var t="100%";return s.settings.slideWidth>0&&(t="horizontal"==s.settings.mode?s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin:s.settings.slideWidth),t},p=function(){var t=s.settings.slideWidth,e=s.viewport.width();return 0==s.settings.slideWidth||s.settings.slideWidth>e&&!s.carousel||"vertical"==s.settings.mode?t=e:s.settings.maxSlides>1&&"horizontal"==s.settings.mode&&(e>s.maxThreshold||e<s.minThreshold&&(t=(e-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==s.settings.mode&&s.settings.slideWidth>0)if(s.viewport.width()<s.minThreshold)t=s.settings.minSlides;else if(s.viewport.width()>s.maxThreshold)t=s.settings.maxSlides;else{var e=s.children.first().width()+s.settings.slideMargin;t=Math.floor((s.viewport.width()+s.settings.slideMargin)/e)}else"vertical"==s.settings.mode&&(t=s.settings.minSlides);return t},v=function(){var t=0;if(s.settings.moveSlides>0)if(s.settings.infiniteLoop)t=Math.ceil(s.children.length/m());else for(var e=0,i=0;e<s.children.length;)++t,e=i+f(),i+=s.settings.moveSlides<=f()?s.settings.moveSlides:f();else t=Math.ceil(s.children.length/f());return t},m=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=f()?s.settings.moveSlides:f()},x=function(){if(s.children.length>s.settings.maxSlides&&s.active.last&&!s.settings.infiniteLoop){if("horizontal"==s.settings.mode){var t=s.children.last(),e=t.position();b(-(e.left-(s.viewport.width()-t.outerWidth())),"reset",0)}else if("vertical"==s.settings.mode){var i=s.children.length-s.settings.minSlides,e=s.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=s.children.eq(s.active.index*m()).position();s.active.index==v()-1&&(s.active.last=!0),void 0!=e&&("horizontal"==s.settings.mode?b(-e.left,"reset",0):"vertical"==s.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,n){if(s.usingCSS){var a="vertical"==s.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";o.css("-"+s.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(o.css(s.animProp,a),o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?o.css(s.animProp,a):"ticker"==e&&(o.css("-"+s.cssPrefix+"-transition-timing-function","linear"),o.css(s.animProp,a),o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(n.resetValue,"reset",0),L()}))}else{var r={};r[s.animProp]=t,"slide"==e?o.animate(r,i,s.settings.easing,function(){D()}):"reset"==e?o.css(s.animProp,t):"ticker"==e&&o.animate(r,speed,"linear",function(){b(n.resetValue,"reset",0),L()})}},S=function(){for(var t="",e=v(),i=0;e>i;i++){var n="";s.settings.buildPager&&$.isFunction(s.settings.buildPager)?(n=s.settings.buildPager(i),s.pagerEl.addClass("bx-custom-pager")):(n=i+1,s.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+i+'" class="bx-pager-link">'+n+"</a></div>"}s.pagerEl.html(t)},y=function(){s.settings.pagerCustom?s.pagerEl=$(s.settings.pagerCustom):(s.pagerEl=$('<div class="bx-pager" />'),s.settings.pagerSelector?$(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl),S()),s.pagerEl.on("click","a",P)},w=function(){s.controls.next=$('<a class="bx-next" href="">'+s.settings.nextText+"</a>"),s.controls.prev=$('<a class="bx-prev" href="">'+s.settings.prevText+"</a>"),s.controls.next.bind("click",E),s.controls.prev.bind("click",I),s.settings.nextSelector&&$(s.settings.nextSelector).append(s.controls.next),s.settings.prevSelector&&$(s.settings.prevSelector).append(s.controls.prev),s.settings.nextSelector||s.settings.prevSelector||(s.controls.directionEl=$('<div class="bx-controls-direction" />'),s.controls.directionEl.append(s.controls.prev).append(s.controls.next),s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))},C=function(){s.controls.start=$('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>"),s.controls.stop=$('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>"),s.controls.autoEl=$('<div class="bx-controls-auto" />'),s.controls.autoEl.on("click",".bx-start",k),s.controls.autoEl.on("click",".bx-stop",M),s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop),s.settings.autoControlsSelector?$(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),H(s.settings.autoStart?"stop":"start")},T=function(){s.children.each(function(t){var e=$(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&$(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},E=function(t){s.settings.auto&&o.stopAuto(),o.goToNextSlide(),t.preventDefault()},I=function(t){s.settings.auto&&o.stopAuto(),o.goToPrevSlide(),t.preventDefault()},k=function(t){o.startAuto(),t.preventDefault()},M=function(t){o.stopAuto(),t.preventDefault()},P=function(t){s.settings.auto&&o.stopAuto();var e=$(t.currentTarget);if(void 0!==e.attr("data-slide-index")){var i=parseInt(e.attr("data-slide-index"));i!=s.active.index&&o.goToSlide(i),t.preventDefault()}},z=function(t){var e=s.children.length;return"short"==s.settings.pagerType?(s.settings.maxSlides>1&&(e=Math.ceil(s.children.length/s.settings.maxSlides)),void s.pagerEl.html(t+1+s.settings.pagerShortSeparator+e)):(s.pagerEl.find("a").removeClass("active"),void s.pagerEl.each(function(e,i){$(i).find("a").eq(t).addClass("active")}))},D=function(){if(s.settings.infiniteLoop){var t="";0==s.active.index?t=s.children.eq(0).position():s.active.index==v()-1&&s.carousel?t=s.children.eq((v()-1)*m()).position():s.active.index==s.children.length-1&&(t=s.children.eq(s.children.length-1).position()),t&&("horizontal"==s.settings.mode?b(-t.left,"reset",0):"vertical"==s.settings.mode&&b(-t.top,"reset",0))}s.working=!1,s.settings.onSlideAfter(s.children.eq(s.active.index),s.oldIndex,s.active.index)},H=function(t){s.settings.autoControlsCombine?s.controls.autoEl.html(s.controls[t]):(s.controls.autoEl.find("a").removeClass("active"),s.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},N=function(){1==v()?(s.controls.prev.addClass("disabled"),s.controls.next.addClass("disabled")):!s.settings.infiniteLoop&&s.settings.hideControlOnEnd&&(0==s.active.index?(s.controls.prev.addClass("disabled"),s.controls.next.removeClass("disabled")):s.active.index==v()-1?(s.controls.next.addClass("disabled"),s.controls.prev.removeClass("disabled")):(s.controls.prev.removeClass("disabled"),s.controls.next.removeClass("disabled")))},q=function(){if(s.settings.autoDelay>0)var t=setTimeout(o.startAuto,s.settings.autoDelay);else o.startAuto();s.settings.autoHover&&o.hover(function(){s.interval&&(o.stopAuto(!0),s.autoPaused=!0)},function(){s.autoPaused&&(o.startAuto(!0),s.autoPaused=null)})},A=function(){var t=0;if("next"==s.settings.autoDirection)o.append(s.children.clone().addClass("bx-clone"));else{o.prepend(s.children.clone().addClass("bx-clone"));var e=s.children.first().position();t="horizontal"==s.settings.mode?-e.left:-e.top}b(t,"reset",0),s.settings.pager=!1,s.settings.controls=!1,s.settings.autoControls=!1,s.settings.tickerHover&&!s.usingCSS&&s.viewport.hover(function(){o.stop()},function(){var t=0;s.children.each(function(e){t+="horizontal"==s.settings.mode?$(this).outerWidth(!0):$(this).outerHeight(!0)});var e=s.settings.speed/t,i="horizontal"==s.settings.mode?"left":"top",n=e*(t-Math.abs(parseInt(o.css(i))));L(n)}),L()},L=function(t){speed=t?t:s.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==s.settings.autoDirection?e=o.find(".bx-clone").first().position():i=s.children.first().position();var n="horizontal"==s.settings.mode?-e.left:-e.top,a="horizontal"==s.settings.mode?-i.left:-i.top,r={resetValue:a};b(n,"ticker",speed,r)},j=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}},s.viewport.bind("touchstart",O)},O=function(t){if(s.working)t.preventDefault();else{s.touch.originalPos=o.position();var e=t.originalEvent;s.touch.start.x=e.changedTouches[0].pageX,s.touch.start.y=e.changedTouches[0].pageY,s.viewport.bind("touchmove",W),s.viewport.bind("touchend",Q)}},W=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-s.touch.start.x),n=Math.abs(e.changedTouches[0].pageY-s.touch.start.y);if(3*i>n&&s.settings.preventDefaultSwipeX?t.preventDefault():3*n>i&&s.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=s.settings.mode&&s.settings.oneToOneTouch){var o=0;if("horizontal"==s.settings.mode){var a=e.changedTouches[0].pageX-s.touch.start.x;o=s.touch.originalPos.left+a}else{var a=e.changedTouches[0].pageY-s.touch.start.y;o=s.touch.originalPos.top+a}b(o,"reset",0)}},Q=function(t){s.viewport.unbind("touchmove",W);var e=t.originalEvent,i=0;if(s.touch.end.x=e.changedTouches[0].pageX,s.touch.end.y=e.changedTouches[0].pageY,"fade"==s.settings.mode){var n=Math.abs(s.touch.start.x-s.touch.end.x);n>=s.settings.swipeThreshold&&(s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto())}else{var n=0;"horizontal"==s.settings.mode?(n=s.touch.end.x-s.touch.start.x,i=s.touch.originalPos.left):(n=s.touch.end.y-s.touch.start.y,i=s.touch.originalPos.top),!s.settings.infiniteLoop&&(0==s.active.index&&n>0||s.active.last&&0>n)?b(i,"reset",200):Math.abs(n)>=s.settings.swipeThreshold?(0>n?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):b(i,"reset",200)}s.viewport.unbind("touchend",Q)},R=function(t){if(s.initialized){var e=$(window).width(),i=$(window).height();(a!=e||r!=i)&&(a=e,r=i,o.redrawSlider(),s.settings.onSliderResize.call(o,s.active.index))}};return o.goToSlide=function(t,e){if(!s.working&&s.active.index!=t)if(s.working=!0,s.oldIndex=s.active.index,0>t?s.active.index=v()-1:t>=v()?s.active.index=0:s.active.index=t,s.settings.onSlideBefore(s.children.eq(s.active.index),s.oldIndex,s.active.index),"next"==e?s.settings.onSlideNext(s.children.eq(s.active.index),s.oldIndex,s.active.index):"prev"==e&&s.settings.onSlidePrev(s.children.eq(s.active.index),s.oldIndex,s.active.index),s.active.last=s.active.index>=v()-1,s.settings.pager&&z(s.active.index),s.settings.controls&&N(),"fade"==s.settings.mode)s.settings.adaptiveHeight&&s.viewport.height()!=u()&&s.viewport.animate({height:u()},s.settings.adaptiveHeightSpeed),s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0}),s.children.eq(s.active.index).css("zIndex",s.settings.slideZIndex+1).fadeIn(s.settings.speed,function(){$(this).css("zIndex",s.settings.slideZIndex),D()});else{s.settings.adaptiveHeight&&s.viewport.height()!=u()&&s.viewport.animate({height:u()},s.settings.adaptiveHeightSpeed);var i=0,n={left:0,top:0};if(!s.settings.infiniteLoop&&s.carousel&&s.active.last)if("horizontal"==s.settings.mode){var a=s.children.eq(s.children.length-1);n=a.position(),i=s.viewport.width()-a.outerWidth()}else{var r=s.children.length-s.settings.minSlides;n=s.children.eq(r).position()}else if(s.carousel&&s.active.last&&"prev"==e){var l=1==s.settings.moveSlides?s.settings.maxSlides-m():(v()-1)*m()-(s.children.length-s.settings.maxSlides),a=o.children(".bx-clone").eq(l);n=a.position()}else if("next"==e&&0==s.active.index)n=o.find("> .bx-clone").eq(s.settings.maxSlides).position(),s.active.last=!1;else if(t>=0){var d=t*m();n=s.children.eq(d).position()}if("undefined"!=typeof n){var c="horizontal"==s.settings.mode?-(n.left-i):-n.top;b(c,"slide",s.settings.speed)}}},o.goToNextSlide=function(){if(s.settings.infiniteLoop||!s.active.last){var t=parseInt(s.active.index)+1;o.goToSlide(t,"next")}},o.goToPrevSlide=function(){if(s.settings.infiniteLoop||0!=s.active.index){var t=parseInt(s.active.index)-1;o.goToSlide(t,"prev")}},o.startAuto=function(t){s.interval||(s.interval=setInterval(function(){"next"==s.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause),s.settings.autoControls&&1!=t&&H("stop"))},o.stopAuto=function(t){s.interval&&(clearInterval(s.interval),s.interval=null,s.settings.autoControls&&1!=t&&H("start"))},o.getCurrentSlide=function(){return s.active.index},o.getCurrentSlideElement=function(){return s.children.eq(s.active.index)},o.getSlideCount=function(){return s.children.length},o.redrawSlider=function(){s.children.add(o.find(".bx-clone")).width(p()),s.viewport.css("height",u()),s.settings.ticker||x(),s.active.last&&(s.active.index=v()-1),s.active.index>=v()&&(s.active.last=!0),s.settings.pager&&!s.settings.pagerCustom&&(S(),z(s.active.index))},o.destroySlider=function(){s.initialized&&(s.initialized=!1,$(".bx-clone",this).remove(),s.children.each(function(){void 0!=$(this).data("origStyle")?$(this).attr("style",$(this).data("origStyle")):$(this).removeAttr("style")}),void 0!=$(this).data("origStyle")?this.attr("style",$(this).data("origStyle")):$(this).removeAttr("style"),$(this).unwrap().unwrap(),s.controls.el&&s.controls.el.remove(),s.controls.next&&s.controls.next.remove(),s.controls.prev&&s.controls.prev.remove(),s.pagerEl&&s.settings.controls&&s.pagerEl.remove(),$(".bx-caption",this).remove(),s.controls.autoEl&&s.controls.autoEl.remove(),clearInterval(s.interval),s.settings.responsive&&$(window).unbind("resize",R))},o.reloadSlider=function(t){void 0!=t&&(n=t),o.destroySlider(),l()},l(),this}}(jQuery),function(t){function e(){s=!1;for(var e=0;e<i.length;e++){var n=t(i[e]).filter(function(){return t(this).is(":appeared")});if(n.trigger("appear",[n]),r){var o=r.not(n);o.trigger("disappear",[o])}r=n}}var i=[],n=!1,s=!1,o={interval:250,force_process:!1},a=t(window),r;t.expr[":"].appeared=function(e){var i=t(e);if(!i.is(":visible"))return!1;var n=a.scrollLeft(),s=a.scrollTop(),o=i.offset(),r=o.left,l=o.top;return l+i.height()>=s&&l-(i.data("appear-top-offset")||0)<=s+a.height()&&r+i.width()>=n&&r-(i.data("appear-left-offset")||0)<=n+a.width()?!0:!1},t.fn.extend({appear:function(a){var r=t.extend({},o,a||{}),l=this.selector||this;if(!n){var d=function(){s||(s=!0,setTimeout(e,r.interval))};t(window).scroll(d).resize(d),n=!0}return r.force_process&&setTimeout(e,r.interval),i.push(l),t(l)}}),t.extend({force_appear:function(){return n?(e(),!0):!1}})}(jQuery),function(t){"$:nomunge";function e(e){function n(){e?r.removeData(e):u&&delete i[u]}function o(){l.id=setTimeout(function(){l.fn()},g)}var a=this,r,l={},d=e?t.fn:t,c=arguments,h=4,u=c[1],g=c[2],p=c[3];if("string"!=typeof u&&(h--,u=e=0,g=c[1],p=c[2]),e?(r=a.eq(0),r.data(e,l=r.data(e)||{})):u&&(l=i[u]||(i[u]={})),l.id&&clearTimeout(l.id),delete l.id,p)l.fn=function(t){"string"==typeof p&&(p=d[p]),p.apply(a,s.call(c,h))!==!0||t?n():o()},o();else{if(l.fn)return void 0===g?n():l.fn(g===!1),!0;n()}}var i={},n="doTimeout",s=Array.prototype.slice;t[n]=function(){return e.apply(window,[0].concat(s.call(arguments)))},t.fn[n]=function(){var t=s.call(arguments),i=e.apply(this,[n+t[0]].concat(t));return"number"==typeof t[0]||"number"==typeof t[1]?this:i}}(jQuery),$(".animatedParent").appear(),$(".animatedClick").click(function(){var t=$(this).attr("data-target");if(void 0!=$(this).attr("data-sequence")){var e=$("."+t+":first").attr("data-id"),i=$("."+t+":last").attr("data-id"),n=e;$("."+t+"[data-id="+n+"]").hasClass("go")?($("."+t+"[data-id="+n+"]").addClass("goAway"),$("."+t+"[data-id="+n+"]").removeClass("go")):($("."+t+"[data-id="+n+"]").addClass("go"),$("."+t+"[data-id="+n+"]").removeClass("goAway")),n++,delay=Number($(this).attr("data-sequence")),$.doTimeout(delay,function(){return console.log(i),$("."+t+"[data-id="+n+"]").hasClass("go")?($("."+t+"[data-id="+n+"]").addClass("goAway"),$("."+t+"[data-id="+n+"]").removeClass("go")):($("."+t+"[data-id="+n+"]").addClass("go"),$("."+t+"[data-id="+n+"]").removeClass("goAway")),++n,i>=n?!0:void 0})}else $("."+t).hasClass("go")?($("."+t).addClass("goAway"),$("."+t).removeClass("go")):($("."+t).addClass("go"),$("."+t).removeClass("goAway"))}),$(document.body).on("appear",".animatedParent",function(t,e){var i=$(this).find(".animated"),n=$(this);if(void 0!=n.attr("data-sequence")){var s=$(this).find(".animated:first").attr("data-id"),o=s,a=$(this).find(".animated:last").attr("data-id");$(n).find(".animated[data-id="+o+"]").addClass("go"),o++,delay=Number(n.attr("data-sequence")),$.doTimeout(delay,function(){return $(n).find(".animated[data-id="+o+"]").addClass("go"),++o,a>=o?!0:void 0})}else i.addClass("go")}),$(document.body).on("disappear",".animatedParent",function(t,e){$(this).hasClass("animateOnce")||$(this).find(".animated").removeClass("go")}),$(window).load(function(){$.force_appear()}),+function($){"use strict";function t(t){return this.each(function(){var i=$(this),n=i.data("bs.carousel"),s=$.extend({},e.DEFAULTS,i.data(),"object"==typeof t&&t),o="string"==typeof t?t:s.slide;n||i.data("bs.carousel",n=new e(this,s)),"number"==typeof t?n.to(t):o?n[o]():s.interval&&n.pause().cycle()})}var e=function(t,e){this.$element=$(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",$.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",$.proxy(this.pause,this)).on("mouseleave.bs.carousel",$.proxy(this.cycle,this))};e.VERSION="3.3.5",e.TRANSITION_DURATION=600,e.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},e.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},e.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval)),this},e.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},e.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),n="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(n&&!this.options.wrap)return e;var s="prev"==t?-1:1,o=(i+s)%this.$items.length;return this.$items.eq(o)},e.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},e.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&$.support.transition&&(this.$element.trigger($.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},e.prototype.next=function(){return this.sliding?void 0:this.slide("next")},e.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},e.prototype.slide=function(t,i){var n=this.$element.find(".item.active"),s=i||this.getItemForDirection(t,n),o=this.interval,a="next"==t?"left":"right",r=this;if(s.hasClass("active"))return this.sliding=!1;var l=s[0],d=$.Event("slide.bs.carousel",{relatedTarget:l,direction:a});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,o&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var c=$(this.$indicators.children()[this.getItemIndex(s)]);c&&c.addClass("active")}var h=$.Event("slid.bs.carousel",{relatedTarget:l,direction:a});return $.support.transition&&this.$element.hasClass("slide")?(s.addClass(t),s[0].offsetWidth,n.addClass(a),s.addClass(a),n.one("bsTransitionEnd",function(){s.removeClass([t,a].join(" ")).addClass("active"),n.removeClass(["active",a].join(" ")),r.sliding=!1,setTimeout(function(){r.$element.trigger(h)},0)}).emulateTransitionEnd(e.TRANSITION_DURATION)):(n.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(h)),o&&this.cycle(),this}};var i=$.fn.carousel;$.fn.carousel=t,$.fn.carousel.Constructor=e,$.fn.carousel.noConflict=function(){return $.fn.carousel=i,this};var n=function(e){var i,n=$(this),s=$(n.attr("data-target")||(i=n.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var o=$.extend({},s.data(),n.data()),a=n.attr("data-slide-to");a&&(o.interval=!1),t.call(s,o),a&&s.data("bs.carousel").to(a),e.preventDefault()}};$(document).on("click.bs.carousel.data-api","[data-slide]",n).on("click.bs.carousel.data-api","[data-slide-to]",n),$(window).on("load",function(){$('[data-ride="carousel"]').each(function(){var e=$(this);t.call(e,e.data())})})}(jQuery),+function($){"use strict";function t(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}$.fn.emulateTransitionEnd=function(t){var e=!1,i=this;$(this).one("bsTransitionEnd",function(){e=!0});var n=function(){e||$(i).trigger($.support.transition.end)};return setTimeout(n,t),this},$(function(){$.support.transition=t(),$.support.transition&&($.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(t){return $(t.target).is(this)?t.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),function($,t,e,i){"use strict";function n(e,i){return C===!0?!0:void(r[e]&&(I.before(e,l),h=1,I.sectionName&&(t.location.hash=r[e]),i?($(I.target).stop().scrollTop(a[e]),I.after(e,l)):($(I.target).stop().animate({scrollTop:a[e]},I.scrollSpeed,I.easing),$(I.target).promise().done(function(){x=!1,I.after(e,l)}))))}function s(t){if(4>t)return!1;var e=20,i=0,n=t.length-1,s;for(t.length<2*e&&(e=Math.floor(t.length/2)),s=t.length-e;n>=s;n--)i+=t[n];var o=i/e;for(i=0,n=t.length-e-1,s=t.length-2*e;n>=s;n--)i+=t[n];var a=i/e;return o>=a?!0:!1}function o(t,e){for(var i=r.length;i>=0;i--)"string"==typeof t?r[i]===t&&(c=i,n(i,e)):i===t&&(c=i,n(i,e))}var a=[],r=[],l=[],d=[],c=0,h=1,u=t.location.hash,g=!1,p,f,v=$(t).scrollTop(),m=!1,x=!1,b=!1,S,y,w,C=!1,T=[],E=(new Date).getTime(),I={section:"section",sectionName:"section-name",easing:"easeOutExpo",scrollSpeed:1100,offset:0,scrollbars:!0,axis:"y",target:"html,body",before:function(){},after:function(){},afterResize:function(){}};$.scrollify=function(i){function o(t){$(I.target).stop().animate({scrollTop:t},I.scrollSpeed,I.easing)}function u(){$(I.section).each(function(e){$(this).css("height","auto").outerHeight()<$(t).height()?($(this).css({height:$(t).height()}),d[e]=!1):($(this).css({height:$(this).height()}),d[e]=!0)})}function k(e){$(I.section).each(function(e){e>0?a[e]=parseInt($(this).offset().top)+I.offset:a[e]=parseInt($(this).offset().top),I.sectionName&&$(this).data(I.sectionName)?r[e]="#"+$(this).data(I.sectionName).replace(/ /g,"-"):r[e]="#"+(e+1),l[e]=$(this),t.location.hash===r[e]&&(c=e,g=!0)}),!0===e&&n(c,!1)}function M(){return v=$(t).scrollTop(),v>parseInt(a[c])?!1:!0}function P(){return v=$(t).scrollTop(),v<parseInt(a[c])+(l[c].height()-$(t).height())?!1:!0}$.easing.easeOutExpo=function(t,e,i,n,s){return e==s?i+n:n*(-Math.pow(2,-10*e/s)+1)+i;
},S={handleMousedown:function(){return C===!0?!0:(m=!1,void(b=!1))},handleMouseup:function(){return C===!0?!0:(m=!0,void(b&&S.calculateNearest()))},handleScroll:function(){return C===!0?!0:(p&&clearTimeout(p),void(p=setTimeout(function(){return b=!0,m===!1?!1:(m=!1,void S.calculateNearest())},200)))},calculateNearest:function(){v=$(t).scrollTop();for(var e=1,i=a.length,s=0,o=Math.abs(a[0]-v),r;i>e;e++)r=Math.abs(a[e]-v),o>r&&(o=r,s=e);(P()||M())&&(c=s,n(s,!1))},wheelHandler:function(t,e){if(C===!0)return!0;d[c]||t.preventDefault();var i=(new Date).getTime();if(e=e||-t.originalEvent.detail/3||t.originalEvent.wheelDelta/120,i-E>1300&&(T=[]),E=i,T.length>=35&&T.shift(),T.push(Math.abs(10*e)),x)return!1;if(0>e){if(c<a.length-1&&P()){if(!s(T))return!1;t.preventDefault(),c++,x=!0,n(c,!1)}}else if(e>0&&c>0&&M()){if(!s(T))return!1;t.preventDefault(),c--,x=!0,n(c,!1)}},keyHandler:function(t){return C===!0?!0:void(38==t.keyCode?c>0&&M()&&(c--,n(c,!1)):40==t.keyCode&&c<a.length-1&&P()&&(c++,n(c,!1)))},init:function(){I.scrollbars?($(t).bind("mousedown",S.handleMousedown),$(t).bind("mouseup",S.handleMouseup),$(t).bind("scroll",S.handleScroll)):$("body").css({overflow:"hidden"}),$(e).bind("DOMMouseScroll mousewheel",S.wheelHandler),$(e).bind("keydown",S.keyHandler)}},y={touches:{touchstart:{y:-1},touchmove:{y:-1},touchend:!1,direction:"undetermined"},options:{distance:30,timeGap:800,timeStamp:(new Date).getTime()},touchHandler:function(t){if(C===!0)return!0;var e;if("undefined"!=typeof t&&"undefined"!=typeof t.touches)switch(e=t.touches[0],t.type){case"touchstart":y.touches.touchstart.y=e.pageY,y.touches.touchmove.y=-1,y.options.timeStamp=(new Date).getTime(),y.touches.touchend=!1;case"touchmove":y.touches.touchmove.y=e.pageY,y.touches.touchstart.y!==y.touches.touchmove.y&&(t.preventDefault(),y.options.timeStamp+y.options.timeGap<(new Date).getTime()&&0==y.touches.touchend&&(y.touches.touchend=!0,y.touches.touchstart.y>-1&&Math.abs(y.touches.touchmove.y-y.touches.touchstart.y)>y.options.distance&&(y.touches.touchstart.y<y.touches.touchmove.y?y.up():y.down())));break;case"touchend":y.touches[t.type]===!1&&(y.touches[t.type]=!0,y.touches.touchstart.y>-1&&y.touches.touchmove.y>-1&&(Math.abs(y.touches.touchmove.y-y.touches.touchstart.y)>y.options.distance&&(y.touches.touchstart.y<y.touches.touchmove.y?y.up():y.down()),y.touches.touchstart.y=-1))}},down:function(){c<=a.length-1&&(P()&&c<a.length-1?(c++,n(c,!1)):Math.floor(l[c].height()/$(t).height())>h?(o(parseInt(a[c])+$(t).height()*h),h+=1):o(parseInt(a[c])+(l[c].height()-$(t).height())))},up:function(){c>=0&&(M()&&c>0?(c--,n(c,!1)):h>2?(h-=1,o(parseInt(a[c])+$(t).height()*h)):(h=1,o(parseInt(a[c]))))},init:function(){e.addEventListener&&(e.addEventListener("touchstart",y.touchHandler,!1),e.addEventListener("touchmove",y.touchHandler,!1),e.addEventListener("touchend",y.touchHandler,!1))}},w={handleResize:function(){clearTimeout(f),f=setTimeout(function(){u(),k(!0),I.afterResize()},50)}},I=$.extend(I,i),u(),k(!1),g===!1&&I.sectionName?t.location.hash=r[0]:n(c,!1),S.init(),y.init(),$(t).bind("resize",w.handleResize),t.addEventListener("orientationchange",w.handleResize,!1)},$.scrollify.move=function(t){return t===i?!1:void o(t,!1)},$.scrollify.instantMove=function(t){return t===i?!1:void o(t,!0)},$.scrollify.next=function(){c<r.length&&(c+=1,n(c,!1))},$.scrollify.previous=function(){c>0&&(c-=1,n(c,!1))},$.scrollify.instantNext=function(){c<r.length&&(c+=1,n(c,!0))},$.scrollify.instantPrevious=function(){c>0&&(c-=1,n(c,!0))},$.scrollify.destroy=function(){$(I.section).each(function(){$(this).css("height","auto")}),$(t).unbind("resize",w.handleResize),I.scrollbars&&($(t).unbind("mousedown",S.handleMousedown),$(t).unbind("mouseup",S.handleMouseup),$(t).unbind("scroll",S.handleScroll)),$(e).unbind("DOMMouseScroll mousewheel",S.wheelHandler),$(e).unbind("keydown",S.keyHandler),e.addEventListener&&(e.removeEventListener("touchstart",y.touchHandler,!1),e.removeEventListener("touchmove",y.touchHandler,!1),e.removeEventListener("touchend",y.touchHandler,!1)),a=[],r=[],l=[],d=[]},$.scrollify.update=function(){w.handleResize()},$.scrollify.current=function(){return l[c]},$.scrollify.disable=function(){C=!0},$.scrollify.enable=function(){C=!1},$.scrollify.isDisabled=function(){return C}}(jQuery,this,document),function(t,e,$){"use strict";$(function(){$(t).load(function(){$("#status").fadeOut(),$("#preloader").delay(350).fadeOut("slow"),$("body").delay(350).css({overflow:"visible"}).addClass("is-shown")}),$(".bxslider").bxSlider({onSlideAfter:function(t,e,i){$(".active-slide").removeClass("active-slide"),$(".bxslider > li").eq(i).addClass("active-slide")},onSliderLoad:function(){$(".bxslider > li").eq(1).addClass("active-slide")},auto:!0,autoControls:!1,speed:1e3,mode:"fade",randomStart:!0,pager:!1}),$(e).ready(function(){var e=$(".header");$(t).scroll(function(){$(this).scrollTop()>62?e.addClass("navbar-fixed-top"):e.removeClass("navbar-fixed-top")})})}),$(function(){$("a[href=#goto-down]").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}})}),$(".grid-product-list .grid-we-do-item:odd .product-content").addClass("text--right"),$(".scroll").click(function(t){t.preventDefault(),$.scrollify.move($(this).attr("href"))}),$(".process-list li a").on("click",function(t){$(".process-list .active").removeClass("active"),$(this).addClass("active"),t.preventDefault()});var i=$("body");$(t).on("scroll",function(){var t=$(this).scrollTop();$(".our-process-holder section").each(function(){var e=$(this),n=e.attr("data-section-name");if(e.offset().top<t){var s=i.attr("class").split(" ").pop();i.removeClass(s),i.addClass(n)}else i.removeClass(n),i.attr("class")||i.addClass("is-shown")})}),jQuery(".section-innovation a").hover(function(){jQuery(this).parents(".section-innovation").addClass("section-overlay")},function(){jQuery(this).parents(".section-innovation").removeClass("section-overlay")}),jQuery(".carousel-indicators li:first-child").click(function(){jQuery(".transition-border").css("left","0")}),jQuery(".carousel-indicators li:nth-child(2)").click(function(){jQuery(".transition-border").css("left","49%")}),jQuery(".carousel-indicators li:nth-child(3)").click(function(){jQuery(".transition-border").css("left","98%")}),$("#carousel-example-generic").carousel({interval:4e3}),$("#carousel-example-generic").on("slid.bs.carousel",function(){var t=$(this).find(".carousel-indicators .active");0===t.index()&&$(".transition-border").css("left","0"),1===t.index()&&$(".transition-border").css("left","49%"),2===t.index()&&$(".transition-border").css("left","98%")})}(window,document,jQuery);