exports.seed = function (knex) {

  return knex('class').truncate()
    .then(function () {
     
      return knex('class').insert([
      {
          classname:'PE',
      type:'exser size',
      start_time:'7:00am',
      duration:'3 hours',
      intensity_level:'hard',
      location:'gem',
      current_number_of_registered_attendees:4,
      max_class_size:100,
      },
{
  classname:'yeogu',
          type:'streching',
          start_time:'1:00pm',
          duration:'1 hours',
          intensity_level:'easy',
          location:'mall',
          current_number_of_registered_attendees:1,
          max_class_size:20,
          },   
{
              classname:'kerati',
              type:'fighting',
              start_time:'9:00',
              duration:'2 hours',
              intensity_level:'mediem',
              location:'dejo',
              current_number_of_registered_attendees:4,
              max_class_size:30,
              }               
      ]);
    });
};