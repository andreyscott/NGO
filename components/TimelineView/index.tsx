// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import {
  TimelineContainer,
  ResponsiveContainer,
  HeaderContainer,
  Heading,
  CCBPHeading,
} from './styledComponents'
import { Key } from 'react'

const TimelineView = (props: { timelineItemsList: any }) => {
  const {timelineItemsList} = props

  const renderTimelineCard = (item: { categoryId: string; id: Key | null | undefined }) => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <div 
  className='flex justify-around items-center min-h-screen'>
      <div    className='flex flex-col justify-center items-center max-w-[1110px] h-screen'>
        <div  className='flex flex-col justify-center items-center mb-8'>
          <h1 className='text-center text-[#171f46] font-roboto font-medium text-lg leading-[2.7] m-0 md:text-xl'>
            MY JOURNEY OF <br />
            <span
              className='text-[#2b237c] font-roboto font-medium text-2xl m-0 md:text-3xl'
            >CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map((eachItem: any) => renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
