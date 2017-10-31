$(function() {
  //go to the latest tab, if it exists:
  // var currentTab = localStorage.getItem('currentTab');
  // console.log(currentTab);
  // if (currentTab) {
  //   $('a[href="'+currentTab+'"]').tab('show');
  // } 
  
  // //for bootstrap 3 use 'shown.bs.tab' instead of 'shown' in the next line
  $('a[data-toggle="tab"]').on('click', function (e) {
    $("#county-input").val('')
    Plotly.purge('myDiv');
    $("#info-text").hide()
    //save the latest tab; use cookies if you like 'em better:
    //localStorage.setItem('currentTab', $(e.target).attr('href'));
    //window.location.reload();
  });
});