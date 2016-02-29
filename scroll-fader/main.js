var faderScrollBox  = document.querySelector('.fader-js')

// Create ad-hoc style sheet and append to head
var style = document.createElement("style");
document.head.appendChild(style);
var sheet = style.sheet

//Create Function to set style-rule (ie.  :after 'top' property's value )
var setPseudoStyle = function (pos){
  var styleRule = '.fader-js:after {'
      styleRule += 'display: block;'
      styleRule += 'position: absolute;'
      styleRule += 'content: "";'
      styleRule += 'left: 0px;'
      styleRule += 'height: 100%;'
      styleRule += 'width: 100%;'
      styleRule += 'background: linear-gradient(rgba(255,255,255,1) 0%, rgba(255,255,255,0), rgba(255,255,255,1));'
      styleRule += 'top:'+pos+'px;'
  
  return styleRule
}

// insert the style-rule on ad-hoc style sheet 
sheet.insertRule(setPseudoStyle(faderScrollBox.scrollTop),0)

//add event listener to scroll event on our fader-scroll-box
//   (event will fire when we scroll on that div)
faderScrollBox.addEventListener('scroll', function(){

  //remove the old style-rule from the ad-hoc stylesheet
  sheet.removeRule(0)
  
  //create the new rule and set 'top' with updated scroll position relative 
  // to top of element
  var newRule = setPseudoStyle(parseInt( faderScrollBox.scrollTop ), 0)

  //insert new style-rule into ad-hoc stylesheet
  sheet.insertRule(newRule,0)


})


