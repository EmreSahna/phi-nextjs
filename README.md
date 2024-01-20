## Phi Haber NextJS Repo

.env config:
```env
API_URL=https://phihaber.com/strapi/graphql
IMG_URL=https://phihaber.com/strapi
```

Nginx config:

```nginx
upstream strapi {
  server 127.0.0.1:1337;
}

server {
  listen 443 ssl;

  ssl_certificate /etc/letsencrypt/live/phihaber.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/phihaber.com/privkey.pem;
  include /etc/letsencrypt/options-ssl-nginx.conf;
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

  server_name phihaber.com www.phihaber.com;

  location / {
    proxy_pass http://localhost:3000;
  }

  location /strapi {
    rewrite ^/strapi/?(.*)$ /$1 break;
    proxy_pass http://strapi;
    proxy_http_version 1.1;
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Forwarded-Server $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Host $http_host;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_pass_request_headers on;
  }
}

server {
  listen 80;
  server_name phihaber.com www.phihaber.com;

  if ($host = www.phihaber.com) {
    return 301 https://$host$request_uri;
  }

  if ($host = phihaber.com) {
    return 301 https://$host$request_uri;
  }

  return 404;
}
```

## Routes

- [Website](https://phihaber.com/) - WebUI
- [Admin Panel](https://phihaber.com/strapi/admin) - Admin panel for manage content.
- [GraphQL Playground](https://phihaber.com/strapi/graphql) - Testing GraphQL queries.
