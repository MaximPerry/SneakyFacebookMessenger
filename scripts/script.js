
 onload = () => {
    const loadstart = () => {
        webview.style.opacity = "1";
        //document.getElementById("chatIcons").style.display = "initial";
        webview.openDevTools();
        webview.insertCSS("._mh6, ._wsc {width: 70%;} ._4_j5 {display:none !important;} ._1t2u {width: 60% !important; border-left: none !important;} html {overflow: hidden !important;} ._1enh img {display: none !important;} ._1enh {min-width:30px !important;} ._4sp8 {font-size: initial !important;} ._43by._43by {color: black !important; background-color: white !important;} ._hh7 {background-color: white !important;} ._4ld- div {background-image: none !important;} ._4rv4 {display: none !important;} ._fl2{display:none !important;} ._20bp{text-align: left !important;} ._4rv3 {position: fixed; left: 0px; bottom: 0px; width: 100% !important; border-top: 3px solid #E4E5E9 !important; background-color: white !important; font-size: 10pt !important; height: 100px !important;} #u_0_0{height: calc(100%-100px) !important;} body{max-height: 60% !important;} ._4u-c, ._1wfr, ._9hq {max-height: 80% !important; text-alignpm n: left;} ._673w{display: none !important;} ._1t_q {display: none !important;} ._3oh-, ._58nk {font-size: 10pt !important; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;} ._o46, ._3i_m, ._3058 { clear: right; float: initial !important; } ._43by {background-color: #DCF2FA !important;} ._nd_:last-of-type ._3058._52mr:last-of-type, ._nd_:last-of-type ._3058._52mr:last-of-type ._4br2, ._nd_:last-of-type ._3058:last-of-type ._52mr, ._nd_:last-of-type ._3058:last-of-type ._52mr ._4br2 { background-color: #DCF2FA !important; border-radius: initial !important;} ._43by._43by {background-color: #DCF2FA !important; text-align: right !important;} ._29_7:first-of-type ._3058._52mr:first-of-type { background-color: #BFE9F9 !important; } ._29_7:last-of-type ._3058._52mr:last-of-type {background-color: #BFE9F9 !important;} ._4p9w ._36ic, ._36ic { display: none !important;} ");

        //webview.executeJavaScript("function triggerclick(elem, event) {var clickEvent = new Event(event); elem.dispatchEvent(clickEvent);}");
        //var emoji = webview.getElementsByClassName("_30yy _5s2p _39bk")[0];
        
    }
    webview.addEventListener('did-finish-load', loadstart)
    //webview.addEventListener('did-stop-loading', loadstop)
}

const webview = document.querySelector('webview');
//webview.style.display = "none";