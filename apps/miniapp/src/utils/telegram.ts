export const getUserAvatarUrl = (username: string, size = 160) =>
	`https://t.me/i/userpic/${size}/${username}.jpg`
