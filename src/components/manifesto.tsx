import { FC } from 'react';
import BlockTitle from '@/components/block-title';
import BlockText from '@/components/block-text';

const text = `"From this distant vantage point, the Earth might not seem of any particular interest. But for us, it's different. Consider again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every "superstar," every "supreme leader," every saint and sinner in the history of our species lived there--on a mote of dust suspended in a sunbeam... Our posturings, our imagined self-importance, the delusion that we have some privileged position in the Universe, are challenged by this point of pale light. Our planet is a lonely speck in the great enveloping cosmic dark. In our obscurity, in all this vastness, there is no hint that help will come from elsewhere to save us from ourselves..."`;
const author = "— From 'A Pale Blue Dot', by Carl Sagan.";

const Manifesto: FC = () => (
  <section id="manifesto" className=" py-16 md:py-24">
    <div className="max-w-[80vw] text-justify md:text-left md:max-w-[72vw] mx-auto">
      <BlockTitle title={'Manifesto'} />
      <BlockText text={text} />
      <BlockText text={author} className="mt-4" />
    </div>
  </section>
);

export default Manifesto;
