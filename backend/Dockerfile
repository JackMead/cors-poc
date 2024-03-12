FROM python

RUN pip install poetry

COPY pyproject.toml poetry.lock ./

RUN poetry install

COPY src src

ENTRYPOINT ["poetry", "run", "flask", "run", "--host", "0.0.0.0"]