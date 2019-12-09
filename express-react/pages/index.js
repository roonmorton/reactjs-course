import Link from 'next/link'

const  Index = () =>  (
    <div>
      <ul>
        <li><Link href="/"><a>Main page</a></Link></li> 
        <li><Link href="/p/100"><a>Post</a></Link></li> 
      </ul>
      <p>My first page with NextJS</p>
    </div>
  );
  export default Index;