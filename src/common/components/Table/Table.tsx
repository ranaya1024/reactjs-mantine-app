import { Badge, MultiSelect, Table, Text } from '@mantine/core';
import { useState } from 'react';
import useUsers from '@/common/hooks/useUsers';
import { User } from '@/common/types/user';
import { LoadingSkeleton } from '@/common/components';
import styles from './table.module.scss';
import dayjs from 'dayjs';

const SorteableTable = () => {
  const [sortBy, setSortBy] = useState<string[]>([]);

  // Fetching from API
  const { data: users, isLoading, isFetching, isError } = useUsers(sortBy);

  const isLoadingData = isLoading || isFetching;

  // Loading skeleton while it fetches from the api
  if(isLoadingData) {
    return <LoadingSkeleton />;
  }

  if(isError) {
    <Text size="xs">Ops, it seems the service unavailable at this moment, please try again later</Text>
  }

  if(!isLoadingData && users) {
    const rows = users.map((user: User) => (
      <Table.Tr key={user._id}>
        <Table.Td>{user.name}</Table.Td>
        <Table.Td>{user.favFood}</Table.Td>
        <Table.Td>{user.favMovie}</Table.Td>
        <Table.Td>{dayjs(user.date).format('MMMM D, YYYY h:mm A')}</Table.Td>
        <Table.Td>
          <Badge 
            variant="light" 
            color={user.status === 'Active' ? 'blue' : 'red'}
          >
            {user.status}
          </Badge>
        </Table.Td>
      </Table.Tr>
    ));
  
    return (
      <>
        <div className={styles.tableContainer}>
          <div className={styles.actionsContainer}>
            <Text size="xs">Sort by:</Text>
            <MultiSelect
              className={styles.sortByDropdown}
              placeholder='Please select a sort value'
              onChange={setSortBy}
              value={sortBy}
              data={[
                { value: 'name', label: 'Name' },
                { value: 'favFood', label: 'Favorite Food' },
                { value: 'favMovie', label: 'Favorite Movie' },
                { value: 'date', label: 'Date' },
                { value: 'status', label: 'Status' }
              ]}
              clearable
              searchable
              nothingFoundMessage="Nothing sort value found..."
            />
          </div>
        </div>

        <Table stickyHeader stickyHeaderOffset={40}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Favorite Food</Table.Th>
              <Table.Th>Favorite Movie</Table.Th>
              <Table.Th>Date</Table.Th>
              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </>
    ); 
  }
};

export default SorteableTable;