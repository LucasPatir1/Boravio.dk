import React from 'react';
import styled from "styled-components";
import Kirke from "../images/heroImage.png";
//MUI-components
import Button from '@mui/material/Button';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { IconButton } from '@mui/material';
import { red } from '@mui/material/colors';

function HeroSection() {
    return (
        <div className=" p-0 flex flex-col w-full xl:flex-row md:p-16 mb-4">
        <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">
          <h3 className="text-2xl pt-10 font-semibold text-regular-green">
          Hvorfor købe når du kan leje?
          </h3>
          <h2   className="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black font-sans text-dark-text py-0">
          Hvorfor købe  <br />
            <span className="text-regular-green"> når du kan leje?</span>
          </h2>
          <p  className="text-xl px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-48">
          Med Boravio har du et bredt sortiment af produkter som du kan leje for en fast pris. Et abonnement hos os giver dig adgang til alt fra brætspil, boremaskiner, rulleskøjter og meget mere
          </p>
          <div className="flex justify-center text-center items-center py-0 xl:justify-start">
            <a
              href="https://tailwindcss.com/docs/responsive-design"
              className="font-semibold bg-dark-green hover:bg-light-green px-4 py-2 text-biege-text rounded"
            >
              Lær mere om os &rarr;
            </a>
          </div>
        </div>
        <div  className="w-full xl:w-5/10">
          <img src={Kirke} className="p-16" alt="church"/>
        </div>
      </div>
    )
}

export default HeroSection