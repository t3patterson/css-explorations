var dataVisible_el  = document.querySelector('.fade-in-box > .data-visible')
var scrollTopPos = dataVisible_el.scrollTop

dataVisible_el.className += " ui items"

// Create New Stylesheet
var style = document.createElement("style");
document.head.appendChild(style);
var sheet = style.sheet

//Create Function to Set Fader
var resetPseudoStyle = function (pos){
  return `.fader-js:after {
  display: block;
  position: absolute;
  content: "";
  left: 0px;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(255,255,255,1) -20%, rgba(255,255,255,0), rgba(255,255,255,1));
  top: ${pos}px;
  `
}

sheet.insertRule(resetPseudoStyle(0),0)


var bigHTMLString  = ''
for (var i = 0; i < dataSet.length ; i++){
  var u = dataSet[i]
  var userDescTemplate = `<div class="item">
                       <div class="image">
                         <img src="${u.pictures.medium}">
                       </div>
                       <div class="content">
                         <a class="header" href="#">${dataSet[i].name}</a>
                         <div class="meta">
                           <span>About Me</span>
                         </div>
                         <div class="description">
                           <p>${u.about}</p>
                         </div>
                         <div class="extra">
                           ${u.email}
                         </div>
                       </div>
                     </div>
                     <hr />`

   bigHTMLString += userDescTemplate
}


dataVisible_el.addEventListener('scroll', function(){
  var after = window.getComputedStyle(dataVisible_el, ':after')
  // dataVisible_el.dataset.scrollpos = parseInt( dataVisible_el.scrollTop )

  sheet.removeRule(0)
  var newRule = resetPseudoStyle(parseInt( dataVisible_el.scrollTop ))
  sheet.insertRule(newRule,0)


})

dataVisible_el.innerHTML = bigHTMLString

