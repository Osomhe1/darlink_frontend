import React, { useState, useEffect } from 'react'

// import PageTitle from './PageTitle'
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

import response from '../utility/tableData'
// make a copy of the data, for the second table
const response2 = response.concat([])

function Tables() {
 

  // setup pages control for every table
  const [pageTable2, setPageTable2] = useState(1)

  // setup data for every table
  const [dataTable2, setDataTable2] = useState([])

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
  }, [pageTable2])

  return (
    <>
      {/* <PageTitle>Suscribers</PageTitle> */}

      {/* <SectionTitle>Simple table</SectionTitle>
      <TableContainer className='mb-8'>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Client</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable1.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className='flex items-center text-sm'>
                    <Avatar
                      className='hidden mr-3 md:block'
                      src={user.avatar}
                      alt='User avatar'
                    />
                    <div>
                      <p className='font-semibold'>{user.name}</p>
                      <p className='text-xs text-gray-600 dark:text-gray-400'>
                        {user.job}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className='text-sm'>$ {user.amount}</span>
                </TableCell>
                <TableCell>
                  <Badge type={user.status}>{user.status}</Badge>
                </TableCell>
                <TableCell>
                  <span className='text-sm'>
                    {new Date(user.date).toLocaleDateString()}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable1}
            label='Table navigation'
          />
        </TableFooter>
      </TableContainer> */}

      <SectionTitle>Users</SectionTitle>
      <TableContainer className='mb-8'>
        <Table>
          <TableHead>
            <tr>
              <TableCell>Client</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </tr>
          </TableHead>
          <TableBody>
            {dataTable2.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className='flex items-center text-sm'>
                    <Avatar
                      className='hidden mr-3 md:block'
                      src={user.avatar}
                      alt='User avatar'
                    />
                    <div>
                      <p className='font-semibold'>{user.name}</p>
                      <p className='text-xs text-gray-600 dark:text-gray-400'>
                        {user.job}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className='text-sm'>$ {user.amount}</span>
                </TableCell>
                <TableCell>
                  <Badge type={user.status}>{user.status}</Badge>
                </TableCell>
                <TableCell>
                  <span className='text-sm'>
                    {new Date(user.date).toLocaleDateString()}
                  </span>
                </TableCell>
                <TableCell>
                  <div className='flex items-center space-x-4'>
                    <Button layout='link' size='icon' aria-label='Edit'>
                      {/* <EditIcon className='w-5 h-5' aria-hidden='true' /> */}
                      {/* <EditIcon className='w-5 h-5' aria-hidden='true' /> */}
                      <EditIcon />
                    </Button>
                    <Button layout='link' size='icon' aria-label='Delete'>
                      {/* <DeleteIcon className='w-5 h-5' aria-hidden='true' /> */}
                      {/* <TrashIcon className='w-5 h-5' aria-hidden='true' /> */}
                      <DeleteIcon />
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
            label='Table navigation'
          />
        </TableFooter>
      </TableContainer>
    </>
  )
}

export default Tables
