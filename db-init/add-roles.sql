CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    "createdAt" TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS "UserRoles" (
    "userId" INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    "roleId" INTEGER NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
    PRIMARY KEY ("userId", "roleId")
);

INSERT INTO roles (id, type, description, "createdAt", "updatedAt") VALUES
    (1, 'user', 'Пользователь', NOW(), NOW()),
    (2, 'staff', 'Персонал', NOW(), NOW()),
    (3, 'admin', 'Администратор', NOW(), NOW())
ON CONFLICT (id) DO NOTHING;