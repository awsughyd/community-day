import EventsSvg from '../components/EventsSvg';
import { LOGO, MEETUP_URL, FACEBOOK_URL, TWITTER_URL, CHAT_URL } from '../constants';
import SEO from '../components/SEO';

export default function() {
  return (
    <>
      <SEO />
      <main className="max-w-6xl px-4 mx-auto min-h-screen flex">
        <div className="mt4 sm:mt-8 mx-auto md:mx-0">
          <header>
            <img className="w-40 h-40 m-auto md:m-0" src={LOGO} alt="logo" />
          </header>
          <h1 className="mb-10 text-center md:text-left md:mb-12">
            <span className="font-light text-xl md:text-3xl mb-2 ml-1 inline-block">Our website for</span>
            <br />
            <span className="font-light text-2xl md:text-4xl ml-1">AWS Hyderabad Community Day 2019 is</span>
            <br />
            <span className="font-regular text-5xl md:text-6xl">Coming Soon</span>
          </h1>
          <p className="text-lg text-center md:text-left md:text-xl">
            Meanwhile feel free to interact with our social networks
          </p>
          <ul className="text-center md:text-left py-2">
            <li className="my-2 text-sm">
              Meetup group:{' '}
              <a className="text-blue-500 underline" href={MEETUP_URL}>
                {MEETUP_URL}
              </a>
            </li>
            <li className="my-2 text-sm">
              Community Chatroom:{' '}
              <a className="text-blue-500 underline" href={CHAT_URL}>
                {CHAT_URL}
              </a>
            </li>
            <li className="my-2 text-sm">
              Facebook:{' '}
              <a className="text-blue-500 underline" href={FACEBOOK_URL}>
                {FACEBOOK_URL}
              </a>
            </li>
            <li className="my-2 text-sm">
              Twitter:{' '}
              <a className="text-blue-500 underline" href={TWITTER_URL}>
                {TWITTER_URL}
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block md:items-end absolute events-svg min-h-screen">
          <EventsSvg />
        </div>
        <style jsx>{`
          :global(.events-svg) {
            top: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
          }
        `}</style>
      </main>
    </>
  );
}
