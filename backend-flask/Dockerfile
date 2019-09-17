FROM python:alpine3.10

WORKDIR /app

COPY src/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY src/app.py /app

RUN pip install -r requirements.txt

ENTRYPOINT ["python"]

CMD ["app.py"]