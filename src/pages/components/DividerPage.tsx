import React from 'react';
import {P} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {Divider, Flex, Typography} from '@themestress/components';
import {TypeScript} from '@components/TypeScript';
import {samples} from '@core/samples';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const DividerPage = () => {
  return (
    <>
      <PageHeader />
      <P>Place a horizontal or vertical divider between content.</P>

      <SampleBox>
        <Flex column>
          <Typography variant="body1" fontSize="18px">
            Horizontal
          </Typography>

          <Divider />

          <Typography variant="body1" fontSize="18px">
            Divider
          </Typography>
        </Flex>

        <Flex alignItems="center">
          <Typography variant="body1" fontSize="18px">
            Vertical
          </Typography>

          <Divider vertical marginLeft={12} marginRight={12} />

          <Typography variant="body1" fontSize="18px">
            Divider
          </Typography>
        </Flex>
      </SampleBox>
      <TypeScript code={samples.divider.overview} />

      <ApiTable />
    </>
  );
};