

import {
  ActionButton,
  ActionWrapper,
} from '@Module/core/imports/useColumns';
import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
import { eventType } from '@Module/website/types/event';
import { TableColumnsType } from 'antd';
import { createColumnsValues } from '@Module/core/utils/fn/createColumnsValues';
import ActionDeleteButton from '@Module/core/components/DataTable/ActionDeleteButton';
import { useDeleteEvent } from '@Module/website/apis/event';
import { VscVmActive } from 'react-icons/vsc';
import { AiTwotoneStop } from 'react-icons/ai';

export const useColumns = () => { 
  const { setObjectToEdit } = useObjectToEdit();
  const { mutate } = useDeleteEvent();
  const handleDelete = (record: eventType) => {
    setObjectToEdit(record);
    mutate({ id: record?.id });
  };

  const columnKeys: (keyof eventType)[] = ['id', 'name' , 'maxUserCountRegistered'];
  const columnsValues = createColumnsValues<eventType>(columnKeys);

  const columns: TableColumnsType<eventType> = [
    ...columnsValues,
    {
      title:"isActive",
      align:"center",
      render: (_text, record) => {
        return record.isActive ? <VscVmActive/> : <AiTwotoneStop/>
      }
    },
    {
      title:"Match Count",
      align:"center",
      render: (_text, record) => {
        return record._count.matches
      }
    },
    {
      render: (_text, record, index) => {
        return (
          <ActionWrapper index={index}>
            <ActionDeleteButton action={() => handleDelete(record)} />
            <ActionButton  record={record} />
          </ActionWrapper>
        );
      },
    },
  ];

  return columns;
};



