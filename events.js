function fetchElement(id){
  return document.getElementById(id);
}
fetchElement("meter-input").addEventLister("input" , function(){
    alert("it works");
});
