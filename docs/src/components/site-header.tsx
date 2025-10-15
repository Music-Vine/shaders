'use client';

import Link from 'next/link';
import { GithubIcon } from '@/icons';
import { getPreviousPathname } from './save-previous-pathname';
import { useRouter } from 'next/navigation';
import { Logo } from './logo';

export const SiteHeader = () => {
  const router = useRouter();

  return (
    <div className="relative flex w-full items-center justify-between py-20 lg:max-w-[calc(100%-332px)] 3xl:max-w-none">
      <Link
        href="/"
        className="-mx-6 mr-auto flex items-center gap-8 px-6 text-xl lowercase outline-0 outline-offset-2 outline-focus select-none focus-visible:rounded-sm focus-visible:outline-2"
        style={{ fontFeatureSettings: '"ss02"' }}
        onClick={(event) => {
          if (event.shiftKey || event.altKey || event.metaKey || event.ctrlKey) {
            return;
          }

          const prev = getPreviousPathname();

          // Go back if the previous page was the homepage so that the browser can restore the scroll position
          if (prev === '/') {
            event.preventDefault();
            router.back();
          }
        }}
      >
        <Logo className='h-24 w-auto' />
      </Link>

      <Link
        href="https://github.com/music-vine/shaders"
        target="_blank"
        className="ml-auto hidden outline-0 outline-offset-4 outline-focus focus-visible:rounded-full focus-visible:outline-2 xs:flex"
      >
        <GithubIcon className="size-28" />
      </Link>
    </div>
  );
};
