import { defineDb, defineTable, column, NOW } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    name: column.text(),
    gender: column.text({optional: true}),
    country: column.text({optional: true}),
    birthday: column.date({optional: true}),
    email: column.text({unique: true}),
    password: column.text({optional: true}),
    phone: column.text({optional: true}),
    created_at: column.date({ default: NOW }),
    updated_at: column.date({ default: NOW, onUpdate: NOW })

  }
});

const UserRegistration = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    name: column.text(),
    gender: column.text({optional: true}),
    country: column.text({optional: true}),
    birthday: column.date({optional: true}),
    email: column.text({unique: true}),
    password: column.text({optional: true}),
    phone: column.text({optional: true}),
    created_at: column.date({ default: NOW }),
    updated_at: column.date({ default: NOW, onUpdate: NOW })

  }
});


// https://astro.build/db/config
export default defineDb({
  tables: {
    User,
    UserRegistration
  }
});
