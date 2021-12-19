import { FC, useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import { MovieList} from "../../components/parts"
import { WithAuth } from "../../hoc/WithAuth";
import { useMovies } from "../../hooks";

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Item } from "../../types";

const Admin :FC= () =>{


    const { items, setPage, itemsSearch, setSearch, search} = useMovies();

    const handleChange =(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
        
        console.log(event.target.value) //Valor a buscar
        if(event.target.value!==''){
            setSearch(event.target.value)
        }
        
    }

    return(
        <Layout>
            <div className="admin">
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', height: '2.5rem', marginBottom: '1rem', borderRadius: '1.2rem' }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={handleChange}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                </Paper>
                {(search==='')?<MovieList items={items} setPage={setPage}/>: <MovieList items={itemsSearch} setPage={setPage}/>}
                
            </div>
        </Layout>
    )
    
}

export default WithAuth (Admin)