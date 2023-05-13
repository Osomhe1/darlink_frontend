import React, { useState, useEffect } from 'react'
import SectionTitle from './SectionTitle'
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableFooter,
  TableRow,
  TableContainer,
  Button,
  Badge,
  Avatar,
  Pagination,
} from '@mui/material'
import api from '../../pages/api/darlink'
import response from '../utility/tableData'
import { GET_USERS } from '../../pages/api/ACTIONS.JS'
import {toast} from 'react-toastify'
import { ResetUser } from '../../context/context'
import { useRouter } from 'next/router'

// make a copy of the data, for the second table
const response2 = response.concat([])

function Tables() {
 

  // setup pages control for every table
  const [pageTable2, setPageTable2] = useState(1)

  // setup data for every table
  const [users, setUsers] = useState([])
  const [update, setUpdate] = useState(null)

  // pagination setup
  const resultsPerPage = 20
  const totalResults = response.length

  const router = useRouter()
  // pagination change control
  function onPageChangeTable2(p) {
    setPageTable2(p)
  }
 
  const handleData = async () => {
    try {
      const { data } = await api.get(GET_USERS.GET_USER(), {})
      if (data.success) 
      //todo
      //populate UI
      setUsers(data.account)
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          ResetUser()
          router.push('/auth/Login')
        }
      }
    }
  }

 

  const deleteHandler = async (e) =>{
     try {
       const { data } = await api.delete(GET_USERS.DELETE_ACC(), {
         params: {
           userId:e.target.id,
         },
       })
       if (data.success)
         toast.success('user successful deleted')
        setUpdate(data.account)
     } catch (error) {
       if(error.response){
         toast.error(error.response.data.error)
         if (error.response.status === 401) {
           ResetUser()
           router.push('/auth/Login')
         }
       }
     }
  }
  
  useEffect(() => {
    setUsers(
      response2.slice(
        (pageTable2 - 1) * resultsPerPage,
        pageTable2 * resultsPerPage
      )
    )
    handleData()
  }, [update])

  return (
    <>
      <SectionTitle>Users</SectionTitle>
      <TableContainer className="mb-8">
        <Table>
          <TableHead>
            <tr>
              <TableCell>Client</TableCell>
              <TableCell>Plan</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </tr>
          </TableHead>
          <TableBody>
            {users.map((x, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar
                      className="hidden mr-3 md:block"
                      src={x.avatar}
                      alt="users avatar"
                    />
                    <div>
                      <p className="font-semibold">{x.username}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {x.job}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm"> {x.plan}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm"> {x.role}</span>
                </TableCell>
                <TableCell>
                  <Badge type={x.status}>{x.status}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {new Date(x.startDate).toLocaleDateString()}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    
                    <button
                      type="button"
                      id={x.id}
                      onClick={(e) => {
                        deleteHandler(e)
                      }}
                      size="icon"
                      className="text-red-500 active:bg-pink-600 
         font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg 
         outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    >
                      Delete
                     
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable2}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </>
  )
}

export default Tables
