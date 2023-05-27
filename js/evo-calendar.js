$(document).ready(function() {
    $('#calendar').evoCalendar({
        settingName: settingValue
    })
  })
  
  $('#calendar').evoCalendar({
    'eventHeaderFormat': 'MM dd',
    'todayHighlight': true,
    'format': 'MM dd, yyyy',
    'eventDisplayDefault': true,
    'sidebarDisplayDefault': false,
  
  });
  
  
  // add multiple events
  $('#calendar').evoCalendar('addCalendarEvent', [
    {
      id: 'kNybja6',
      name: 'Open Mic',
      description: 'Every first Friday of the month in the clay yurt at Frog Farm. Free and open to all.',
      date: 'May 5, 2023',
      type: 'holiday',
    },
    {
      id: 'kNybja6',
      name: 'PYO Fridays',
      description: 'PYO (Pick your own) herbs and berries every Friday at Frog Farm from 10am-4pm. Baskets are provided.',
      date: 'May 5, 2023',
      type: 'birthday',
    },
    {
      id: 'kNybja6',
      name: 'PYO Fridays',
      description: 'PYO (Pick your own) herbs and berries every Friday at Frog Farm from 10am-4pm. Baskets are provided.',
      date: 'May 12, 2023',
      type: 'birthday',
    },
    {
      id: 'kNybja6',
      name: 'PYO Fridays',
      description: 'PYO (Pick your own) herbs and berries every Friday at Frog Farm from 10am-4pm. Baskets are provided.',
      date: 'May 19, 2023',
      type: 'birthday',
    },
    {
      id: 'kNybja6',
      name: 'PYO Fridays',
      description: 'PYO (Pick your own) herbs and berries every Friday at Frog Farm from 10am-4pm. Baskets are provided.',
      date: 'May 26, 2023',
      type: 'birthday',
    },
    {
      id: 'kNybja6',
      name: 'Farmers Market',
      description: 'Visit us at the Siskiyou Valley Farmers Market from 8am-2pm.',
      date: 'May 7, 2023',
      type: 'event',
    },
    {
      id: 'kNybja6',
      name: 'Farmers Market',
      description: 'Visit us at the Siskiyou Valley Farmers Market from 8am-2pm.',
      date: 'May 14, 2023',
      type: 'event',
    },
    {
      id: 'kNybja6',
      name: 'Farmers Market',
      description: 'Visit us at the Siskiyou Valley Farmers Market from 8am-2pm.',
      date: 'May 21, 2023',
      type: 'event',
    },
    {
      id: 'kNybja6',
      name: 'Farmers Market',
      description: 'Visit us at the Siskiyou Valley Farmers Market from 8am-2pm.',
      date: 'May 28, 2023',
      type: 'event',
    },
    {
      id: 'kNybja6',
      name: 'Seaweed Harvesting',
      description: 'Learn about harvesting seaweed and its uses at Orion Beach from 11am-1pm. Sliding scale $5-20.',
      date: 'May 13, 2023',
      type: 'holiday',
    },
    {
      id: 'kNybja6',
      name: 'Infosession',
      description: 'Learn about the Herbalist Certification Program in July. Infosession will be held in the apothecary at Frog Farm and open to the public.',
      date: 'May 20, 2023',
      type: 'holiday',
    },
    {
      id: 'kNybja6',
      name: 'Seaweed Harvesting',
      description: 'Learn about harvesting seaweed and its uses at Orion Beach from 11am-1pm. Sliding scale $5-20.',
      date: 'May 27, 2023',
      type: 'holiday',
    },
    {
      id: 'kNybja6',
      name: 'CSA Farmstand Opens',
      description: 'Join us on Saturday, June 3rd from 10am-2pm RAIN OR SHINE! Veggies available include early spring\'s usual suspects, lots of leafy greens, radishes or flavor packed arugula. Farm stand will stay open until 3.',
      date: 'June 3, 2023',
      type: 'birthday',
    },
    {
      id: 'kNybja6',
      name: 'Open Mic',
      description: 'Every first Friday of the month in the clay yurt at Frog Farm. Free and open to all.',
      date: 'June 2, 2023',
      type: 'holiday',
    },
    {
      id: 'kNybja6',
      name: 'PYO Fridays',
      description: 'PYO (Pick your own) herbs and berries every Friday at Frog Farm from 10am-4pm. Baskets are provided.',
      date: 'June 2, 2023',
      type: 'birthday',
    },
    {
      id: 'kNybja6',
      name: 'PYO Fridays',
      description: 'PYO (Pick your own) herbs and berries every Friday at Frog Farm from 10am-4pm. Baskets are provided.',
      date: 'June 9, 2023',
      type: 'birthday',
    },
    {
      id: 'kNybja6',
      name: 'PYO Fridays',
      description: 'PYO (Pick your own) herbs and berries every Friday at Frog Farm from 10am-4pm. Baskets are provided.',
      date: 'June 16, 2023',
      type: 'birthday',
    },
    {
      id: 'kNybja6',
      name: 'PYO Fridays',
      description: 'PYO (Pick your own) herbs and berries every Friday at Frog Farm from 10am-4pm. Baskets are provided.',
      date: 'June 23, 2023',
      type: 'birthday',
    },
    {
      id: 'kNybja6',
      name: 'PYO Fridays',
      description: 'PYO (Pick your own) herbs and berries every Friday at Frog Farm from 10am-4pm. Baskets are provided.',
      date: 'June 30, 2023',
      type: 'birthday',
    },
    {
      id: 'kNybja6',
      name: 'Farmers Market',
      description: 'Visit us at the Siskiyou Valley Farmers Market from 8am-2pm.',
      date: 'June 4, 2023',
      type: 'event',
    },
    {
      id: 'kNybja6',
      name: 'Farmers Market',
      description: 'Visit us at the Siskiyou Valley Farmers Market from 8am-2pm.',
      date: 'June 11, 2023',
      type: 'event',
    },
    {
      id: 'kNybja6',
      name: 'Farmers Market',
      description: 'Visit us at the Siskiyou Valley Farmers Market from 8am-2pm.',
      date: 'June 18, 2023',
      type: 'event',
    },
    {
      id: 'kNybja6',
      name: 'Farmers Market',
      description: 'Visit us at the Siskiyou Valley Farmers Market from 8am-2pm.',
      date: 'June 25, 2023',
      type: 'event',
    },
    {
      id: 'kNybja6',
      name: 'Infosession',
      description: 'Learn about the risks of GMOs and how you can support Siskiyou Valley Farmers in their fight against GMOs. 7pm in the clay yurt at Frog Farm.',
      date: 'June 10, 2023',
      type: 'holiday',
    },
    {
      id: 'kNybja6',
      name: 'Infosession',
      description: 'Learn about the Herbalist Certification Program in July. Infosession will be held in the apothecary at Frog Farm and open to the public. Applications close July 1.',
      date: 'June 17, 2023',
      type: 'holiday',
    },
    {
      id: 'kNybja6',
      name: 'Seaweed Harvesting',
      description: 'Learn about harvesting seaweed and its uses at Orion Beach from 11am-1pm. Sliding scale $5-20.',
      date: 'June 24, 2023',
      type: 'holiday',
    },
    {
      id: 'kNybja6',
      name: 'Applications Closed',
      description: 'Applications closed for herbalist certification program.',
      date: 'July 1, 2023',
      type: 'event',
    },
    {
      id: 'kNybja6',
      name: 'Herbalist Program',
      description: 'Program runs from July 28 to August 16, M-F from 11am-3pm in the apothecary at Frog Farm. Students receive certification at the completion of the course.',
      date: 'July 28, 2023',
      type: 'holiday',
      badge: '20-day event', // Event badge (optional)
    },
    {
      id: 'kNybja6',
      name: 'Infosession',
      description: '',
      date: 'May 20, 2023',
      type: 'event',
    },
    {
      id: 'kNybja6',
      name: 'Infosession',
      description: '',
      date: 'May 20, 2023',
      type: 'event',
    },
    {
      id: 'kNybja6',
      name: 'Infosession',
      description: '',
      date: 'May 20, 2023',
      type: 'event',
    },
  ]);
  
  // calendarEvents
  $('#calendar').evoCalendar('calendarEvents', {
    'calendarEvents': [
        {
          id: '4hducye', // Event's id (required, for removing event)
          description: 'Seaweed Harvesting Session at Orion Beach', // Description of event (optional)
          badge: '1-day event', // Event badge (optional)
          date: new Date('05 24, 2023'), // Date of event
          type: 'event', // Type of event (event|holiday|birthday)
          color: '#63d867', // Event custom color (optional)
          everyYear: true // Event is every year (optional)
        }
      ]
  });
  