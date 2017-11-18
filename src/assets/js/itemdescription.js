function openNav() {
  $('.content').css('display', 'block');
    document.getElementById("contentWrapper").style.height = "600px";
    document.getElementById("charitiesWrapper").style.marginBottom = "0px";
    document.getElementById("contentWrapper").style.display = "block";
}
function openNavOne() {
    document.getElementById("contentWrapperOne").style.height = "600px";
    document.getElementById("charitiesWrapperOne").style.marginBottom = "0px";
    document.getElementById("contentWrapperOne").style.display = "block";
}
function openNavTwo() {
    document.getElementById("contentWrapperTwo").style.height = "600px";
    document.getElementById("charitiesWrapperTwo").style.marginBottom = "0px";
    document.getElementByClass("contentWrapperTwo").style.display = "block";
}
function openItemOne() {
  document.getElementById("itemOne").style.height = "600px";
  document.getElementById("itemWrapper").style.marginBottom = "80px";
  document.getElementById("itemOne").style.display = "block";
}
function closeItemOne() {
    document.getElementById("itemOne").style.height = "0";
    $('#itemOne').css('display', 'none');
}
function closeNav() {
    $('.content').css('display', 'none');
    document.getElementById("contentWrapper").style.height = "0";
    document.getElementsByClassName("content").style.display = "none";

  }
function closeNavOne() {
    document.getElementById("contentWrapperOne").style.height = "0";
}
function closeNavTwo() {
  document.getElementById("contentWrapperTwo").style.height = "0";
}
