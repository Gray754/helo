INSERT INTO auth_user (username, password)
VALUES (${username}, ${password})
RETURNING *