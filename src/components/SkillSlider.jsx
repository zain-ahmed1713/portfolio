import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import html from "../assets/images/html.png";
import css from "../assets/images/css.jpg";
import js from "../assets/images/js.png";
import sql from "../assets/images/sql.png";
import firebase from "../assets/images/firebase.png";
import git from "../assets/images/git.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";

export const SkillSlider = () => {
  const skills = [
    {
      title: "HTML",
      img: html,
    },

    {
      title: "CSS",
      img: css,
    },

    {
      title: "JavaScript",
      img: js,
    },
    {
      title: "SQL",
      img: sql,
    },
    {
      title: "Firebase",
      img: firebase,
    },
    {
      title: "Git/Github",
      img: git,
    },
    {
      title: "React",
      img: react,
    },
    {
      title: "Tailwind CSS",
      img: tailwind,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {skills.map((skill, index) => (
        <div key={index} className="relative text-center">
          <div className="relative overflow-hidden">
            <img
              src={skill.img}
              alt={skill.title}
              className="w-[184px] h-[138px] transition-transform rounded-2xl hover:scale-110 md:w-[242px] md:h-[181px] lg:w-[500px] lg:h-[400px] lg:ml-1"
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};
