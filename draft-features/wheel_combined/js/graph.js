//when a user logs theirmood, the datapoint from the color wheel will be 
var moodsLogged = [];
var blah;

//stored in database and retrieve for render here!! in moodsLogged array

var tdy = moment().calendar('MMDDYY');
    
    console.log('today index---- ' + tdy);

    $(".selected-color").click(function(){
      var activeSelection = $(this).addClass('active');
      moodsLogged.push(activeSelection);
    });

  console.log('moodsLogged index.html ---- ' + moodsLogged);


// console.log(
//   '------------------ days / month (2018) '  +' :: '+ 
//   moment("2018-01", "YYYY-MM").daysInMonth() +' :: '+
//   moment("2018-02", "YYYY-MM").daysInMonth() +' :: '+
//   moment("2018-03", "YYYY-MM").daysInMonth() +' :: '+
//   moment("2018-04", "YYYY-MM").daysInMonth() +' :: '+
//   moment("2018-05", "YYYY-MM").daysInMonth() +' :: '+
//   moment("2018-06", "YYYY-MM").daysInMonth() +' :: '+
//   moment("2018-07", "YYYY-MM").daysInMonth() +' :: '+
//   moment("2018-08", "YYYY-MM").daysInMonth() +' :: '+
//   moment("2018-09", "YYYY-MM").daysInMonth() +' :: '+
//   moment("2018-10", "YYYY-MM").daysInMonth() +' :: '+
//   moment("2018-11", "YYYY-MM").daysInMonth() +' :: '+
//   moment("2018-12", "YYYY-MM").daysInMonth() +' :: ');


var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    monthsNum = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'], 
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    moodGraph = document.getElementById('moodGraph');

// Append rows
// var month = moment().format('MM');
//     console.log("month-- " + month);
// var day = moment().format('DD');
//     console.log("day-- " + day);
var year = moment().format('YYYY');
    console.log("year-- " + year);


for (var i = 0; i < days.length; i++) {
  moodGraph.innerHTML = moodGraph.innerHTML + ('<div class="row cal-row" id="' + months[i] + '"><p>' 
    + days[i].substr(0, 3) + '</p><p>' + year + '</p><div class="inner"></div></div>');
  
  // Append columns
  for (var h = 0; h < days[i]; h++) {
    var date = String(i + 1) + '/' + String(h + 1) + '/' + String(2018),
      element = document.getElementById(months[i]).getElementsByClassName('inner')[0];
      // console.log('date----- ' + date);
      blah = ((i + 1)  +'/'+ (h+1) +'/'+  2018)
      element.innerHTML = element.innerHTML + ('<div class="day"><span id="' + blah + '">' + (h + 1) + '</span></div>');
    // Apply active class if data matches
    // if (moodsLogged.indexOf(date) != -1) {
    //   blah = ((i + 1)  +'/'+ (h+1) +'/'+  2018)
    //   element.innerHTML = element.innerHTML + ('<div class="day active"><span id="' + blah + '">' + (h + 1) + '</span></div>');
    // } else {
    //   blah = ((i + 1)  +'/'+ (h+1)+'/'+ 2018)
    //   // console.log('blah----  ' + blah);
    //   element.innerHTML = element.innerHTML + ('<div class="day"><span id="' + blah + '">' + (h + 1) + '</span></div>');
    // }
  }

  $(".day").click(function(){
    var datadate2 = $(this).children();
    var datadateKids = datadate2.attr('id');
    console.log('clicked calendar day dot!! __WOOTT!!------   ' + datadateKids);
  });
}

// var dateformat = moment().format('MM'+'/'+'DD'+'/'+'YY');
// console.log(" date--- " + dateformat);
 tdy = moment().calendar('MMDDYY');
    console.log('today graph---- ' + tdy);

if (tdy)
  // Reveal animation
  TweenMax.staggerFrom("h1, .row .cal-row", .5, {
    y: -15,
    opacity: 0,
    delay: .15,
    ease: SlowMo.easeOut,
    force3D: true
  }, 0.05);