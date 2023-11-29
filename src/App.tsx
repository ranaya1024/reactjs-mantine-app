import {QueryClient, QueryClientProvider} from 'react-query';
import { HoverCardTooltip, Table } from '@/common/components';
import { 
  IconBrandGithubFilled, 
  IconBrandLinkedin
} from '@tabler/icons-react';
import styles from './app.module.scss';
import { Anchor, Button } from '@mantine/core';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.pageContainer}>
        <HoverCardTooltip />
        <Table />
        <div className={styles.footerContainer}>
          <Anchor
            href="https://github.com/ranaya1024"
            target="_blank"
          >
            <Button
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
              leftSection={<IconBrandGithubFilled size={20} />}
            >
              Github
            </Button>
          </Anchor>
          <Anchor
            href="https://www.linkedin.com/in/ruben-anaya-93209ab0/"
            target="_blank"
          >
            <Button
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
              leftSection={<IconBrandLinkedin size={30} />}
            >
              Linkedin
            </Button>
          </Anchor>
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App;
