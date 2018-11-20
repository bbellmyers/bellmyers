import React, { Component } from 'react';
import NavItem from '../NavItem/NavItem';
import subitems from './navitems.json';
import './LeftNav.css';


class LeftNav extends Component {

  constructor() {
    super();
    this.contentIframe = null;
    this.butterflyImg = null;
    this.navmenu = null;

    this.subitems = subitems;

    this.state = {
      selectedItem: 0,
      selectedSubitem: 0
    };
  }

  render() {
    return (
      <ul>
        {this.subitems.map((items, i) => {
          return (
            <li key={i}>
              <NavItem items={items}
                open={i === this.state.selectedItem ? true : false} index={i}
                selected={this.state.selectedSubitem}
                selectedHandler={(index, subindex) => {
                  this.setState({ selectedItem: index, selectedSubitem: subindex});
                }}/></li>
          );
        })}
      </ul>
    );
  }

  componentWillReceiveProps(props) {
    if (props.match) {
      console.log(props.match);
    }
  }

  // syncNavContent() {
  //   var args = getArgs();
  //   var page = "home";
  //   if (args["page"]) page = args["page"];
  //   loadContent(page);
  // }

  // showNavMenu(show) {
  //   if (this.navmenu) {
  //    this.navmenu = document.getElementById("leftnav");
  //   }
  //  this.navmenu.style.display = show ? "block" : "none";

  //     if (show) {
  //         var maskEl = document.createElement("div");
  //         maskEl.id = "navmask";
  //         maskEl.onclick = function() {
  //             return showNavMenu(false);
  //         }
  //         document.body.appendChild(maskEl);
  //     } else {
  //         var maskEl = document.getElementById("navmask");
  //         if (maskEl) {
  //             document.body.removeChild(maskEl);
  //         }
  //     }
  // }

  // loadContent(page) {
  //   if (!this.contentIframe) {
  //     tbis.contentIframe = document.getElementById("contentIframe");
  //   }

  //   if (this.butterflyImg) {
  //     this.butterflyImg = document.getElementById("butterflyImg");
  //   }

  //   if (page == "home") {
  //     this.butterflyImg.src = "images/logo_butterfly_home.gif";
  //   } else {
  //     this.butterflyImg.src = "images/logo_butterfly.gif";
  //   }

  //   switch (page) {
  //     case "nav1": case "nav1-1":
  //       setLocation(page, 'illustration.html?category=childcolor');
  //       break;
  //     case "nav1-2":
  //       setLocation(page, 'illustration.html?category=childbw');
  //       break;
  //     case "nav1-3":
  //       setLocation(page, 'illustration.html?category=editcolor');
  //       break;
  //     case "nav1-4":
  //       setLocation(page, 'illustration.html?category=editbw');
  //       break;
  //     case "nav1-5":
  //       setLocation(page, 'illustration.html?category=digital');
  //       break;
  //     case "nav1-6":
  //       setLocation(page, 'illustration.html?category=design');
  //       break;
  //     case "nav1-7":
  //       setLocation(page, 'animation.html');
  //       break;
  //     case "nav2":case "nav2-1":
  //             setLocation(page, 'welcome.html');
  //             break;
  //         case "nav2-2":
  //       setLocation(page, 'aboutme.html#top');
  //       break;
  //     case "nav2-3":
  //       setLocation(page, 'aboutme.html#experience');
  //       break;
  //     case "nav2-4":
  //       setLocation(page, 'aboutme.html#education');
  //       break;
  //     case "nav2-5":
  //       setLocation(page, 'aboutme.html#awards');
  //       break;
  //     case "nav3": case "nav3-1":
  //       setLocation(page, 'clients.html');
  //       break;
  //     case "nav3-2":
  //       setLocation(page, 'working.html');
  //       break;
  //     case "nav3-3":
  //       setLocation(page, 'working.html');
  //       break;
  //     case "nav4": case "nav4-1":
  //       setLocation(page, 'contactme.html');
  //       break;
  //     case "home": default:
  //             setLocation("nav1-1", 'illustration.html?category=childcolor');
  //       break;
  //   }
  // }

  // setLocation(page, location) {
  //   var menu = page.split("-")[0];
  //   // submenu
  //   var menuOpen = document.getElementById(menu + "-open");
  //   if (menuOpen) {
  //     var menuClosed = document.getElementById(menu + "-closed");
  //     menuOpen.style.display = "block";
  //     menuClosed.style.display = "none";
  //   }

  //   if (this.selectedNav) {
  //    this.selectedNav.submenu.className = "";
  //   }

  //   var submenu = document.getElementById("sub" + page);
  //   if (submenu) {
  //     submenu.className = "selected";
  //    this.selectedNav = {};
  //    this.selectedNav.submenu = submenu;
  //   }

  //   var s = this.contentIframe.src.split("/");
  //   var frameLoc = s[s.length-1];
  //   if (frameLoc != location) {
  //     this.contentIframe.src=location;
  //   }
  // }

  // getArgs() {
  //   var args = new Object();
  //   var query = location.search.substring(1);
  //   var pairs = query.split("&");
  //   for (var i=0; i< pairs.length; i++) {
  //     var pos = pairs[i].indexOf("=");
  //     if (pos == -1) continue;
  //     var argname = pairs[i].substring(0,pos);
  //     var value = pairs[i].substring(pos+1);
  //     args[argname] = unescape(value);
  //     // alert(argname + ":" + args[argname]);
  //   }
  //   return args;
  // }

  // getToken() {
  //   var hash = document.location.hash;
  //   var token = null;
  //   if (hash && hash.length > 1) {
  //     token = hash.split("#")[1];
  //   }
  //   return token;
  // }

  // handleSubmenu(link) {
  //     var page = link.href.split("=")[1];
  //     loadContent(page);
  //     return false;
  // }

  // getZoomHref(sample) {
  //   var href = "zoomPane.html?fullSrc=" + sample.full;
  //     if (sample.title) href += "&title=" + sample.title;
  //     if (sample.subtitle) href += "&subtitle=" + sample.subtitle;
  //     if (sample.comments) href += "&comments=" + sample.comments;

  //   return encodeURI(href);
  // }

  // zoomZoom(fullSrc) {
  //   document.getElementById("shadow").style.display = "block";
  //     var zoom = document.getElementById("zoomZoomImage");
  //     zoom.addEventListener("load", function() {
  //         if (zoom.width > window.innerWidth) {
  //             var reducedWidth = window.innerWidth - 30 + "px";
  //             zoom.style.width = reducedWidth;
  //         }
  //         // still too big
  //         if (zoom.height > window.innerHeight) {
  //             zoom.style.width = null;
  //             var reducedHeight = window.innerHeight - 30 + "px";
  //             zoom.style.height = reducedHeight;
  //         }
  //         zoom.style.visibility = "visible";
  //     });
  //     zoom.src = fullSrc;
  // }

  // closeShadow() {
  //   document.getElementById("shadow").style.display = "none";
  //     var zoom = document.getElementById("zoomZoomImage");
  //   zoom.src = "images/spacer.gif";
  //     zoom.removeAttribute("style");
  //     zoom.style.visibility = "hidden";
  // }

}

export default LeftNav;
