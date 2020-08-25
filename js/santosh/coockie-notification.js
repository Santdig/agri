$(document).ready(function(){
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    });
});

if (localStorage.getItem(‘cookieSeen’) != ‘shown’) {
  $(‘.cookie-banner’).delay(2000).fadeIn();
  localStorage.setItem(‘cookieSeen’,’shown’)
};
$(‘.close’).click(function() {
  $(‘.cookie-banner’).fadeOut();
})
