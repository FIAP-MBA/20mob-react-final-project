import React, { useState } from "react";
import styled from 'styled-components';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartOutlined } from "@fortawesome/free-regular-svg-icons";

import { useApplication } from '../../context/ApplicationContext';

function FavoriteIcon({ movie }) {
    const [favorite, setFavorite] = useState(false);
    const { currentUser, updateData, addData, getData, setActiveLink } = useApplication()

    const favoriteEvent = async () => {

        if (currentUser == null) {
            setActiveLink("Favoritos")
            window.alert("Por favor, fazer o login para adicionar favoritos!")
        } else {

            console.log(movie)
            let list = []
            
            const response = await getData(movie.id.toString())
            console.log(response.uid.length)
            console.log(response.uid)
            console.log(currentUser.uid)
            if(response.uid.length > 0) {
                list.push(currentUser.uid)
                response.uid.forEach(m => {
                    console.log(m)
                    list.push(m)
                    console.log(list)
                });  
            } else {
                list.push(currentUser.uid)
            }

            movie.uid = list
            console.log(list)
            console.log(movie)

            if (movie.favorite) {
                const newList = list.filter(i => i !== currentUser.uid)
                setFavorite(false)
                console.log("if update favorite false")
                if (newList.length === 0) {
                    console.log("if update favorite false uid zero")
                    movie.uid = []
                    movie.favorite = false
                } else {
                    console.log("if update favorite false uid maior que zero")
                    movie.uid = newList
                    movie.favorite = true
                }

                await updateData(movie)
            } else {


                
                console.log(response)
                setFavorite(true)

                if (response == null) {
                    console.log("if add")
                    movie.uid = list
                    movie.favorite = true
                    await addData(movie)
                } else {
                    console.log("if update favorite true")
                    movie.favorite = true
                    await updateData(movie)
                }
            }
        }
    }

    return (
        <Icon onClick={favoriteEvent}>
            <FontAwesomeIcon icon={favorite || movie.favorite ? faHeart : faHeartOutlined} />
        </Icon>
    );
};

const Icon = styled.span`
    position: absolute;
    top: 8px;
    right: 8px;
    color: #fff;
    font-size: 28px;
`;

export { FavoriteIcon };
export default FavoriteIcon;