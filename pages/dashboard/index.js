import { useEffect } from 'react'

import { app } from '../../firebaseConfig'
import { useRouter } from 'next/router'

import CategoryChart from '../../components/CategoryChart'
import ElectronicsChart from '../../components/ElectronicsChart'
import CafeteriaChart from '../../components/CafeteriaChart'
import OfficeAssetsChart from '../../components/OfficeAssestChart'
import Layout from '../../components/layout'


const Dashboard = () => {

    const router = useRouter()

    useEffect(() => {
        let token = sessionStorage.getItem('Token')

        if(!token){
            router.push('/login')
        }
    },[router])

    return(
        <Layout>
        <div className='mt-24 text-center w-full flex flex-wrap justify-around gap-10'>
            <div className='w-[45%]'>
            <CategoryChart/>
            </div>
            <div className='w-[45%]'>
            <ElectronicsChart/>
            </div>
            <div className='w-[45%]'>
            <CafeteriaChart/>
            </div>
            <div className='w-[45%]'>
            <OfficeAssetsChart/>
            </div>
            
            
            
        </div>
        </Layout>
    )
}

export default Dashboard;