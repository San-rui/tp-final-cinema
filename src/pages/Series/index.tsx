import { FC } from "react";
import { CardList } from "../../components/common";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc/WithAuth";
import { useMovies } from "../../hooks";

import './styles.scss'

const Series :FC= () =>{

    const { dataMovieFb } = useMovies()

    const movies = dataMovieFb.items.filter(item=> item.media_type==='tv')

    return(
        <Layout>
            <div className="series">
                <CardList items={movies}/>
            </div>
        </Layout>
    )
}

export default WithAuth (Series)