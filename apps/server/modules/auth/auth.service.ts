import jwt from 'jsonwebtoken'

import { Service } from 'common'
import { env } from 'shared'

@Service({ name: 'authService' })
export class AuthService {
	async login(userId: number) {
		return jwt.sign({ userId }, env.JWT_SECRET, { expiresIn: '1h' })
	}
}
