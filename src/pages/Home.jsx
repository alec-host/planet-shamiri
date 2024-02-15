import React, { useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { getSession } from '../session/appSession';
import { PROFILE_SESSION } from '../session/constant';
import { useNavigate } from 'react-router-dom';
import { getCharacters } from 'rickmortyapi';
 
const Home = () => {

    const [profileData,setProfileData] = React.useState([]);
    const [rickyMontyCharacterData,setRickyMontyCharacterData] = React.useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const session = getSession(PROFILE_SESSION);
        if(session){
            setProfileData(session);
        }else{
            navigate('/login');
        }
    },[navigate]);

    const _locations = {
        "info": {
            "count": 826,
            "pages": 42,
            "next": "https://rickandmortyapi.com/api/character?page=2",
            "prev": null
        },
        "results": [
            {
                "id": 1,
                "name": "Rick Sanchez",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (C-137)",
                    "url": "https://rickandmortyapi.com/api/location/1"
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/1",
                    "https://rickandmortyapi.com/api/episode/2",
                    "https://rickandmortyapi.com/api/episode/3",
                    "https://rickandmortyapi.com/api/episode/4",
                    "https://rickandmortyapi.com/api/episode/5",
                    "https://rickandmortyapi.com/api/episode/6",
                    "https://rickandmortyapi.com/api/episode/7",
                    "https://rickandmortyapi.com/api/episode/8",
                    "https://rickandmortyapi.com/api/episode/9",
                    "https://rickandmortyapi.com/api/episode/10",
                    "https://rickandmortyapi.com/api/episode/11",
                    "https://rickandmortyapi.com/api/episode/12",
                    "https://rickandmortyapi.com/api/episode/13",
                    "https://rickandmortyapi.com/api/episode/14",
                    "https://rickandmortyapi.com/api/episode/15",
                    "https://rickandmortyapi.com/api/episode/16",
                    "https://rickandmortyapi.com/api/episode/17",
                    "https://rickandmortyapi.com/api/episode/18",
                    "https://rickandmortyapi.com/api/episode/19",
                    "https://rickandmortyapi.com/api/episode/20",
                    "https://rickandmortyapi.com/api/episode/21",
                    "https://rickandmortyapi.com/api/episode/22",
                    "https://rickandmortyapi.com/api/episode/23",
                    "https://rickandmortyapi.com/api/episode/24",
                    "https://rickandmortyapi.com/api/episode/25",
                    "https://rickandmortyapi.com/api/episode/26",
                    "https://rickandmortyapi.com/api/episode/27",
                    "https://rickandmortyapi.com/api/episode/28",
                    "https://rickandmortyapi.com/api/episode/29",
                    "https://rickandmortyapi.com/api/episode/30",
                    "https://rickandmortyapi.com/api/episode/31",
                    "https://rickandmortyapi.com/api/episode/32",
                    "https://rickandmortyapi.com/api/episode/33",
                    "https://rickandmortyapi.com/api/episode/34",
                    "https://rickandmortyapi.com/api/episode/35",
                    "https://rickandmortyapi.com/api/episode/36",
                    "https://rickandmortyapi.com/api/episode/37",
                    "https://rickandmortyapi.com/api/episode/38",
                    "https://rickandmortyapi.com/api/episode/39",
                    "https://rickandmortyapi.com/api/episode/40",
                    "https://rickandmortyapi.com/api/episode/41",
                    "https://rickandmortyapi.com/api/episode/42",
                    "https://rickandmortyapi.com/api/episode/43",
                    "https://rickandmortyapi.com/api/episode/44",
                    "https://rickandmortyapi.com/api/episode/45",
                    "https://rickandmortyapi.com/api/episode/46",
                    "https://rickandmortyapi.com/api/episode/47",
                    "https://rickandmortyapi.com/api/episode/48",
                    "https://rickandmortyapi.com/api/episode/49",
                    "https://rickandmortyapi.com/api/episode/50",
                    "https://rickandmortyapi.com/api/episode/51"
                ],
                "url": "https://rickandmortyapi.com/api/character/1",
                "created": "2017-11-04T18:48:46.250Z"
            },
            {
                "id": 2,
                "name": "Morty Smith",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/1",
                    "https://rickandmortyapi.com/api/episode/2",
                    "https://rickandmortyapi.com/api/episode/3",
                    "https://rickandmortyapi.com/api/episode/4",
                    "https://rickandmortyapi.com/api/episode/5",
                    "https://rickandmortyapi.com/api/episode/6",
                    "https://rickandmortyapi.com/api/episode/7",
                    "https://rickandmortyapi.com/api/episode/8",
                    "https://rickandmortyapi.com/api/episode/9",
                    "https://rickandmortyapi.com/api/episode/10",
                    "https://rickandmortyapi.com/api/episode/11",
                    "https://rickandmortyapi.com/api/episode/12",
                    "https://rickandmortyapi.com/api/episode/13",
                    "https://rickandmortyapi.com/api/episode/14",
                    "https://rickandmortyapi.com/api/episode/15",
                    "https://rickandmortyapi.com/api/episode/16",
                    "https://rickandmortyapi.com/api/episode/17",
                    "https://rickandmortyapi.com/api/episode/18",
                    "https://rickandmortyapi.com/api/episode/19",
                    "https://rickandmortyapi.com/api/episode/20",
                    "https://rickandmortyapi.com/api/episode/21",
                    "https://rickandmortyapi.com/api/episode/22",
                    "https://rickandmortyapi.com/api/episode/23",
                    "https://rickandmortyapi.com/api/episode/24",
                    "https://rickandmortyapi.com/api/episode/25",
                    "https://rickandmortyapi.com/api/episode/26",
                    "https://rickandmortyapi.com/api/episode/27",
                    "https://rickandmortyapi.com/api/episode/28",
                    "https://rickandmortyapi.com/api/episode/29",
                    "https://rickandmortyapi.com/api/episode/30",
                    "https://rickandmortyapi.com/api/episode/31",
                    "https://rickandmortyapi.com/api/episode/32",
                    "https://rickandmortyapi.com/api/episode/33",
                    "https://rickandmortyapi.com/api/episode/34",
                    "https://rickandmortyapi.com/api/episode/35",
                    "https://rickandmortyapi.com/api/episode/36",
                    "https://rickandmortyapi.com/api/episode/37",
                    "https://rickandmortyapi.com/api/episode/38",
                    "https://rickandmortyapi.com/api/episode/39",
                    "https://rickandmortyapi.com/api/episode/40",
                    "https://rickandmortyapi.com/api/episode/41",
                    "https://rickandmortyapi.com/api/episode/42",
                    "https://rickandmortyapi.com/api/episode/43",
                    "https://rickandmortyapi.com/api/episode/44",
                    "https://rickandmortyapi.com/api/episode/45",
                    "https://rickandmortyapi.com/api/episode/46",
                    "https://rickandmortyapi.com/api/episode/47",
                    "https://rickandmortyapi.com/api/episode/48",
                    "https://rickandmortyapi.com/api/episode/49",
                    "https://rickandmortyapi.com/api/episode/50",
                    "https://rickandmortyapi.com/api/episode/51"
                ],
                "url": "https://rickandmortyapi.com/api/character/2",
                "created": "2017-11-04T18:50:21.651Z"
            },
            {
                "id": 3,
                "name": "Summer Smith",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Female",
                "origin": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/6",
                    "https://rickandmortyapi.com/api/episode/7",
                    "https://rickandmortyapi.com/api/episode/8",
                    "https://rickandmortyapi.com/api/episode/9",
                    "https://rickandmortyapi.com/api/episode/10",
                    "https://rickandmortyapi.com/api/episode/11",
                    "https://rickandmortyapi.com/api/episode/12",
                    "https://rickandmortyapi.com/api/episode/14",
                    "https://rickandmortyapi.com/api/episode/15",
                    "https://rickandmortyapi.com/api/episode/16",
                    "https://rickandmortyapi.com/api/episode/17",
                    "https://rickandmortyapi.com/api/episode/18",
                    "https://rickandmortyapi.com/api/episode/19",
                    "https://rickandmortyapi.com/api/episode/20",
                    "https://rickandmortyapi.com/api/episode/21",
                    "https://rickandmortyapi.com/api/episode/22",
                    "https://rickandmortyapi.com/api/episode/23",
                    "https://rickandmortyapi.com/api/episode/24",
                    "https://rickandmortyapi.com/api/episode/25",
                    "https://rickandmortyapi.com/api/episode/26",
                    "https://rickandmortyapi.com/api/episode/27",
                    "https://rickandmortyapi.com/api/episode/29",
                    "https://rickandmortyapi.com/api/episode/30",
                    "https://rickandmortyapi.com/api/episode/31",
                    "https://rickandmortyapi.com/api/episode/32",
                    "https://rickandmortyapi.com/api/episode/33",
                    "https://rickandmortyapi.com/api/episode/34",
                    "https://rickandmortyapi.com/api/episode/35",
                    "https://rickandmortyapi.com/api/episode/36",
                    "https://rickandmortyapi.com/api/episode/38",
                    "https://rickandmortyapi.com/api/episode/39",
                    "https://rickandmortyapi.com/api/episode/40",
                    "https://rickandmortyapi.com/api/episode/41",
                    "https://rickandmortyapi.com/api/episode/42",
                    "https://rickandmortyapi.com/api/episode/43",
                    "https://rickandmortyapi.com/api/episode/44",
                    "https://rickandmortyapi.com/api/episode/45",
                    "https://rickandmortyapi.com/api/episode/46",
                    "https://rickandmortyapi.com/api/episode/47",
                    "https://rickandmortyapi.com/api/episode/48",
                    "https://rickandmortyapi.com/api/episode/49",
                    "https://rickandmortyapi.com/api/episode/51"
                ],
                "url": "https://rickandmortyapi.com/api/character/3",
                "created": "2017-11-04T19:09:56.428Z"
            },
            {
                "id": 4,
                "name": "Beth Smith",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Female",
                "origin": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/6",
                    "https://rickandmortyapi.com/api/episode/7",
                    "https://rickandmortyapi.com/api/episode/8",
                    "https://rickandmortyapi.com/api/episode/9",
                    "https://rickandmortyapi.com/api/episode/10",
                    "https://rickandmortyapi.com/api/episode/11",
                    "https://rickandmortyapi.com/api/episode/12",
                    "https://rickandmortyapi.com/api/episode/14",
                    "https://rickandmortyapi.com/api/episode/15",
                    "https://rickandmortyapi.com/api/episode/16",
                    "https://rickandmortyapi.com/api/episode/18",
                    "https://rickandmortyapi.com/api/episode/19",
                    "https://rickandmortyapi.com/api/episode/20",
                    "https://rickandmortyapi.com/api/episode/21",
                    "https://rickandmortyapi.com/api/episode/22",
                    "https://rickandmortyapi.com/api/episode/23",
                    "https://rickandmortyapi.com/api/episode/24",
                    "https://rickandmortyapi.com/api/episode/25",
                    "https://rickandmortyapi.com/api/episode/26",
                    "https://rickandmortyapi.com/api/episode/27",
                    "https://rickandmortyapi.com/api/episode/28",
                    "https://rickandmortyapi.com/api/episode/29",
                    "https://rickandmortyapi.com/api/episode/30",
                    "https://rickandmortyapi.com/api/episode/31",
                    "https://rickandmortyapi.com/api/episode/32",
                    "https://rickandmortyapi.com/api/episode/33",
                    "https://rickandmortyapi.com/api/episode/34",
                    "https://rickandmortyapi.com/api/episode/35",
                    "https://rickandmortyapi.com/api/episode/36",
                    "https://rickandmortyapi.com/api/episode/38",
                    "https://rickandmortyapi.com/api/episode/39",
                    "https://rickandmortyapi.com/api/episode/40",
                    "https://rickandmortyapi.com/api/episode/41",
                    "https://rickandmortyapi.com/api/episode/42",
                    "https://rickandmortyapi.com/api/episode/43",
                    "https://rickandmortyapi.com/api/episode/44",
                    "https://rickandmortyapi.com/api/episode/45",
                    "https://rickandmortyapi.com/api/episode/46",
                    "https://rickandmortyapi.com/api/episode/47",
                    "https://rickandmortyapi.com/api/episode/48",
                    "https://rickandmortyapi.com/api/episode/49",
                    "https://rickandmortyapi.com/api/episode/51"
                ],
                "url": "https://rickandmortyapi.com/api/character/4",
                "created": "2017-11-04T19:22:43.665Z"
            },
            {
                "id": 5,
                "name": "Jerry Smith",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/6",
                    "https://rickandmortyapi.com/api/episode/7",
                    "https://rickandmortyapi.com/api/episode/8",
                    "https://rickandmortyapi.com/api/episode/9",
                    "https://rickandmortyapi.com/api/episode/10",
                    "https://rickandmortyapi.com/api/episode/11",
                    "https://rickandmortyapi.com/api/episode/12",
                    "https://rickandmortyapi.com/api/episode/13",
                    "https://rickandmortyapi.com/api/episode/14",
                    "https://rickandmortyapi.com/api/episode/15",
                    "https://rickandmortyapi.com/api/episode/16",
                    "https://rickandmortyapi.com/api/episode/18",
                    "https://rickandmortyapi.com/api/episode/19",
                    "https://rickandmortyapi.com/api/episode/20",
                    "https://rickandmortyapi.com/api/episode/21",
                    "https://rickandmortyapi.com/api/episode/22",
                    "https://rickandmortyapi.com/api/episode/23",
                    "https://rickandmortyapi.com/api/episode/26",
                    "https://rickandmortyapi.com/api/episode/29",
                    "https://rickandmortyapi.com/api/episode/30",
                    "https://rickandmortyapi.com/api/episode/31",
                    "https://rickandmortyapi.com/api/episode/32",
                    "https://rickandmortyapi.com/api/episode/33",
                    "https://rickandmortyapi.com/api/episode/35",
                    "https://rickandmortyapi.com/api/episode/36",
                    "https://rickandmortyapi.com/api/episode/38",
                    "https://rickandmortyapi.com/api/episode/39",
                    "https://rickandmortyapi.com/api/episode/40",
                    "https://rickandmortyapi.com/api/episode/41",
                    "https://rickandmortyapi.com/api/episode/42",
                    "https://rickandmortyapi.com/api/episode/43",
                    "https://rickandmortyapi.com/api/episode/44",
                    "https://rickandmortyapi.com/api/episode/45",
                    "https://rickandmortyapi.com/api/episode/46",
                    "https://rickandmortyapi.com/api/episode/47",
                    "https://rickandmortyapi.com/api/episode/48",
                    "https://rickandmortyapi.com/api/episode/49",
                    "https://rickandmortyapi.com/api/episode/50",
                    "https://rickandmortyapi.com/api/episode/51"
                ],
                "url": "https://rickandmortyapi.com/api/character/5",
                "created": "2017-11-04T19:26:56.301Z"
            },
            {
                "id": 6,
                "name": "Abadango Cluster Princess",
                "status": "Alive",
                "species": "Alien",
                "type": "",
                "gender": "Female",
                "origin": {
                    "name": "Abadango",
                    "url": "https://rickandmortyapi.com/api/location/2"
                },
                "location": {
                    "name": "Abadango",
                    "url": "https://rickandmortyapi.com/api/location/2"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/27"
                ],
                "url": "https://rickandmortyapi.com/api/character/6",
                "created": "2017-11-04T19:50:28.250Z"
            },
            {
                "id": 7,
                "name": "Abradolf Lincler",
                "status": "unknown",
                "species": "Human",
                "type": "Genetic experiment",
                "gender": "Male",
                "origin": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "location": {
                    "name": "Testicle Monster Dimension",
                    "url": "https://rickandmortyapi.com/api/location/21"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/10",
                    "https://rickandmortyapi.com/api/episode/11"
                ],
                "url": "https://rickandmortyapi.com/api/character/7",
                "created": "2017-11-04T19:59:20.523Z"
            },
            {
                "id": 8,
                "name": "Adjudicator Rick",
                "status": "Dead",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/28"
                ],
                "url": "https://rickandmortyapi.com/api/character/8",
                "created": "2017-11-04T20:03:34.737Z"
            },
            {
                "id": 9,
                "name": "Agency Director",
                "status": "Dead",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/24"
                ],
                "url": "https://rickandmortyapi.com/api/character/9",
                "created": "2017-11-04T20:06:54.976Z"
            },
            {
                "id": 10,
                "name": "Alan Rails",
                "status": "Dead",
                "species": "Human",
                "type": "Superhuman (Ghost trains summoner)",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Worldender's lair",
                    "url": "https://rickandmortyapi.com/api/location/4"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/25"
                ],
                "url": "https://rickandmortyapi.com/api/character/10",
                "created": "2017-11-04T20:19:09.017Z"
            },
            {
                "id": 11,
                "name": "Albert Einstein",
                "status": "Dead",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (C-137)",
                    "url": "https://rickandmortyapi.com/api/location/1"
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/12"
                ],
                "url": "https://rickandmortyapi.com/api/character/11",
                "created": "2017-11-04T20:20:20.965Z"
            },
            {
                "id": 12,
                "name": "Alexander",
                "status": "Dead",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (C-137)",
                    "url": "https://rickandmortyapi.com/api/location/1"
                },
                "location": {
                    "name": "Anatomy Park",
                    "url": "https://rickandmortyapi.com/api/location/5"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/3"
                ],
                "url": "https://rickandmortyapi.com/api/character/12",
                "created": "2017-11-04T20:32:33.144Z"
            },
            {
                "id": 13,
                "name": "Alien Googah",
                "status": "unknown",
                "species": "Alien",
                "type": "",
                "gender": "unknown",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/31"
                ],
                "url": "https://rickandmortyapi.com/api/character/13",
                "created": "2017-11-04T20:33:30.779Z"
            },
            {
                "id": 14,
                "name": "Alien Morty",
                "status": "unknown",
                "species": "Alien",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/10"
                ],
                "url": "https://rickandmortyapi.com/api/character/14",
                "created": "2017-11-04T20:51:31.373Z"
            },
            {
                "id": 15,
                "name": "Alien Rick",
                "status": "unknown",
                "species": "Alien",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/10"
                ],
                "url": "https://rickandmortyapi.com/api/character/15",
                "created": "2017-11-04T20:56:13.215Z"
            },
            {
                "id": 16,
                "name": "Amish Cyborg",
                "status": "Dead",
                "species": "Alien",
                "type": "Parasite",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/15"
                ],
                "url": "https://rickandmortyapi.com/api/character/16",
                "created": "2017-11-04T21:12:45.235Z"
            },
            {
                "id": 17,
                "name": "Annie",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Female",
                "origin": {
                    "name": "Earth (C-137)",
                    "url": "https://rickandmortyapi.com/api/location/1"
                },
                "location": {
                    "name": "Anatomy Park",
                    "url": "https://rickandmortyapi.com/api/location/5"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/3"
                ],
                "url": "https://rickandmortyapi.com/api/character/17",
                "created": "2017-11-04T22:21:24.481Z"
            },
            {
                "id": 18,
                "name": "Antenna Morty",
                "status": "Alive",
                "species": "Human",
                "type": "Human with antennae",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/10",
                    "https://rickandmortyapi.com/api/episode/28"
                ],
                "url": "https://rickandmortyapi.com/api/character/18",
                "created": "2017-11-04T22:25:29.008Z"
            },
            {
                "id": 19,
                "name": "Antenna Rick",
                "status": "unknown",
                "species": "Human",
                "type": "Human with antennae",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "unknown",
                    "url": ""
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/10"
                ],
                "url": "https://rickandmortyapi.com/api/character/19",
                "created": "2017-11-04T22:28:13.756Z"
            },
            {
                "id": 20,
                "name": "Ants in my Eyes Johnson",
                "status": "unknown",
                "species": "Human",
                "type": "Human with ants in his eyes",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Interdimensional Cable",
                    "url": "https://rickandmortyapi.com/api/location/6"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/8"
                ],
                "url": "https://rickandmortyapi.com/api/character/20",
                "created": "2017-11-04T22:34:53.659Z"
            }
        ]
    };

    useEffect(()=>{
        Promise.resolve(getCharacters({page:42})).then(response =>{
            setRickyMontyCharacterData(response.data.results);
            console.log(response.data.info);
        }).catch((error) => {
            console.error('Error ',error);
        });
    },[]);

    /*
    
        handle pages



    */

    return profileData.length > 0 ? (
        <>
            <Navbar/>
                
                <div className="bg-white py-24 sm:py-15">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8" style={{background:""}}>
                        <div className="mx-auto max-w-7xl lg:text-center">
                            <input
                                type="text"
                                name="Search"
                                id="Search"
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                maxLength={80}
                                placeholder="Search"
                            />

                            <div className="bg-white">
                                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                        {rickyMontyCharacterData?.map((result) => (
                                            <>
                                            <div className="relative bg-white py-6 px-6 rounded-3xl w-70 my-4 shadow-xl">
                                                <div className="px-6 rounded-3xl p-5 bg-[#011D2F]">
                                                    <img
                                                        className="inline-block h-30 w-30 rounded-full ring-2 ring-white"
                                                        src={result.image}
                                                        alt={result.name}
                                                    />
                                                </div>

                                                <div>
                                                    <h3 className="mt-1 text-sm font-bold text-gray-400 text-center">{result.name}</h3>
                                                </div>

                                                <hr className="mt-2"/>

                                                <div className="p-2">
                                                    <div>
                                                        <h3 className="mt-1 text-sm text-gray-900 text-start">
                                                            {
                                                            result.status === "Alive" ? 
                                                            <span className="text-xs font-bold text-[#28A745]">STATUS</span>
                                                            :
                                                            result.status === "Dead" ?
                                                            <span className="text-xs font-bold text-[#E10000]">STATUS</span>
                                                            :
                                                            <span className="text-xs font-bold text-[#0F69FF]">STATUS</span>
                                                            }
                                                            :{result.status}
                                                        </h3>
                                                    </div>

                                                    <div>
                                                        <h3 className="mt-1 text-sm text-gray-700 text-start">
                                                            <span className="text-xs font-bold">TYPE</span>:{result.type ? result.type : "Not provided"}
                                                        </h3>
                                                    </div>

                                                    <div>
                                                    <a key={result.id} href={result.url} className="group">
                                                        <h3 className="mt-1 text-sm text-gray-700 text-start">
                                                            <span className="text-xs font-bold">LOCATION</span>:{result.location.name}
                                                        </h3>
                                                    </a>
                                                    </div>

                                                    <div>
                                                        <h3 className="mt-1 text-sm text-gray-700 text-start">
                                                            <span className="text-xs font-bold">ORIGIN</span>:{result.origin.name}
                                                        </h3>
                                                    </div> 
                                                </div>

                                            </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            <Footer/>
        </>
    ):<></>;
};

export default Home;