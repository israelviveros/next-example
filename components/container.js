import Navigation from './navigation';
import Head from 'next/head';

const Container = (props) =>{
    return(
        <div>
            <Head>
                <title>Next JS project</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"/>
            </Head>
            <Navigation />
            <div className={"container p-4"}>
                {props.children}
            </div>
        </div>
    )
};

export default Container;
