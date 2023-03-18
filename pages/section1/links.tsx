import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

export default function Links(){
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/section1/getStaticProps')
  }, [router]);

  return (
    <main>
      <h1>Links</h1>

      <button onClick={() => {
        router.push('/section1/getStaticProps')
      }}>
        /getStaticProps
      </button>

      {/*<button onClick={()=>{*/}
      {/*  router.push('/section1/getStaticProps');*/}
      {/*}}*/}
      {/*        >*/}
      {/*  /getStaticProps*/}
      {/*</button>*/}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages*/}
      {/*<a href="/section1/getStaticProps">/getStaticProps</a>*/}

      {/*<Link href="/section1/getStaticProps" style={{color: 'red'}} legacyBehavior>*/}
      {/*  <a>/getStaticProps*/}
      {/*  </a>*/}
      {/*  </Link>*/}
      {/** https://github.com/vercel/next.js/blob/canary/packages/next/client/link.tsx#L487*/}

    </main>
  )

}