import React from 'react'


const WalletTable = ({ wallets }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full bg-white cursor-pointer ">
        <thead>
          <tr>
            <th className="py-3 px-6 text-left bg-gray-100 font-semibold text-sm uppercase">
              Id
            </th>
            <th className="py-3 px-6 text-left bg-gray-100 font-semibold text-sm uppercase">
              Description
            </th>
            <th className="py-3 px-6 text-left bg-gray-100 font-semibold text-sm uppercase">
              amount
            </th>
            <th className="py-3 px-6 text-left bg-gray-100 font-semibold text-sm uppercase">
              Balance
            </th>
            <th className="py-3 px-6 text-left bg-gray-100 font-semibold text-sm uppercase">
              Time
            </th>
            {/* <th className="py-3 px-6 text-left bg-gray-100 font-semibold text-sm uppercase">
              Actions
            </th> */}
          </tr>
        </thead>
        <tbody>
          {wallets.map((wallet) => (
            <tr key={wallet.id}>
              <td className="py-4 px-6 border-b border-gray-200">
                {wallet.refereceId}
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                {wallet.description}
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                &#8358;{wallet.amount}
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                &#8358;{wallet.balance}
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                {new Date(wallet.createAt).toLocaleDateString()}
              </td>
              {/* <td className="py-4 px-6 border-b border-gray-200">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Send
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WalletTable
