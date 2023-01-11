import { useRouter } from "next/router";

const About = () => {

    const router = useRouter();

    return (
        <div className="rounded-lg bg-blue-200 text-gray-800 text-3xl items-center content-center text-center my-5 py-5">
            <h1>About Us</h1>
            <p className="text-center mx-auto text-justify my-4 py-4 px-4"> I am a software developer who makes awesome and effective personal solution and learning platform like interview questions solutions in React. I like Django For Web development, Nodejs mostly for API development and React for Frontend Application. I Make projects to Learn all my concept and gather proper knowledge...i like to learn tech and share it on my youtube channel @greatadib </p>
        </div>
    )
}

export default About;


