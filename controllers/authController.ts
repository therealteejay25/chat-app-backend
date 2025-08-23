import crypto from 'crypto';
import  { msalClient, msalScopes } from "../config/auth/msal.ts"

export async function login (req, res, next) {
    try {
        const state = crypto.randomBytes(16).toString('hex');
        const nonce = crypto.randomBytes(16).toString('hex');
        req.session.authState = state;
        req.session.authNonce = nonce;

        const authUrl = await msalClient.getAuthCodeUrl({
            scopes: msalScopes,
            redirectUri: process.env.AZURE_REDIRECT_URL || "https://localhost:3000/redirect",
            responseMode: "query",
            state,
            nonce,
        });
        res.redirect(authUrl);
    } catch (error) {
        next(error);
    }
}

export async function redirect (req, res, next) {
    try {
        const { code, state } = req.query;
        if(!code || !state || state !== req.session.authState) {
            return res.status(400).send('Invalid state or code...');
        }

        const token = await msalClient.acquireTokenByCode({
            code,
            scopes: msalScopes,
            redirectUri: process.env.AZURE_REDIRECT_URL || "https://localhost:3000/redirect",
        });

        const claims = token.idTokenClaims || {};
        const user
    }
}