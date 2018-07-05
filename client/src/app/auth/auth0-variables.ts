interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'ATZbNR7oQHv2i-iJKCOhsov0f3ZI907M',
  domain: 'projetsprint.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
