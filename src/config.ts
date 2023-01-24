
import fs from 'fs';
import dotenv from 'dotenv';

// If application, loads config from mounted Config Map and Secret
const cmPath = `${process.cwd()}/config/configmap/.env`;
const secretPath = `${process.cwd()}/config/secret/.env`;
if (fs.existsSync(cmPath)) dotenv.config({ path: cmPath });
if (fs.existsSync(secretPath)) dotenv.config({ path: secretPath });

// Cloud Pak for Data (CPD) config
export const cpdConfig = {
    username: process.env.CPD_USERNAME ?? '',
    password: process.env.CPD_PASSWORD ?? '',
    baseUrl: process.env.CPD_BASE_URL ?? '',
    model: process.env.CPD_MODEL ?? '',
    version: process.env.CPD_MODEL_VERSION
};

// PostgreSQL config
export const pgConfig = {
    url: process.env.PG_URL ?? ''
};
