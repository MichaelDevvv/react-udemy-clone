import React from 'react'
import { partners } from '../Data'

const Partners = () => {
  return (
    <div className="w-screen bg-[#f7f9fa]">
      <div className="max-w-[1340px] m-auto h-auto p-12">
        <h1 className="text-2xl font-bold mb-2 text-center font-serif">Trusted by the best</h1>
        <p className="text-sm text-buttonBg text-center mb-8">Leading companies use the same courses to help employees keep their skills fresh.</p>
        <div className="grid grid-flow-col content-center justify-around">
          {partners.map((item) => {
            return (
              <div
                key={item.id}
              >
                <div>
                    <img
                    src={`/assets/images/${item.img}`}
                    alt={item.title}
                />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Partners
