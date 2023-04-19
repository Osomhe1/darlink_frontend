import React, { useEffect, useState } from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useRouter } from 'next/router'
import darlinkApi from './api/darlink'
import { USER_PLAN } from './api/ACTIONS.JS'
import PriceCard from '../components/PriceCard'
import { toast } from 'react-toastify'

export default function Upgrade() {

   const [open, setOpen] = useState(false)
   
    const [starterPlan, setStarterPlan] = useState([])

    const handleData = async () => {
      try {
        const { data } = await darlinkApi.get(USER_PLAN.GET_PLAN())
        if (data.success) {
          setStarterPlan(data.plans)
        }
      } catch (error) {
        toast.error(error)
        console.log(error)
      }
    }

   
  

   const handleClick = () => {
     setOpen(!open)
   }
  

   const router = useRouter()

    useEffect(() => {
      handleData()
    }, [])

  return (
    <div>
      <div className="max-w-screen-xl m-auto">
        {/* <!-- Start block --> */}
        <div className="">
          <div className="flex items-center text-center justify-around">
            <button
              className="text-3xl"
              type="button"
              onClick={() => {
                router.push('/dashboard')
              }}
            >
              <ArrowBackIcon style={{ fontSize: '50px' }} />
            </button>
            <Typography variant="h2" className="text-[#8BC940] text-center">
              Upgrade
            </Typography>
          </div>

          <div className="bg-white max-w-screen-lg m-auto my-4 ">
            <section className="bg-white dark:bg-gray-800 dark:text-gray-100 container ">
              <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                className=" max-w-screen-xl px-4 pb-8 mx-auto lg:pb-4 lg:px-6  "
              >
                <ListItemButton onClick={handleClick}>
                  <ListItemText>
                    <Typography className="text-[#8BC940] uppercase " variant="h4">
                     pick a Plan
                    </Typography>
                  </ListItemText>
                  {open ? (
                    <ExpandLess fontSize="large" />
                  ) : (
                    <ExpandMore fontSize="large" />
                  )}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  {starterPlan?.map((plan, index) => (
                    <>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText>
                            <div key={index} className="">
                              <PriceCard
                                label={plan?.plan}
                                amount={plan?.amount}
                                url={'/checkout'}
                              />
                            </div>
                          </ListItemText>
                        </ListItemButton>
                      </List>
                    </>
                  ))}
                </Collapse>
              </List>
            </section>
          </div>
         
          
          {/* <!-- End block --> */}
        </div>
      </div>
    </div>
  )
}
