import {useRouter} from "next/router";
import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import Container from '../../components/container';

const Profile = ({userData})=>{
    const router = useRouter();
    const {id} = router.query;
    // console.log(id)
    return  (
        <div>
            <Container>
                <h1>{userData.first_name} {userData.last_name}</h1>
                <h3>Email: {userData.email}</h3>
            </Container>
            <Head>
                <title>Hola {userData.first_name}</title>
            </Head>
        </div>
    )
}

Profile.getInitialProps = async (ctx)=>{
    let id = ctx.query.id;
    console.log(id)
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const resJSON = await res.json();
    return {userData: resJSON.data};

};

export default  Profile;
