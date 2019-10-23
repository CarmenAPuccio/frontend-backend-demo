FROM python:3.8-alpine3.10

WORKDIR /app

RUN apk add --update --no-cache \
		gcc \
        libc-dev \
        linux-headers

COPY src/requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY src/app.py /app
COPY src/app.ini /app

RUN addgroup -g 1000 -S uwsgi && \
    adduser -u 1000 -S uwsgi -G uwsgi

USER uwsgi

EXPOSE 5000

ENTRYPOINT ["uwsgi", "--ini", "app.ini"]

HEALTHCHECK --interval=30s --timeout=5s --retries=5 --start-period=30s CMD wget --quiet --tries=1 --spider http://127.0.0.1:5000 || exit 1
