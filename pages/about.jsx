import React from 'react';
import Layout from '../layout/Layout';
import { TextDown, RighToLeft } from '../components/utils/FramMotion';

function about() {
  return (
    <Layout title="Jeel Gajera | About 😌">
      <div>
        <div>
          <TextDown>
            <h1 className="flex text-red-500 text-xl sm:text-3xl text-bold">
              Me, MySelf & I <span className="animate-pulse">😎</span>
            </h1>
          </TextDown>
          <RighToLeft>
            <hr className="w-24 h-[2px] rounded-lg mt-1 border-none bg-teal-400" />
          </RighToLeft>
        </div>
        <div>
          
        </div>
      </div>
    </Layout>
  )
}

export default about;