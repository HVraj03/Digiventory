import React, { useState } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl, Button, TextareaAutosize } from '@mui/material';

import Layout from '../../components/Layout'

import { useEffect } from 'react'

import { app } from '../../firebaseConfig'
import { useRouter } from 'next/router'

function AddItem() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    brand: '',
    modal: '',
    quantity: '',
    description: ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const router = useRouter()

    useEffect(() => {
        let token = sessionStorage.getItem('Token')

        if(!token){
            router.push('/login')
        }
    },[router])

  return (
    <Layout>
        <div className="AddInventoryItem bg-white w-[100%]">
            <h1 className="w-full text-black text-center text-[30px] my-5">Add Inventory Item</h1>
            <form onSubmit={handleSubmit} className='w-1/2 lg:w-1/3 mx-auto flex flex-col items-center' >
                <TextField
                    label="Item Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    fullWidth
                />
                <br /><br />
                <FormControl fullWidth>
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                    labelId="category-label"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    >
                    <MenuItem value="electronics">Electronic</MenuItem>
                    <MenuItem value="cafeteria">Cafeteria</MenuItem>
                    <MenuItem value="office-assets">Office Assets</MenuItem>
                    </Select>
                </FormControl>
                <br /><br />
                <FormControl fullWidth>
                    <InputLabel id="brand-label">Brand</InputLabel>
                    <Select
                    labelId="brand-label"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                    >
                    <MenuItem value="macbook">MacBook</MenuItem>
                    <MenuItem value="dell">Dell</MenuItem>
                    <MenuItem value="lenovo">Lenovo</MenuItem>
                    <MenuItem value="hp">HP</MenuItem>
                    </Select>
                </FormControl>
                <br /><br />
                <FormControl fullWidth>
                    <InputLabel id="modal-label">Modal Name</InputLabel>
                    <Select
                    labelId="modal-label"
                    name="modal"
                    value={formData.modal}
                    onChange={handleChange}
                    required
                    >
                    <MenuItem value="m1-chip">M1 Chip</MenuItem>
                    <MenuItem value="edge-series">Edge Series</MenuItem>
                    <MenuItem value="notebook">Notebook</MenuItem>
                    </Select>
                </FormControl>
                <br /><br />
                <TextField
                    label="Quantity"
                    name="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    fullWidth
                />
                <br /><br />
                <Button className='' variant="contained" color="primary" type="submit" style={{backgroundColor: '#1976d2',color: 'white'}} >
                    Submit
                </Button>
            </form>
        </div>
    </Layout>
  );
};

export default AddItem;