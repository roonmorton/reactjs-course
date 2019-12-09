import Link from 'next/link'

const  About = () =>  (
    <div>
      <ul>
        <li><Link href="/"><a>Main page</a></Link></li> 
        <li><Link href="/p/100"><a>Post</a></Link></li> 
      </ul>
      <p>About page with NextJS</p>
    </div>
  );
  export default About;