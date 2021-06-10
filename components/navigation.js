import Link from 'next/link';

const Navigation = (props)=>{
    return (
        <div>
            <ul>
                <li>
                    <Link href={"/"}>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/about"}>
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/services"}>
                        <a>Services</a>
                    </Link>
                </li>
            </ul>
            {props.children}
        </div>
    )
};

export default  Navigation;
