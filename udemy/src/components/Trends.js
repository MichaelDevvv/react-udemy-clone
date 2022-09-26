import React from 'react'
import Button from './Button'
import { trends } from '../Data'

const Trends = () => {
  return (
    <div className="w-screen bg-[#f7f9fa] my-[6rem]">
      <div className="max-w-[1340px] m-auto h-auto py-[6.5rem] px-[2.5rem]">
        <h1 className="text-2xl font-bold mb-8">Featured topics by category</h1>
        <div className="flex flex-wrap justify-between">
            {trends.map(item => {
              return (
                <div key={item.id}>
                  <h1 className='font-semibold text-[1.1rem] mb-5'>{item.title}</h1>
                  {
                    item.test.map(subitem => {
                      return (
                        <>
                          <a href="/" className='text-hoverBg font-bold underline'>{subitem.title}</a>
                          <p className='text-sm text-textColor mt-2 mb-5'>{subitem.subtitle}</p>
                        </>
                      )
                    })
                  }
                </div>
            )})}
        </div>
            <Button outline={true}>Explore more topics</Button>
      </div>
    </div>
  )
}

export default Trends
