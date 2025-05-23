/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CodeSnippet, EmptyState } from '@backstage/core-components';
import { useTranslationRef } from '@backstage/frontend-plugin-api';
import { userSettingsTranslationRef } from '../../translation';

const EXAMPLE = `import { createPlugin } from '@backstage/core-plugin-api';

export default createPlugin({
  id: 'plugin-name',
  featureFlags: [{ name: 'enable-example-feature' }],
});
`;

export const EmptyFlags = () => {
  const { t } = useTranslationRef(userSettingsTranslationRef);

  return (
    <EmptyState
      missing="content"
      title={t('featureFlags.emptyFlags.title')}
      description={t('featureFlags.emptyFlags.description')}
      action={
        <>
          <Typography variant="body1">
            {t('featureFlags.emptyFlags.action.title')}
          </Typography>
          <CodeSnippet
            text={EXAMPLE}
            language="typescript"
            showLineNumbers
            highlightedNumbers={[6]}
            customStyle={{ background: 'inherit', fontSize: '115%' }}
          />
          <Button
            variant="contained"
            color="primary"
            href="https://backstage.io/docs/api/utility-apis"
          >
            {t('featureFlags.emptyFlags.action.readMoreButtonTitle')}
          </Button>
        </>
      }
    />
  );
};
