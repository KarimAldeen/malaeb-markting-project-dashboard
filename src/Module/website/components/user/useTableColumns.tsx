

// import {
//   ActionButton,
//   ActionWrapper,
// } from '@Module/core/imports/useColumns';
// import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
import { userType } from '@Module/website/types/user';
import { TableColumnsType } from 'antd';
import { createColumnsValues } from '@Module/core/utils/fn/createColumnsValues';
// import ActionDeleteButton from '@Module/core/components/DataTable/ActionDeleteButton';
// import { useDeleteUser } from '@Module/website/apis/user';

export const useColumns = () => { 
  // const { setObjectToEdit } = useObjectToEdit();
  // const { mutate } = useDeleteUser();
  // const handleDelete = (record: userType) => {
    // setObjectToEdit(record);
    // mutate({ id: record?.id });
  // };

  const columnKeys: (keyof userType)[] = ['eventName' ];
  const columnsValues = createColumnsValues<userType>(columnKeys);

  const columns: TableColumnsType<userType> = [
    ...columnsValues,
    {
      title:"email",
      render(_value, record) {
        return record.userEmailOrPhone
      },
    },
    {
      title:"user choose count",
      render(_value, record) {
        return record.user_count
      },
    },
    // {
    //   render: (_text, record, index) => {
    //     return (
    //       <ActionWrapper index={index}>
    //         <ActionDeleteButton action={() => handleDelete(record)} />
    //         <ActionButton  record={record} />
    //       </ActionWrapper>
    //     );
    //   },
    // },
  ];

  return columns;
};



