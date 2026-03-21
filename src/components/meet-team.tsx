'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import Card from '@/components/card';
import BlockTitle from '@/components/block-title';

const MeetTeam: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <>
      <div className="flex justify-end mt-8 max-w-[80vw] mx-auto">
        <button
          onClick={() => setIsOpened(true)}
          className="relative py-3 px-6 md:py-4 md:px-10 font-bold text-lg md:text-2xl text-center bg-[#1A1A1B] rounded-[9px] hover:bg-[#ffffff]/15 cursor-pointer"
        >
          <Image src="/arrow.svg" alt="arrow" width={12} height={12} className="absolute top-3 right-3 w-3 h-auto" />
          Meet our Team!
        </button>
      </div>
      {isOpened && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4"
          onClick={() => setIsOpened(false)}
        >
          <div className="bg-black rounded-2xl max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <Card className="p-16 md:p-24">
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
    </>
  );
};

export default MeetTeam;
