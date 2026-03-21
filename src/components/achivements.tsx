'use client';

import { FC, useState } from 'react';
import Card from '@/components/card';
import BlockTitle from '@/components/block-title';

const Achivements: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <div onClick={() => setIsOpened(!isOpened)}>
      <button className="py-2 px-14 bg-[#1A1A1B] rounded-lg hover:bg-[#ffffff]/15 cursor-pointer mt-8 font-semibold">
        Meet our Team!
      </button>
      {isOpened && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-black rounded-2xl">
            <Card>
              <BlockTitle title="Meet Our Team: Humans + AI Agents" />
              <div className="text-xl font-light leading-relaxed">
                <p>
                  Citizen Web3 is run by a small human team and a growing team of AI agents. These AI agents help run
                  ValidatorInfo, answer questions 24/7, index chains, and build new tools. Soon every part of CW3 will
                  have its own AI teammates. This is how we stay fast, private, and decentralized.
                </p>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achivements;
