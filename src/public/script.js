let poleTop='\n<div class="pole-unit mono">\n  <div class="pole-top">\n    <div class="ball"></div>\n    <div class="cover"></div>\n    <div class="band"></div>\n    <div class="thin-band"></div>\n  </div>\n  <div class="pole-middle">\n    <div class="body">\n      <div class="pole"></div>\n    </div>\n  </div>\n  <div class="pole-bottom">\n    <div class="thin-band"></div>\n    <div class="band"></div>\n    <div class="cover"></div>\n    <div class="ball"></div>\n  </div>\n</div>\n';$(".loading").prepend(poleTop),$(window).on("load",(function(){$("#loading").fadeOut(500)})),gsap.registerPlugin(ScrollTrigger,CSSRulePlugin);const scroller=new LocomotiveScroll({el:document.querySelector("[data-scroll-container]"),smooth:!0,getSpeed:!0,getDirection:!0,inertia:.75});function revealUp(e,a,r=0){e.from(a,{y:100,alpha:0,ease:"back.out(3)",stagger:.1,delay:r})}ScrollTrigger.defaults({scroller:"main"}),scroller.on("scroll",ScrollTrigger.update),ScrollTrigger.scrollerProxy("main",{scrollTop(e){return arguments.length?scroller.scrollTo(e,0,0):scroller.scroll.instance.scroll.y},getBoundingClientRect:()=>({left:0,top:0,width:window.innerWidth,height:window.innerHeight})});const showAnim=gsap.from(".header",{yPercent:-100,paused:!0,duration:.5}).progress(1);if(ScrollTrigger.create({start:"top top",end:99999,onUpdate:e=>{-1===e.direction?showAnim.play():showAnim.reverse()}}),ScrollTrigger.matchMedia({"(min-width: 1200px)":()=>{function e(){ScrollTrigger.create({trigger:".gallery",animation:gsap.from(".gallery-grid > *",{scale:0,stagger:{each:.1}}),start:"top center"})}if(gsap.utils.toArray(".git").forEach((e=>{let a=e.querySelectorAll(".form_wrapper "),r=e.querySelectorAll(".form_headings > *"),t=e.querySelectorAll(".form .form_control"),o=e.querySelector(".submit");const l=gsap.timeline({scrollTrigger:{trigger:e,start:"top center"}});l.call(revealUp(l,a)),l.call(revealUp(l,r)),l.call(revealUp(l,[t,o]))})),ScrollTrigger.create({trigger:".footer",animation:gsap.from(".footer_container > *",{y:400,alpha:0,stagger:{each:.1}}),start:"10% bottom"}),gsap.from(".form_touch > *",{y:100,alpha:0,ease:"back.out(3)",stagger:.1,delay:.5}),"/"==window.location.pathname){const a=new TimelineMax({scrollTrigger:{trigger:".team",start:"10% center"}}),r=new TimelineMax({scrollTrigger:{trigger:".service",start:"10% center"}}),t=new TimelineMax({scrollTrigger:{trigger:".pricing",start:"top center"}}),o=new TimelineMax({scrollTrigger:{trigger:".testimonial",start:"10% center"}});ScrollTrigger.create({trigger:".service",start:"20% center",scrub:1,animation:gsap.fromTo(".service_icon path",{strokeDasharray:197.59107971191406,strokeDashoffset:197.59107971191406},{strokeDashoffset:0,duration:1,ease:"power3.out"},"+=.4")}),r.from(".service_category",{"--expand":0}),r.call(revealUp(r,".service_category > *:not(.service_icon)")),a.from(".team",{"--accent":"100vw",duration:1,ease:"power4.out"}),a.from(".team.a .team_container > .headline",{x:100,alpha:0},"-=.5"),a.from([".member .img_wrapper"],{y:100,alpha:0,stagger:{each:.3,ease:"power4.inOut"}}),a.call(revealUp(a,".member_name")),a.call(revealUp(a,".member_soc > *")),t.call(revealUp(t,".pricing_headings > *")),t.call(revealUp(t,[".pricing_category",".category_legend",".pricing_list > *"])),o.call(revealUp(o,".testimonial_headings > *")),o.from(".client_wrapper",{y:150,alpha:0,ease:"back.out(4)",stagger:{each:.1}}),o.call(revealUp(o,".client_profile")),o.call(revealUp(o,".client_body > *")),e()}if("/home_b.html"==window.location.pathname){const a=new TimelineMax({scrollTrigger:{trigger:".team",start:"10% center"}}),r=new TimelineMax({scrollTrigger:{trigger:".pricing",start:"top center"}}),t=new TimelineMax({scrollTrigger:{trigger:".testimonial",start:"10% center"}});ScrollTrigger.create({trigger:".about",start:"top center",animation:gsap.from([".about_headings > *",".separator-double",".about_brief",".signature"],{y:50,alpha:0,ease:"back.out(3)",stagger:{each:.1}})}),r.call(revealUp(r,".pricing_headings > *")),r.call(revealUp(r,[".pricing_category",".category_legend",".pricing_list > *"])),a.from(".team_headings > *",{y:50,alpha:0,ease:"back.out(3)",stagger:{each:.1}}),a.from(".team.a .team_container > .headline",{x:100,alpha:0},"-=.5"),a.from([".member .img_wrapper"],{y:100,alpha:0,stagger:{each:.3,ease:"power4.inOut"}}),a.call(revealUp(a,".member_name")),a.call(revealUp(a,".member_soc > *")),t.call(revealUp(t,"[class*='swiper-button']")),t.call(revealUp(t,".client_body > *")),e();gsap.utils.toArray(".slide-video").forEach((e=>{gsap.set(e.querySelector(".video-title"),{alpha:0,x:100}),gsap.set(e.querySelector(".video-play"),{scale:0}),$(e).mouseenter((function(){gsap.to(e.querySelector(".video-play"),{scale:1.3,ease:"back.out(3)"}),gsap.to(e.querySelector(".video-title"),{alpha:1,x:0,ease:"back.out(3)"})})),$(e).mouseleave((function(){gsap.to(e.querySelector(".video-play"),{scale:0,ease:"back.out(3)"}),gsap.to(e.querySelector(".video-title"),{alpha:0,x:100,ease:"back.out(3)"})}))}))}if("/home_c.html"==window.location.pathname){const a=new TimelineMax({scrollTrigger:{trigger:".team",start:"10% center"}}),r=new TimelineMax({scrollTrigger:{trigger:".service",start:"10% center"}}),t=new TimelineMax({scrollTrigger:{trigger:".shop",start:"top center"}}),o=new TimelineMax({scrollTrigger:{trigger:".gallery",start:"top center"}}),l=new TimelineMax({scrollTrigger:{trigger:".testimonial",start:"10% center"}});ScrollTrigger.create({trigger:".about",start:"top center",animation:gsap.from([".about_headings > *",".separator-double",".about_brief",".signature"],{y:50,alpha:0,ease:"back.out(3)",stagger:{each:.1}})}),r.call(revealUp(r,[".service_headings > *",".service_cards > *"])),a.from(".team_headings > *",{y:50,alpha:0,ease:"back.out(3)",stagger:{each:.1}}),a.from(".team.a .team_container > .headline",{x:100,alpha:0},"-=.5"),a.from([".member .img_wrapper"],{y:100,alpha:0,stagger:{each:.3,ease:"power4.inOut"}}),a.call(revealUp(a,".member_name")),a.call(revealUp(a,".member_soc > *")),t.call(revealUp(t,[".shop_headings > *",".shop_swiper .swiper-slide"])),l.call(revealUp(l,".testimonial_headings > *")),l.from(".client_wrapper",{y:150,alpha:0,ease:"back.out(4)",stagger:{each:.1}}),l.call(revealUp(l,".client_profile")),l.call(revealUp(l,".client_body > *")),o.call(revealUp(o,".gallery_headings > *")),e()}"/contact.html"==window.location.pathname&&(ScrollTrigger.create({trigger:".map",start:"10% center",animation:gsap.from(".map_container",{alpha:0,y:120})}),ScrollTrigger.create({trigger:".faqs",start:"10% center",animation:gsap.from([gsap.utils.toArray(".accordion > *"),gsap.utils.toArray(".faqs_headings > *")],{alpha:0,y:120,stagger:.1})})),"/services.html"==window.location.pathname&&(gsap.set(".service_item",{alpha:0,y:150}),ScrollTrigger.batch(".service_item",{interval:.1,start:"20% center",onEnter:e=>gsap.to(e,{alpha:1,y:0,stagger:.3})}));gsap.utils.toArray(".gallery_wrapper").forEach((e=>{let a=e.querySelectorAll(".view_wrapper, .view_wrapper > img");gsap.set(a,{scale:0});const r=gsap.to(a,{scale:.8,duration:.3,stagger:{each:.1,ease:"power2.inOut"}}).reversed(!0);$(e).mouseenter((()=>{r.play()})),$(e).mouseleave((()=>{r.reverse()}))}))}}),ScrollTrigger.addEventListener("refresh",(()=>scroller.update())),ScrollTrigger.refresh(),"/"==window.location.pathname||"/home_b.html"==window.location.pathname||"/home_c.html"==window.location.pathname){document.querySelectorAll(".a_link").forEach((e=>{let a=e.getAttribute("href"),r=document.querySelector(a);e.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),scroller.scrollTo(r)}))}))}const showNavbar=gsap.timeline({paused:!0});showNavbar.to([".backdrop-overlay",".navbar_nav"],{left:0,stagger:{each:.2}}),$("#menuBtn").click((function(){showNavbar.play(),$("body").css({overflow:"hidden"}),$("body").attr("aria-busy","true")})),$(".backdrop-overlay").click((function(){showNavbar.reverse(),$("body").css({overflow:"visible"}),$("body").attr("aria-busy","false")}));const ddToggle=gsap.utils.toArray(".dropdown"),ddToggleTL=gsap.timeline({paused:!0});ddToggle.forEach((e=>{$(e).mouseenter((function(){let a=e.querySelector(".dropdown-menu");gsap.set([a,a.querySelectorAll(".nav_item")],{x:-100,alpha:0}),gsap.to(a,{height:"auto",x:0,alpha:1,ease:"power3.out",duration:.7}),gsap.to(a.querySelectorAll(".nav_item"),{x:0,alpha:1,stagger:{each:.1}})})),$(e).mouseleave((function(){let a=e.querySelector(".dropdown-menu");gsap.to(a.querySelectorAll(".nav_item"),{x:-100,alpha:0,stagger:{each:.1}}),gsap.to(a,{height:0,x:-100,alpha:0,ease:"power3.out",duration:.7})}))}));const accordionItem=gsap.utils.toArray(".accordion_item");function accordionShow(e){accordionItem.forEach((a=>{$(a).index()==e?$(a).hasClass("show")?($(a).removeClass("show"),gsap.to(a.querySelector(".pgraph"),{paddingTop:"0",height:"0"}),gsap.to(a.querySelector(".icon-small"),{rotate:0}),gsap.set(a.querySelector(".icon-small"),{attr:{src:"./assets/icons/plus.svg"}})):($(a).addClass("show"),gsap.to(a.querySelector(".pgraph"),{paddingTop:"1rem",height:"auto"}),gsap.to(a.querySelector(".icon-small"),{rotate:360}),gsap.set(a.querySelector(".icon-small"),{attr:{src:"./assets/icons/minus.svg"}})):($(a).removeClass("show"),gsap.to(a.querySelector(".pgraph"),{paddingTop:"0",height:"0"}),gsap.to(a.querySelector(".icon-small"),{rotate:0}),gsap.set(a.querySelector(".icon-small"),{attr:{src:"./assets/icons/plus.svg"}}))}))}accordionItem.forEach(((e,a)=>{$(e).click((function(){accordionShow(a)}))}));
//# sourceMappingURL=script.js.map