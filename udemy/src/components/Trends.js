import React from 'react'
import { trends } from '../Data'

const Trends = () => {
  return (
    <div className="w-screen bg-[#f7f9fa] my-[6rem]">
      <div className="max-w-[1340px] m-auto h-auto py-[6.5rem] px-[2.5rem]">
        <h1 className="text-2xl font-bold mb-8">Featured topics by category</h1>
        <div className="flex flex-wrap justify-between">
            {/* <div>
                <h2></h2>
                <div></div>
            </div>
          {trends.map((item) => {
            return (
              <div
                key={item.id}
              >
                <div>
                    <p>{item.tcat}</p>
                    <a href='/'>{item.title}</a>
                </div>
                <div>
                    <p>{item.subtitle}</p>
                </div>
              </div>
            )
          })} */}
        </div>
      </div>
    </div>
  )
}

export default Trends
