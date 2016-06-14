var promoteToTop = function(e){
  currentSelection.innerHTML = e.target.innerHTML
}

var returnClassName = function(currentClassName, originalVal){
  return currentClassName.indexOf("showing") === -1 ?
    originalVal + ' showing':
    originalVal 
}

var showMenu = function(){
  dropDownEl.className = returnClassName(dropDownEl.className,'drop-down')
  linesIndicator.className = returnClassName(linesIndicator.className, 'lines-indicator')

}

var qs = function(el){ return document.querySelector(el) }
var qsAll = function(el){ return document.querySelectorAll(el) }



var dropDownEl = qs('.drop-down')
var dropDownOps = qsAll('.drop-down li')
var currentSelection = qs('.current-selection .selection-text')
var linesIndicator = qs('.lines-indicator')

dropDownEl.addEventListener('click', showMenu)

dropDownOpsArr = [].slice.call(dropDownOps)
dropDownOpsArr.forEach(function(li){
  li.addEventListener("click", promoteToTop)
})