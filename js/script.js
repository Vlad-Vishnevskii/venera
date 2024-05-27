let calA = new Calendar({
  id: '#color-calendar',
  theme: 'glass',
  //weekdayType: 'long-upper',
  // monthDisplayType: 'long',
  calendarSize: 'small',
  layoutModifiers: ['custom-calendar'],
  eventsData: [
    {
      id: 1,
      name: 'French class',
      start: '2024-05-16T06:00:00',
      end: '2024-05-16T20:30:00',
    },
    {
      id: 2,
      name: 'Blockchain 101',
      start: '2024-05-18T10:00:00',
      end: '2024-05-18T11:30:00',
    },
    {
      id: 3,
      name: 'Cheese 101',
      start: '2024-05-21T10:00:00',
      end: '2024-05-21T11:30:00',
    },
    {
      id: 4,
      name: 'Cheese 101',
      start: '2024-05-24T10:00:00',
      end: '2024-05-24T11:30:00',
    },
    {
      id: 5,
      name: 'Cheese 101',
      start: '2024-05-26T10:00:00',
      end: '2024-05-26T11:30:00',
    },
  ],
  dateChanged: (currentDate, events) => {
    console.log('date change', currentDate, events);
  },
  monthChanged: (currentDate, events) => {
    console.log('month change', currentDate, events);
  },
});
