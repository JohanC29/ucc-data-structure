# etapa de producción
FROM nginx:1.13.12-alpine
COPY /docs/.vuepress/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]