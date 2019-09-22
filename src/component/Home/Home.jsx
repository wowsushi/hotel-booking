
import React from 'react';

import Tag from './Tag'
import WelcomeBlock from './WelcomeBlock'

const Home  = props => {
  const {allRooms, convertToThousandth} = props

  return (
    <div className="home">
      <Tag/>
      <main>
        <WelcomeBlock
          allRooms={allRooms}
          convertToThousandth={convertToThousandth}
        />
      </main>
    </div>

  )
}

export default Home;
