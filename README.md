# MLOps Workshop - Customer Churn API

Backend APIs of customer churn demo application for MLOps workshop.

## Initial database setup

### Prereqs

- `psql`: [PostgreSQL CLI](https://www.postgresql.org/download/)
- `helm`: [Helm CLI](https://helm.sh/docs/intro/install/)
- `oc`: [OpenShift CLI](https://mirror.openshift.com/pub/openshift-v4/x86_64/clients/oc/latest)

Log in to your OpenShift cluster:

```sh
oc login --token=${OCP_TOKEN} --server=${OCP_SERVER}
```

### Deploy PostgreSQL

**Note**: you can deploy any instance of PostgreSQL (managed or self-managed), this section will cover deployment of self-managed PostgreSQL on OpenShift (below helm install also works on any Kubernetes environment).

1. Install PostgreSQL using Helm:
    ```sh
    helm install pg bitnami/postgresql --set auth.postgresPassword=${PG_PASSWORD} --set serviceAccount.create=true --set serviceAccount.name=postgres
    ```
2. If running on OpenShift, you'll need to allow `postgres` service account to run privileged container in your OpenShift project:
    ```sh
    oc adm policy add-scc-to-user privileged -z postgres -n ${OCP_PROJECT}
    ```

### Setup DB

1. Access your PostgreSQL deployment from your local machine using `oc port-forward`:
    ```sh
    oc login --token=${OCP_TOKEN} --server=${OCP_SERVER}
    oc project ${OCP_PROJECT}``
    oc port-forward pg-postgresql-0 5432:5432
    ```
2. On another terminal, open a PostgreSQL connection:
    ```sh
    psql postgresql://postgres:${PG_PASSWORD}@localhost:5432
    ```
3. Create database:
    ```sql
    CREATE DATABASE telco;
    ```
4. Create data model:
    ```sh
    psql postgresql://postgres:${PG_PASSWORD}@localhost:5432/telco < data-model.sql
    ```
