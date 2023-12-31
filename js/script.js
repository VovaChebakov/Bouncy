//</MENU BURGER>==========================================================================================================================================================
$('wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
})
//</MENU BURGER>==========================================================================================================================================================

//</IBG FOR IMG>==========================================================================================================================================================
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}

ibg();
//</IBG FOR IMG>==========================================================================================================================================================

//</FILTER>===============================================================================================================================================================
$('.filter__item').click(function (event) {
	var i=$(this).data('filter');

	if (i == 1) {
		$('.portfoio__column').show();
	} else {
		$('.portfoio__column').hide();
		$('.portfoio__column.f_'+i).show();
	}

	$('.filter__item').removeClass('active');
	$(this).addClass('active');

	return false;
});
//</FILTER>===============================================================================================================================================================

//</SCROLL>===============================================================================================================================================================
const headerButton = document.querySelector('.header__button');
const about = document.querySelector('.about');

headerButton.addEventListener('click', () => {
	about.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth",
	});
});
//</SCROLL>===============================================================================================================================================================

//</PROGRESS BAR>=========================================================================================================================================================
const progressBarF = document.querySelector('.progress-bar__inner');
const progressBarS = document.querySelector('.progress-bar__after');
const progressBarT = document.querySelector('.progress-bar__mey');

function updateProgressBarF(value) {
	progressBarF.style.width = value + '%';
}
function updateProgressBarS(value) {
	progressBarS.style.width = value + '%';
}
function updateProgressBarT(value) {
	progressBarT.style.width = value + '%';
}

updateProgressBarF(80);
updateProgressBarS(65);
updateProgressBarT(75);
//</PROGRESS BAR>=========================================================================================================================================================

//</INVISE>===============================================================================================================================================================
const mapText = document.querySelector('.map__text');
const mapMap = document.querySelector('.map__map')

mapMap.addEventListener('mouseover', () => {
	mapText.style.cssText = `opacity: 0;`;
});
mapMap.addEventListener('mouseout', () => {
	mapText.style.cssText = `opacity: 1;`;
});
//</INVISE>===============================================================================================================================================================