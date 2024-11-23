import { db, User } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([
		{
			id: 1,
			name: 'Ana',
			surname: 'Doe',
			gender: 'F',
			country: 'US',
			birthdate: '1990-01-01',
			email: 'ana@gmail.com',
			password: '123456',
			phone: '1234567890',
		},
		{
			id: 2,
			name: 'John',
			surname: 'Smith',
			gender: 'M',
			country: 'UK',
			birthdate: '1985-02-15',
			email: 'john.smith@example.com',
			password: 'password123',
			phone: '0987654321',
		},
		{
			id: 3,
			name: 'Maria',
			surname: 'Garcia',
			gender: 'F',
			country: 'ES',
			birthdate: '1995-07-20',
			email: 'maria.garcia@example.com',
			password: 'maria2020',
			phone: '6123456789',
		},
		{
			id: 4,
			name: 'David',
			surname: 'Lee',
			gender: 'M',
			country: 'CN',
			birthdate: '1992-11-10',
			email: 'david.lee@china.com',
			password: 'david1992',
			phone: '13912345678',
		},
		{
			id: 5,
			name: 'Sophia',
			surname: 'Martinez',
			gender: 'F',
			country: 'MX',
			birthdate: '1988-03-05',
			email: 'sophia.martinez@example.com',
			password: 'sophia2024',
			phone: '5534123456',
		},
	]);
}
