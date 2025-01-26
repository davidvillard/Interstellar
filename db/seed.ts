import { db, User } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([
		{
			id: 1,
			name: 'admin',
			gender: 'M',
			country: 'ESP',
			birthday: new Date('1990-01-01'),
			email: 'admin@gmail.com',
			password: 'admin1234.!',
			phone: '123456789',
		},
	]);
}
