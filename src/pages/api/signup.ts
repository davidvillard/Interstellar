import { lucia } from "../../lib/auth";
import { generateId } from "lucia";
import { hash } from "@node-rs/argon2";
import { User } from "../../lib/models"; // Importa el modelo de Mongoose

import type { APIContext } from "astro";

export async function POST(context: APIContext): Promise<Response> {
	const formData = await context.request.formData();
	const username = formData.get("username");

	if (
		typeof username !== "string" ||
		username.length < 3 ||
		username.length > 31 ||
		!/^[a-z0-9_-]+$/.test(username)
	) {
		return new Response(
			JSON.stringify({
				error: "Invalid username"
			}),
			{
				status: 400
			}
		);
	}

	const password = formData.get("password");
	if (typeof password !== "string" || password.length < 6 || password.length > 255) {
		return new Response(
			JSON.stringify({
				error: "Invalid password"
			}),
			{
				status: 400
			}
		);
	}

	const passwordHash = await hash(password, {
		memoryCost: 19456,
		timeCost: 2,
		outputLen: 32,
		parallelism: 1
	});

	// Usamos Mongoose para crear el usuario
	const newUser = new User({
		_id: generateId(15),
		username,
		password_hash: passwordHash
	});

	try {
		await newUser.save();

		const session = await lucia.createSession(newUser._id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

		return new Response();
	} catch (e) {
		return new Response(
			JSON.stringify({
				error: "An unknown error occurred"
			}),
			{
				status: 500
			}
		);
	}
}
