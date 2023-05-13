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
import { USER_ENDPOINTS } from './api/ACTIONS.JS'

export default function Upgrade() {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [plans, setPlans] = useState([])
  const [active, setActive] = useState(false)

  const handleData = async () => {
    try {
      const { data } = await darlinkApi.get(USER_PLAN.GET_PLAN())
      if (data.success) {
        const newPlan = data.plans.filter((x)=>x.amount !== 0)
        setPlans(newPlan)
      }
    } catch (error) {
      toast.error(error)
      console.log(error)
    }
  }


  const handleClick = () => {
    setOpen(!open)
  }

  const handler = async (e) => {
    try {
      setActive(true)
      let planId = e.currentTarget.id
      const { data } = await darlinkApi.post(USER_PLAN.PLAN_UPGRADE(), {
        planId,
      })
      setActive(false)
      if (data.status) {
        router.push(data.data.authorization_url)
      }
    } catch (error) {
      setActive(false)
      console.log(error)
      toast.error(error)
    }
  }

  useEffect(() => {
    const AuthenticateUser = async () => {
      try {
        const { data } = await darlinkApi.post(USER_ENDPOINTS.CHECK(), {})
        if (!data.success) router.push('/Login')
      } catch (error) {
        router.push('/Login')
      }
    }
    AuthenticateUser()
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
                    <Typography
                      className="text-[#8BC940] uppercase "
                      variant="h4"
                    >
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
                  {plans?.map((cur) => (
                    <>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText>
                            <div key={cur.planId} className="">
                              <PriceCard
                                label={cur.plan}
                                amount={cur.amount}
                                key={cur.planId}
                                id={cur.planId}
                                planId={cur.planId}
                                handler={handler}
                                text={active ? 'Loading...' : 'Get Started'}
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
