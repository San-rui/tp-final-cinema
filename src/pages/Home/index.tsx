import { FC } from "react";
import { Layout } from "../../components/layout";
import { MovieList} from "../../components/parts"


const Home :FC= () =>{

    return(
        <Layout>
            <div className="home">
                <MovieList/>
            </div>
        </Layout>
    )
    
}

export default Home