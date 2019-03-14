select *
from auth_user au join user_posts up
on au.user_id = up.user_id
where up.post_id=$1