import Layout from '../../components/Layout'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';

const rows = [
  {
    id: 1,
    userName: 'Aman',
    Adate: new Date(2021, 6, 8),
    Assign: 'Laptops',
    userID: '1234',
    department: 'FED',
  },
  {
    id: 2,
    userName: 'Krunal',
    Adate: new Date(2021, 7, 1),
    Assign: 'Monitor',
    userID: '3412',
    department: 'BED',
  },
  {
    id: 3,
    userName: 'Kaumil',
    Adate: new Date(2021, 7, 13),
    Assign: 'Hard drive',
    userID: '343',
    department: 'FED',
  },
  {
    id: 4,
    userName: 'Nilay',
    Adate: new Date(2021, 7, 4),
    Assign: 'Wireless Mouse',
    userID: '422',
    department: 'QA',
  },
  {
    id: 5,
    userName: 'Preet',
    Adate: new Date(2021, 1, 6),
    Assign: 'Wireless Keyboard',
    userID: '6886',
    department: 'Devops',
  },
  {
    id: 6,
    userName: 'Vraj',
    Adate: new Date(2021, 4, 18),
    Assign: 'Headphones',
    userID: '335',
    department: 'FED',
  },
  {
    id: 7,
    userName: 'Jay',
    Adate: new Date(2021, 9, 8),
    Assign: 'Mouse pad',
    userID: '9987',
    department: 'QA',
  },
  {
    id: 8,
    userName: 'Raj',
    Adate: new Date(2021, 9, 8),
    Assign: 'Docket',
    userID: '8877',
    department: 'Devops',
  },
  {
    id: 9,
    userName: 'Vivek',
    Adate: new Date(2021, 9, 8),
    Assign: 'Scanner',
    userID: '006',
    department: 'BED',
  },
  {
    id: 10,
    userName: 'Alpesh',
    Adate: new Date(2021, 9, 8),
    Assign: 'Printer',
    userID: '557',
    department: 'QA',
  },
  {
    id: 11,
    userName: 'Sandip',
    Adate: new Date(2021, 9, 8),
    Assign: 'Router',
    userID: '3356',
    department: 'Devops',
  },
  {
    id: 12,
    userName: 'Saad',
    Adate: new Date(2021, 9, 8),
    Assign: 'Switch',
    userID: '557',
    department: 'FED',
  },
  {
    id: 13,
    userName: 'Darshil',
    Adate: new Date(2021, 9, 8),
    Assign: 'Wireless Cards',
    userID: '127',
    department: 'FED',
  },
];

export default function Users() {
  const columns = [
    {
      field: 'userID',
      headerName: 'User ID',
      width: 220,
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'userName',
      headerName: 'User Name',
      width: 220,
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'department',
      headerName: 'Department',
      type: 'date',
      width: 240,
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'Assign',
      headerName: 'Assign Item',
      width: 240,
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'Adate',
      headerName: 'Assigning Date',
      type: 'date',
      width: 240,
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },
  ];

  return (
    <Layout>
      <div className="flex w-full">

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ width: '95%' }}>
            <div className="mb-7">
              <h4 className="font-bold text-xl">View users list </h4>
              <p className="italic font-serif text-blue-300">
                Manage Users
              </p>
            </div>
            <DataGrid
              rows={rows}
              columns={columns}
              editMode="row"
              experimentalFeatures={{ newEditingApi: true }}
              sx={{
                height: 788,
                boxShadow: 2,
                border: 2,
                borderColor: '#333',
                boxShadow: 4,
                '& .MuiDataGrid-cell:hover': {
                  color: 'primary.main',
                },
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
