import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    console.log(news);
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="grid grid-cols-12 w-11/12 mx-auto">
                <section className="col-span-9"></section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>

            </main>

        </div>
    );
};

export default NewsDetails;