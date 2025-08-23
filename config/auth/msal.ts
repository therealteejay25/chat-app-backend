import dotenv from 'dotenv';
import { ConfidentialClientApplication, Configuration, LogLevel } from '@azure/msal-node';

dotenv.config();

const config: Configuration = {
    auth: {
        clientId: process.env.AZURE_CLIENT_ID || "7b866e8e-0028-4809-8ac8-fde9b80a7aa9",
        authority: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}`,
        clientSecret: process.env.AZURE_CLIENT_SECRET,

    },
    system: {
        loggerOptions: {
           logLevel: LogLevel.Info,
           piiLoggingEnabled: false,
           loggerCallback: () => {},
        },
    },
};

export const msalClient = new ConfidentialClientApplication(config);

export const msalScopes = ["openid", "profile", "email", "offline_access"];