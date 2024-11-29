import { db, User } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([
		{
			id: 1,
			name: 'admin',
			email: 'admin@gmail.com',
			password: 'admin1234.!',
		},
	]);
}
