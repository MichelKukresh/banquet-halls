// server {
//   listen 80;

//   server_name api.kukreshma.students.nomoredomains.sbs;

//   location / {
//             proxy_pass http://localhost:3000;
//             proxy_http_version 1.1;
//             proxy_set_header Upgrade $http_upgrade;
//             proxy_set_header Connection 'upgrade';
//             proxy_set_header Host $host;
//             proxy_cache_bypass $http_upgrade;
//   }



// location /media/ {

//  root /home/kukreshma/media/;
//             }

// listen 443 ssl; # managed by Certbot
// ssl_certificate /etc/letsencrypt/live/kukreshma.students.nomoredomains.sbs/fullchain.pem; # managed by Certbot
// ssl_certificate_key /etc/letsencrypt/live/kukreshma.students.nomoredomains.sbs/privkey.pem; # managed by Certbot
// include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
// ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot



// }