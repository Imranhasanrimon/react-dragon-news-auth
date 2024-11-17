import { Link, useLoaderData } from "react-router-dom";
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
            <main className="grid grid-cols-12 w-11/12 gap-6 mx-auto">
                <section className="col-span-9">
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="p-5">
                            <img
                                src={news.thumbnail_url
                                }
                                alt="Shoes"
                                className="rounded-xl w-full h-96" />
                        </figure>
                        <div className="card-body items-center ">
                            <h2 className="card-title">{news.title}</h2>
                            <p>{news.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news.category_id
                                    }`} className="btn btn-primary ">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>

            </main>

        </div>
    );
};

export default NewsDetails;