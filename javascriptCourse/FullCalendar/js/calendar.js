$(function(){
    $('#calendar').fullCalendar({
        locale: 'tr',
        weekends: true,
        defaultView: 'month',
        header: {
            left: 'prev,next today',//,denemeBtn
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        columnFormat: 'dddd',
        firstDay: 1, //Haftanın ilk gününü değiştirme
        titleDormat: 'MMMM YYYY',
        buttonText: {
            month: "Ay",
            agendaWeek: "Hafta",
            agendaDay: "Gün",
            today: "Bugün"
        },
        customButtons: {
            denemeBtn: {
                text: "Buton",
                click: function(){
                    alert("Butona Basıldı..")
                }
            }
        },
        isRTL: false,
        isLTL: true,
        events: [
            {
                id:1,
                title: "Olay Örnek",
                start: new Date(2020, 3, 2, 12, 30),
                end: new Date(2020, 3, 2, 1, 30),
                allDay: true,
                backgroundColor: 'red',
                borderColor: 'blue',
                textColor: 'white',
                url: "http://www.google.com.tr"
            }
        ],
        footer: {
            left: 'title',
            center: '',
            right: 'prevYear,nextYear'
        },
        //heidht: 500,
        contentHeight: 500,
        view: {
            month: {
                titleFormat: 'MMMM YYYY'
            }
        },
        timeFormat: 'HH:mm:ss',
        selectable: true,
        //aspectRatio: 2, // En - Boy Oranı,
        editable: true,
        //eventStartEditable: true,
        //eventDurationEditable: true,
        scrollTime: '00:00',
        mintime: '07:00',
        maxTime: '18:00',
        slotDuration: '00:30',
        slotLabelFormat: 'HH:mm:ss',
        slotLabelInterval: '00:15',
        allDaySlot: false,
        allDayText: 'Tüm Gün',
        droppable: true,
        eventClick: function(event) {
            alert(event.id + '')
        },
        drop: function(date) {
            alert(date.format())
        },
        eventDrop: function (event) {
            alert('olay yeri değişti: ' + event.title + event.start.format())
        },
        dayClick: function (date) {
            alert(date.format() + " tarihine tıkladınız")
        },
        eventRender: function(event){
            return true
        },
        eventAfterAllRender: function() {
            alert("Takvim Yüklendi")
        }
    })

    $('#events .fc-event').each(function(){
        $(this).data('event', {
            title: $(this).text()
        })

        $(this).draggable({
            revert: true,
            revertDuration: 0
        })
    })
});

