import { HoverCard, Text, Group, Title } from '@mantine/core';

function HoverCardTooltip() {
  return (
    <Group justify="left">
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Title order={1}>Ruben Anaya Coding Test</Title>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Multiple sort values can be selected and consider that the order matters, ie selecting status and secondly the name, it will sort by Active and then alphabetically by name. (Date is generated randomly each time the sort value is changed)
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}

export default HoverCardTooltip;