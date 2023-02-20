import * as React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import Person from '@mui/icons-material/Person';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Button from '@mui/joy/Button';
import Layout from '../../components/Layout'
import { useEffect } from 'react'

import { app } from '../../firebaseConfig'
import { useRouter } from 'next/router'

const rows = [
  {
    id: 1,
    productName: 'Laptops',
    dueAt: new Date(2021, 6, 8),
    categoaryName: 'IT Product ',
    quantity: 30,
  },
  {
    id: 2,
    productName: 'TV',
    dueAt: new Date(2021, 7, 1),
    categoaryName: 'Electronics ',
    quantity: 20,
  },
  {
    id: 3,
    productName: 'Monitor',
    dueAt: new Date(2021, 7, 13),
    categoaryName: 'Electronics',
    quantity: 15,
  },
  {
    id: 4,
    productName: 'Wireless Mouse',
    dueAt: new Date(2021, 7, 4),
    categoaryName: 'Electronic',
    quantity: 2,
  },
  {
    id: 5,
    productName: 'Wireless Keyboard',
    dueAt: new Date(2021, 1, 6),
    categoaryName: 'Ofice Asset',
    quantity: 10,
  },
  {
    id: 6,
    productName: 'Headphones',
    dueAt: new Date(2021, 4, 18),
    categoaryName: 'Office Asset',
    quantity: 60,
  },
  {
    id: 7,
    productName: 'Mouse pad',
    dueAt: new Date(2021, 9, 8),
    categoaryName: 'Office Asset ',
    quantity: 35,
  },
  {
    id: 8,
    productName: 'Docket',
    dueAt: new Date(2021, 9, 8),
    categoaryName: 'Office Asset ',
    quantity: 35,
  },
  {
    id: 9,
    productName: 'Coke',
    dueAt: new Date(2021, 9, 8),
    categoaryName: 'Cafeteria ',
    quantity: 35,
  },
  {
    id: 10,
    productName: 'Fruits',
    dueAt: new Date(2021, 9, 8),
    categoaryName: 'Cafeteria ',
    quantity: 35,
  },
  {
    id: 11,
    productName: 'Coffe',
    dueAt: new Date(2021, 9, 8),
    categoaryName: 'Cafeteria ',
    quantity: 35,
  },
  {
    id: 12,
    productName: 'Maggie',
    dueAt: new Date(2021, 9, 8),
    categoaryName: 'Cafeteria',
    quantity: 35,
  },
  {
    id: 13,
    productName: 'Wireless Cards',
    dueAt: new Date(2021, 9, 8),
    categoaryName: 'IT Product ',
    quantity: 35,
  },
];
export default function ViewItem() {
  const [row, setRow] = React.useState(rows);

  const [open, setOpen] = React.useState(false);

  const openModal = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setOpen(true);
      });
    },
    []
  );

  const columns = [
    {
      field: 'productName',
      headerName: 'Product Name',
      width: 260,
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'dueAt',
      headerName: 'Date',
      type: 'date',
      width: 240,
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'categoaryName',
      headerName: 'Categoary Name',
      width: 240,
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'quantity',
      headerName: 'Quantity ',
      width: 230,
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'actions',
      headerName: 'Assign ',
      type: 'actions',
      width: 180,
      getActions: (params) => [
        <GridActionsCellItem
        key={Math.random() * 10}
          icon={<Person />}
          label="Delete"
          onClick={openModal(params.id)}
        />,
      ],
    },
  ];

  const router = useRouter()

    useEffect(() => {
        let token = sessionStorage.getItem('Token')

        if(!token){
            router.push('/login')
        }
    },[router])

  return (
    <Layout>
      <div className="flex w-[100%]">
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ width: '95%' }}>
          <div className='mb-7'>
                            <h4 className='font-bold text-xl'>View Iteam </h4>
                            <p className='italic font-serif text-blue-300'>Manage your iteam</p>
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
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog
            aria-labelledby="basic-modal-dialog-title"
            aria-describedby="basic-modal-dialog-description"
            sx={{ maxWidth: 600, backgroundColor: '#AEE2FF' }}
          >
            <Typography
              id="basic-modal-dialog-title"
              component="h2"
              className="text-center"
            >
              Assign a item to User
            </Typography>
            <Typography
              id="basic-modal-dialog-description"
              textColor="text.tertiary"
              className="text-center"
            >
              Please Fill all the information!!
            </Typography>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setOpen(false);
              }}
            >
              <Stack spacing={2}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input autoFocus required />
                </FormControl>
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Input required />
                </FormControl>
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: '#181823',
                    color: '#E9F8F9',
                    '&:hover': {
                      color: '#181823',
                      backgroundColor: '#E9F8F9',
                    },
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </ModalDialog>
        </Modal>
      </div>
    </Layout>
  );
}
