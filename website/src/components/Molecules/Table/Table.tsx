import React from 'react';
import { Table as TableAnt } from 'antd';

import { getIdComponent } from 'utils/getIdComponent';

// components
import Text from 'components/Atoms/Text';
import Title from 'components/Atoms/Title';

// styles
import { StyleContent } from './style';

interface IProps {
  title: string;
  description: string;
  items: {
    id: string;
    property: string;
    description: string;
    type: string;
    default: string;
  }[];
}

const Table = ({ items, description, title }: IProps) => {
  const columns = [
    {
      title: 'Property',
      dataIndex: 'property',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      render: (text: any) => <Text variant="ROBOT_14_28_400" html={text} />,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      render: (text: any) => (
        <Text color="#c41d7f" variant="ROBOT_14_28_400">
          {text}
        </Text>
      ),
    },
    {
      title: 'Default',
      dataIndex: 'default',
    },
  ];

  return (
    <StyleContent>
      {/* title */}
      {title && (
        <>
          <br />
          <br />
          <Title id={getIdComponent(title)} variant="ROBOT_24_28_500" isLink>
            {title}
          </Title>
        </>
      )}
      {/* description */}
      {description && <Text variant="ROBOT_14_28_400" html={description} />}
      {!!items.length && (
        <TableAnt
          rowKey="id"
          pagination={false}
          columns={columns}
          dataSource={items}
        />
      )}
    </StyleContent>
  );
};

export default Table;
