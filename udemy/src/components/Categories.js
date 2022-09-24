import React from 'react'
import { categories } from '../Data'

const Categories = () => {
  return (
    <div className="w-screen">
      <div className="max-w-[1340px] m-auto h-auto bg-green-400">
        <h1 className="text-2xl font-bold mb-3">Top categories</h1>
        <div className="flex flex-wrap content-between">
          {categories.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[calc(100%_/_4_-_1.6rem)] mr-[1.6rem] mb-[1.6rem]"
              >
                <div className='max-w-[300px] max-h-[300px] overflow-hidden'>
                    <img
                    src={`/assets/images/${item.img}`}
                    alt={item.title}
                    className=" hover:scale-110 transition-all"
                    />
                </div>
                <p className="text-sm font-bold">{item.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Categories
