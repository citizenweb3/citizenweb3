'use client';

import { FC, useState } from 'react';
import Card from '@/components/card';
import BlockText from '@/components/block-text';
import BlockTitle from '@/components/block-title';

const text = `
We self-host. Our Apps too. Even this site 
Eco friendly: We utilize solar and second hand equipment where possible
We use enterprise grade servers and networkign equipment
Hosted in the middle of the Atlantic ocean
We build and do everything Open-Source
 We have a 5.5 year old web3 podcast on air
Values: Decentralziation, Privacy, Freedom and Anti-Tribalism
Off the Grid Infrastructure capabilities
Independent of data centers setup. with higher grade security
`;

const Achivements: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <div onClick={() => setIsOpened(!isOpened)}>
      <button className="py-2 px-14 bg-[#1A1A1B] rounded-lg hover:bg-[#ffffff]/15 cursor-pointer mt-8">
        Our Values and Achievements
      </button>
      {isOpened && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-black rounded-2xl">
            <Card>
              <BlockTitle title="Our Values and Achievements" />
              <BlockText text={text} textCenter />
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achivements;
