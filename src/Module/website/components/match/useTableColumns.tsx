

import {
  ActionButton,
  ActionWrapper,
} from '@Module/core/imports/useColumns';
import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
import { matchType } from '@Module/website/types/match';
import { TableColumnsType } from 'antd';
import ActionDeleteButton from '@Module/core/components/DataTable/ActionDeleteButton';
import { useDeleteMatch } from '@Module/website/apis/match';
import { ImageColumn } from '@Module/core/components/DataTable/ColumnsImage';

export const useColumns = () => { 
  const { setObjectToEdit } = useObjectToEdit();
  const { mutate } = useDeleteMatch();
  const handleDelete = (record: matchType) => {
    setObjectToEdit(record);
    mutate({ id: record?.id });
  };


  const columns: TableColumnsType<matchType> = [
    {
      title:"event",
      align:"center",
      render:(_text , record) =>{
        return record.event.name
      }
    },
    ImageColumn('firstTeamImage'),
    {
      title:"firstTeamName",
      align:"center",
      render:(_text , record) =>{
        return record.firstTeamName
      }
    },
    ImageColumn('secondTeamImage'),
    {
      title:"secondTeamName",
      align:"center",
      render:(_text , record) =>{
        return record.secondTeamName
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



