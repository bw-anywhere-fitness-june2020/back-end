exports.up = function (knex) {
    return knex.schema
      .createTable("userpermisions", (tbl) => {
        tbl.increments();
  
        tbl.string("name", 128).notNullable().unique();
      })
      .createTable("users", (tbl) => {
        tbl.increments();
  
        tbl.string("username", 128).notNullable().unique().index();
        tbl.string("password", 256).notNullable();
  
        tbl
          .integer("userpermisions")
          .unsigned()
          .references("userpermisions.id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
      .createTable("class", (tbl) => {
        tbl.increments();
        tbl.string("classname", 128);
        tbl.string("type", 128);
        tbl.string("start_time", 128);
        tbl.string("duration", 128);
        tbl.string("intensity_level", 128);
        tbl.string("class_location", 128);
        tbl.integer("current_number_of_registered_attendees");
        tbl.integer("max_class_size");
      }); 
  };

    
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("class")
    .dropTableIfExists("userpermisions")
    .dropTableIfExists("users")
    
  };
  