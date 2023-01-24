# Setup DB

1. Create database:
    ```sql
    CREATE DATABASE telco;
    ```
2. Create data model:
    ```sh
    psql postgresql://postgres:<PG_PASSWORD>@localhost:5432 < data-model.sql
    ```

