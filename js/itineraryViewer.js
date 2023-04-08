

var timetable = new Timetable(document.getElementById('timetable'));

timetable.addEvent('English Class', 'Room 101', new Date(2023, 3, 24, 9, 0), new Date(2023, 3, 24, 11, 0), 1, null);

timetable.draw();

