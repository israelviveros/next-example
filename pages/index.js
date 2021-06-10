import Container from '../components/container';
import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import Users from '../components/users';

const Index = ({users})=>{
    return (
        <div>
            <Container>
                <h1>Index</h1>
                <Users users={users} />
            </Container>
            <Head>
                <title>Inicio</title>
            </Head>
        </div>
    )
};

Index.getInitialProps = async (ctx)=>{
  const res = await fetch('https://reqres.in/api/users');
  const resJSON = await res.json();
  return {users: resJSON.data};
};

export default  Index;
