const db = require('./db-Config');

module.exports = {
    insert,
    update,
    remove,
  findclass
};

function findclass(){
    return db('class').select(  
        'id',        
        'classname',
        'type',
        'start_time',
        'duration',
        'intensity_level',
        'location',
        'current_number_of_registered_attendees',
        'max_class_size',
 );
}


function insert(newclass) {
    return db("class")
        .insert(newclass, "id")
        .then(([id]) => {
            return findById(id);
        });
}
function update(id, changes) {
    return db('class')
      .where({ id })
      .update(changes, '*');
  }

function remove(id) { 
    return db('class')
    .where('id', Number(id))
    .del();
}

function findById(id) {
    return db("class").where({ id }).first();
}
