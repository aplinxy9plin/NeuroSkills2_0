/* eslint-disable jsx-a11y/media-has-caption */
import { AppShell, Grid } from '@mantine/core';
import { ChangeTheme } from '@/features/ChangeTheme';
import { MyHeader } from '@/widgets/Header/Header';
import { Logo } from '@/widgets/Logo';
import { useStyles } from './VideoPage.style';

export const VideoPage = () => {
  const { classes } = useStyles();
  return (
    <AppShell padding="md" header={<MyHeader logo={<Logo />} actionSlot={<ChangeTheme />} />}>
      <Grid>
        <Grid.Col span={12} className={classes.container}>
          <video controls width="50%">
            <source type="video/mp4" src="videos/sam.mp4" />
            <track label="Russian" kind="subtitles" srcLang="ru" src="subs/sam.vtt" default />
          </video>
        </Grid.Col>
      </Grid>
    </AppShell>
  );
};
