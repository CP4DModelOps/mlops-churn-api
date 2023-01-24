# Database

## Prereqs

If installing on OpenShift, install PostgreSQL using Helm:

```sh
helm install pg bitnami/postgresql --set auth.postgresPassword=<PG_PASSWORD> --set serviceAccount.create=true --set serviceAccount.name=postgres
```

Do be able to run, you'll need to allow `postgres` service account to run privileged container in your OpenShift project:

```sh
oc adm policy add-scc-to-user privileged -z postgres -n <PROJECT>
```

## Setup DB

1. Create database:
    ```sql
    CREATE DATABASE telco;
    ```
2. Create data model:
    ```sh
    psql postgresql://postgres:<PG_PASSWORD>@localhost:5432/telco < data-model.sql
    ```
