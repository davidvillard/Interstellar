import { defineDb, defineTable, column, NOW } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    name: column.text(),
    surname: column.text(),
    gender: column.text(),
    country: column.text(),
    birthdate: column.text(),
    email: column.text({unique: true}),
    password: column.text(),
    phone: column.text(),
    created_at: column.date({ default: NOW }),
    updated_at: column.date({ default: NOW, onUpdate: NOW })

  }
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    User
  }
});
