exports.seed = function (knex) {

  return knex('class').truncate()
    .then(function () {
     
      return knex('class').insert([
        {
          id: 1,
          classname: "Yoga",
          type: "stretching",
          start_time: "2:00pm",
          duration: "1 hour",
          intensity_level: "easy",
          class_location: "mall",
          current_number_of_registered_attendees: 1,
          max_class_size: 20
      },
      {
          id: 2,
          classname: "Pilates",
          type: "stretching",
          start_time: "1:00pm",
          duration: "1 hour",
          intensity_level: "medium",
          class_location: "mall",
          current_number_of_registered_attendees: 1,
          max_class_size: 20
      },
      {
          id: 3,
          classname: "Karate",
          type: "martial arts",
          start_time: "9:00am",
          duration: "2 hours",
          intensity_level: "medium",
          class_location: "dojo",
          current_number_of_registered_attendees: 4,
          max_class_size: 30
      },
      {
          id: 4,
          classname: "Weightlifting",
          type: "strength",
          start_time: "2:00pm",
          duration: "1 hour",
          intensity_level: "difficult",
          class_location: "mall",
          current_number_of_registered_attendees: 1,
          max_class_size: 20
      },
      {
          id: 5,
          classname: "Running",
          type: "cardio",
          start_time: "5:00pm",
          duration: "30 minutes",
          intensity_level: "medium",
          class_location: "outdoors",
          current_number_of_registered_attendees: 1,
          max_class_size: 20
      }          
      ]);
    });
};