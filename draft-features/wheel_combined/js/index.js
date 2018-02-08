var calendarDate;
var moodArray = ['Irritated', 'Energetic', 'Confident'
, 'Couragious', 'Stressed', 'Anxious', 'Overwhelmed', 'Happy', 'Delighted', 'Fresh'
, 'Content', 'Secure', 'Peaceful', 'Sad', 'Depressed', 'Gloomy', 'Guilty'
, 'Envious', 'Jealous', 'Compassionate', 'Loving', 'Warm'
, 'Frustrated', 'Angry'
]
//when a user logs theirmood, the datapoint from the color wheel will be 
//stored in database and retrieve for render here!! in moodsLogged array
var tdy = moment().calendar('MMDDYY');
var moodIndex = 0
var moodsLogged = ['01/01/2018', ];

function createWheel() {
	for (var i = 0; i < 360; i += 15) {
		var colorWheelLine = $("<span>")
		colorWheelLine.addClass("colorWheelLine")
		colorWheelLine.css("transform", "rotate(" + i + "deg)")
		var emptyLine = $("<span>")
		emptyLine.addClass("emptyLine")
		var button = $("<button>")
		button.addClass("btn-drop select")
		button.attr("id", "d" + i)
		button.css("transform", "rotate(" + (i * (-1) - 45) + "deg)")
		var drop = $("<div>")
		drop.addClass("btn-drop-color")
		drop.css("backgroundColor", "hsl(" + i + ", 100%, 50%)")
		var moodName = $("<span>")
		moodName.addClass("moodName");
		moodName.css("transform", "rotate(" + i * (-1) + "deg)")
		moodName.css("color", "hsl(" + i + ", 100%, 50%)")
		moodName.text(moodArray[moodIndex])
		moodIndex++
		button.append(drop);
		colorWheelLine.append(emptyLine)
		colorWheelLine.append(button)
		colorWheelLine.append(moodName)
		$("#colorwheel").append(colorWheelLine)
	};
}

function createButtons() {
	for (var i = 0; i < 360; i += 15) {
		var drop = $("<button>")
		drop.addClass("btn-drop select")
		drop.attr("id", "d" + i)
		drop.addClass("btn-drop-color")
		drop.css("background", "hsl(" + i + ", 100%, 50%)")
		var moodName = $("<span>");
		moodName.addClass("moodName");
		// moodName.css("color","hsl(" + i + ", 100%, 50%)");
		moodName.text(moodArray[moodIndex])
		moodIndex++

		$("#colorwheel").append(moodName)
		$("#colorwheel").append(drop)
	};
}
createButtons()
placeInCircle("btn-drop", "colorwheel", 160)
placeInCircle("moodName", "colorwheel", 200)

function placeInCircle(ItemClass, ItemLocation, radius) {
	var radius = radius;
	var fields = $('.' + ItemClass),
		container = $('#' + ItemLocation),
		width = container.width(),
		height = container.height();
	var angle = 0,
		step = (2 * Math.PI) / fields.length;
	fields.each(function() {
		var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
		var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
		if (window.console) {
			// console.log('placeincircle---- ' +  $(this).text(), x, y);
		}
		$(this).css({
			left: x + 'px',
			top: y + 'px'
		});
		angle += step;
	});
}
/* ============================================================================== 
//  ** ON CLICK ** COLOR WHEEL 
   ============================================================================== */
var moodsLogged = [];
var activeDay;
var buttonId;
$(".select").click(function() {
	var activeDay = moment().calendar('mm' + "" + 'D' + "" + 'YYYY');
	console.log(activeDay);
	var buttonId = $(this).attr('id').substr(1, 4);
	$(".selected-color").attr('date-data', activeDay).css("background", "hsl(" + buttonId + ", 95%, 50%)");
	
	// var found = $('.day').children().attr('data-date2')
	// if (found == activeDay){
	// console.log('found' + found);
}
});


/* ==============================================================================
   CALENDAR SETUP – EST. DAYS / MONTH / YEAR
   ==============================================================================*/
var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
	monthsNum = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
	months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	moodGraph = document.getElementById('moodGraph');
// Append rows and set year
var year = moment().format('YYYY');
// console.log("year-- " + year);

for (var i = 0; i < days.length; i++) {
	moodGraph.innerHTML = moodGraph.innerHTML + ('<div class="row cal-row" id="' + months[i] + '"><p>' + months[i].substr(0, 3) + '</p><p>' + year + '</p><div class="inner"></div></div>');
	// Append columns
	for (var h = 0; h < days[i]; h++) {
		
		// var date = String(i + 1) + '/' + String(h + 1) + '/' + String(2018),
		element = document.getElementById(months[i]).getElementsByClassName('inner')[0];
		
		 calendarDate = (i + 1) + '/' + (h + 1) + '/' + 2018
		// console.log('calendarDate 1----  ' + calendarDate);
		element.innerHTML = element.innerHTML + ('<div class="day"><span data-date2="' + calendarDate + '">' + (h + 1) + '</span></div>');
	}

	// Apply active class if data matches
	// if (moodsLogged.indexOf(activeDay) != -1) {
	// 	// calendarDate = (i + 1) + (h + 1) + 2018
	// 	element.innerHTML = element.innerHTML + ('<div class="day active"><span data-date2="' + calendarDate + '">' + (h + 1) + '</span></div>');
	// } else {
	// 	// calendarDate = (i + 1) + (h + 1) + 2018
	// 	// console.log('calendarDate----  ' + calendarDate);
	// 	element.innerHTML = element.innerHTML + ('<div class="day"><span data-date2="' + calendarDate + '">' + (h + 1) + '</span></div>');
	// }

	// NOT adding ONLY retrieving data values from .day
	// ---------------------------------------------------------
	$(".day").click(function() {
		var datadate2 = $(this).children().attr('data-date2');
		console.log('datadate2 ' + datadate2);
		// important: do not change or remove until considering `datadateKids` date format!!
	});
}
// var iHateDatesInJavsScript = moment().format('MM'+'/'+'DD'+'/'+'YY');
// console.log(" date--- " + iHateDatesInJavsScript);

// Reveal animation
TweenMax.staggerFrom("h1, .row .cal-row", .5, {
	y: -15,
	opacity: 0,
	delay: .15,
	ease: SlowMo.easeOut,
	force3D: true
}, 0.05);
//