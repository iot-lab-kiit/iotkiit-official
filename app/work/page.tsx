'use client';
import ProjectCard from '../../components/workPage/ProjectCard';
import WorkHeader from '../../components/workPage/WorkHeader';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Pagination, Navigation, Scrollbar, A11y, Autoplay } from 'swiper';
import Filler from '../../components/workPage/Filler';
import SectionHeader from '../../components/workPage/SectionHeader';
import { useEffect, use } from 'react';
import { Calistoga } from 'next/font/google';
import { ProjectCardProps } from '@/types';
let Parser = require('rss-parser');
let parser = new Parser();
// new SwiperCore([Navigation, Pagination, Scrollbar, Ally, Autoplay]);
// interface MySwiperProps {}

export interface ProjectsDetails {
  id: number;
  status: string;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  name: string;
  type: string;
  link: string;
  linktext: string;
  imgUrl: string;
  aadr: string;
  description: string;
}

const Works = () => {
  const props: any = use(getWork());

  return (
    <>
      <Head>
        <title>Work</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />

        <meta
          name='description'
          content='IoT Lab, KIIT is a team of dedicated students working under a team of competent and
encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum
exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research
and projects with more end-user interactions.'
        ></meta>
        <meta property='og:type' content='website'></meta>
        <meta property='og:url' content='https://iotkiit.in'></meta>
        <meta property='og:title' content='IoT Lab KiiT'></meta>
        <meta
          property='og:description'
          content='IoT Lab, KIIT is a team of dedicated students working under a team of competent and
encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum
exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research
and projects with more end-user interactions.'
        ></meta>
        <meta property='og:image' content='/images/logo_small.webp'></meta>

        <meta property='twitter:card' content='summary_large_image'></meta>
        <meta property='twitter:url' content='https://iotkiit.in'></meta>
        <meta property='twitter:title' content='IoT Lab KiiT'></meta>
        <meta
          property='twitter:description'
          content='IoT Lab, KIIT is a team of dedicated students working under a team of competent and
encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum
exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research
and projects with more end-user interactions.'
        ></meta>
        <meta property='twitter:image' content='/images/logo_small.webp'></meta>
      </Head>
      <main>
        <WorkHeader
          numProjects={props.props.numProjects}
          numBlogs={props.props.numBlogs}
        />
        <SectionHeader />
        <Filler />
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              width: 768,
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              width: 1200,
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {props.props.projects.map((project: ProjectCardProps) => (
            <SwiperSlide key={`slide-id-${project.id}`}>
              <ProjectCard key={`project-id-${project.id}`} project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <Blog main={blogs.main} top={blogs.top} bottom={blogs.bottom} /> */}
      </main>
    </>
  );
};

async function getWork() {
  try {
    const SERVER = 'https://service.iotkiit.in';

    //Getting Projects from Server
    const response = await fetch(`${SERVER}/items/projects`);
    const projectsRes = await response.json();
    const projectsData: ProjectsDetails[] = projectsRes.data;
    projectsData.map(
      (v: any, i: any, arr: any[]) =>
        (arr[i].imgUrl = SERVER + '/assets/' + v.imgUrl),
    );

    //Getting Feed from Medium
    // let feed = await parser.parseURL("https://medium.com/feed/iot-lab-kiit");
    // const articles_items = feed.items;

    // articles_items.forEach((v:any, i:any, arr:any[]) => {
    //   //Converting date format
    //   arr[i].date = v.pubDate.substr(0, 17);

    //   //Assigning author to each post
    //   arr[i].author = v.creator;

    //   //Extracting thumbnail from HTML
    //   arr[i].authorPic = "/images/logo_small.webp";

    //   //Extract the first <p> tag
    //   arr[i].desc =
    //     v["content:encoded"].match("<p>([^<].+?)</p>")[1].substr(0, 150) + "...";
    // });

    // //Taking the first 3 articles
    // const [main, top, bottom] = articles_items;

    return {
      props: {
        projects: projectsData,
        // blogs: {
        //   main,
        //   top,
        //   bottom,
        // },
        numProjects: projectsData?.length,
        // numBlogs: articles_items?.length,
      },
      revalidate: 600,
    };
  } catch {
    console.log('Error fetching data');
  }
}

export default Works;
