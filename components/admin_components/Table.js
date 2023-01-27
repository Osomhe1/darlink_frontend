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
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import api from '../../pages/api/darlink'

import response from '../utility/tableData'
import { GET_USERS } from '../../pages/api/ACTIONS.JS'
import DeleteModal from './DeleteModal'
import {toast} from 'react-toastify'
// make a copy of the data, for the second table
const response2 = response.concat([])

function Tables() {
 

  // setup pages control for every table
  const [pageTable2, setPageTable2] = useState(1)

  // setup data for every table
  const [dataTable2, setDataTable2] = useState([])
  const [users, setUsers] = useState([])

  // pagination setup
  const resultsPerPage = 20
  const totalResults = response.length

  // pagination change control
  // function onPageChangeTable1(p) {
  //   setPageTable1(p)
  // }

  // pagination change control
  function onPageChangeTable2(p) {
    setPageTable2(p)
  }

  

  const handleData = async () => {
    try {
      const { data } = await api.get(GET_USERS.GET_USER(), {})
      console.log(data, 'data')
      if (data.success) 
      //todo
      //populate UI
      setUsers(data.user)
    } catch (error) {
      // console.log(error.response.data.error)
      console.log(error, 'error')
      // if (error.response.status === 401) {
      //   Logout()
      // }
    }
  }
  const handleDeleteAcc = async () => {
    try {
      const { data } = await api.get(GET_USERS.DELETE_ACC(), {})
      console.log(data, 'data')
      if (data.success) 
      //todo
      //populate UI
      // setUser(data.profile)
      toast.success('user successful deleted')
      handleData()
    } catch (error) {
      // console.log(error.response.data.error)
      console.log(error, 'error')
      toast.error(error.response.data.error)
      // if (error.response.status === 401) {
      //   Logout()
      // }
    }
  }



  // on page change, load new sliced data
  // here you would make another server request for new data
  // useEffect(() => {
  //   setDataTable1(
  //     response.slice(
  //       (pageTable1 - 1) * resultsPerPage,
  //       pageTable1 * resultsPerPage
  //     )
  //   )
  // }, [pageTable1])

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable2(
      response2.slice(
        (pageTable2 - 1) * resultsPerPage,
        pageTable2 * resultsPerPage
      )
    )
    handleData()
  }, [pageTable2])

  return (
    <>
      <SectionTitle>Users</SectionTitle>
      <TableContainer className="mb-8">
        <Table>
          <TableHead>
            <tr>
              <TableCell>Client</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </tr>
          </TableHead>
          <TableBody>
            {dataTable2.map((users, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar
                      className="hidden mr-3 md:block"
                      src={users.avatar}
                      alt="users avatar"
                    />
                    <div>
                      <p className="font-semibold">{users.username}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {users.job}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ {users.amount}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm"> {users.role}</span>
                </TableCell>
                <TableCell>
                  <Badge type={users.status}>{users.status}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {new Date(users.createdAt).toLocaleDateString()}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button layout="link" size="icon" aria-label="Edit">
                      {/* <EditIcon className='w-5 h-5' aria-hidden='true' /> */}
                      {/* <EditIcon className='w-5 h-5' aria-hidden='true' /> */}
                      <EditIcon />
                    </Button>
                    <Button layout="link" size="icon"  aria-label="Delete">
                      {/* <DeleteIcon
                      /> */}
                      <DeleteModal />
                    </Button>
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
