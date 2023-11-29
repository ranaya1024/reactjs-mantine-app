import { Skeleton, Center, Title } from '@mantine/core';
import styles from './loading-skeleton.module.scss';

type Props = {
  columns?: number;
  rows?: number;
};

const columnWidths = [125, 145, 170, 130, 100];

const LoadingSkeleton = ({ columns: c = 5, rows: r = 10 }: Props) => {
  const columns = [...Array(c).keys()];
  const rows = [...Array(r).keys()];

  return (
    <Center>
      <table>
        <tbody>
        {rows.map((_, columnIndex) => (
          <tr key={columnIndex} className={styles.skeletonRow}>
            {columns.map((_2, rowIndex) => (
              <td key={rowIndex}>
                <Skeleton width={columnWidths[rowIndex]} height={16} />
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </Center>
  );
};

export default LoadingSkeleton;