## API Report File for "@backstage/plugin-auth-backend-module-onelogin-provider"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { BackendFeature } from '@backstage/backend-plugin-api';
import { OAuthAuthenticator } from '@backstage/plugin-auth-node';
import { OAuthAuthenticatorResult } from '@backstage/plugin-auth-node';
import { PassportOAuthAuthenticatorHelper } from '@backstage/plugin-auth-node';
import { PassportProfile } from '@backstage/plugin-auth-node';
import { SignInResolverFactory } from '@backstage/plugin-auth-node';

// @public (undocumented)
const authModuleOneLoginProvider: BackendFeature;
export default authModuleOneLoginProvider;

// @public (undocumented)
export const oneLoginAuthenticator: OAuthAuthenticator<
  PassportOAuthAuthenticatorHelper,
  PassportProfile
>;

// @public
export namespace oneLoginSignInResolvers {
  const usernameMatchingUserEntityName: SignInResolverFactory<
    OAuthAuthenticatorResult<PassportProfile>,
    | {
        dangerouslyAllowSignInWithoutUserInCatalog?: boolean | undefined;
      }
    | undefined
  >;
}
```
