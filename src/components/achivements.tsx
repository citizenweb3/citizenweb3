'use client';

import { FC, useState } from 'react';
import Card from '@/components/card';
import BlockTitle from '@/components/block-title';

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
              <div className="text-xl font-light leading-relaxed">
                <ul className="list-none list-inside space-y-2">
                  <li>
                    <span className="mr-4 text-green-600 text-3xl">✓</span> We self-host. Our Apps too. Even this site
                  </li>
                  <li>
                    <span className="mr-4 text-green-600 text-3xl">✓</span> Eco friendly: We utilize solar and second
                    hand equipment where possible
                  </li>
                  <li>
                    <span className="mr-4 text-green-600 text-3xl">✓</span> We use enterprise grade servers and
                    networking equipment
                  </li>
                  <li>
                    <span className="mr-4 text-green-600 text-3xl">✓</span> Hosted in the middle of the Atlantic ocean
                  </li>
                  <li>
                    <span className="mr-4 text-green-600 text-3xl">✓</span> We build and do everything Open-Source
                  </li>
                  <li>
                    <span className="mr-4 text-green-600 text-3xl">✓</span> We have a 5.5 year old web3 podcast on air
                  </li>
                  <li>
                    <span className="mr-4 text-green-600 text-3xl">✓</span> Values: Decentralziation, Privacy, Freedom
                    and Anti-Tribalism
                  </li>
                  <li>
                    <span className="mr-4 text-green-600 text-3xl">✓</span> Off the Grid Infrastructure capabilities
                  </li>
                  <li>
                    <span className="mr-4 text-green-600 text-3xl">✓</span> Independent of data centers setup. With
                    higher grade security
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achivements;
