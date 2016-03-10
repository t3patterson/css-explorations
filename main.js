var createList = function(el, examplesArray){
  examplesArray.forEach(function(ex){
    el.innerHTML +='<li><a href='+'"./'+ex.dir+'/index.html'+'">'+ex.title+'</a></li>'
  })
}


var cssSnippetsList = [
  {
    title: 'Fade On Scroll',
    dir: 'scroll-fader'
  },
  {
    title: 'Flippy Card',
    dir: 'flippy-card'
  },
  {
    title: 'Flip Switch',
    dir: 'on-off-flipswitch'
  },
  {
    title: 'Collapsible Icons',
    dir: 'collapsible-icons'
  }

]

console.log(cssSnippetsList)

var listContainer_el = document.querySelector('ul')
createList(listContainer_el, cssSnippetsList)