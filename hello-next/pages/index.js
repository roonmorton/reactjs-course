import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>Comments All</h1>
    <div>
      {props.shows.map(show => (
        <div>
          <h5>{show.title}</h5>
          <p>completed: {show.completed}</p>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>goto</a>
          </Link>
          <hr></hr>
        </div>
        
      ))}
    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  //const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');

  const data = await res.json();
  //console.log(data);
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  };
};

export default Index;