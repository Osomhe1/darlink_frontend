import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'

function InfoCard({ title, value, sign, children: icon }) {
  return (
    <Card>
      <CardBody className="flex items-center">
        {icon}
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            <span className="text-2xl font-bold">{sign} </span>
            {value}
          </p>
        </div>
      </CardBody>
    </Card>
  )
}

export default InfoCard
