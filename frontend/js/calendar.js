import Calendar from 'color-calendar';
import $ from "jquery";

$(document).ready(function () {
  new Calendar({
    id: '#color-calendar',
    calendarSize: 'small',
    //primaryColor: '#1a237e',
    // layoutModifiers: 'month-align-left',
    // theme: 'glass',
    // headerColor: 'rgb(0, 102, 0)',
    // headerBackgroundColor: 'black',
    // weekdaysColor: 'based on theme',
    // weekdayDisplayType: 'short',
    // monthDisplayType: 'long',
    // startWeekday: 0,
    // fontFamilyHeader: 'based on theme',
    // fontFamilyWeekdays: 'based on theme',
    // fontFamilyBody: 'based on theme',
    // dropShadow: 'based on theme',
    // border: 'based on theme',
    // borderRadius: '0.5rem',
    // disableMonthYearPickers: false,
    // disableDayClick: false,
    // disableMonthArrowClick: false
  })
});