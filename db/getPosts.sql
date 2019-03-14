select username, title, post_id 
from user_posts as up 
join auth_user as au 
on au.user_id = up.user_id
where up.title LIKE '%' || $3 || '%'