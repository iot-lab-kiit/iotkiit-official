"use client";
import ProjectCard from "../../components/workPage/ProjectCard";
import WorkHeader from "../../components/workPage/WorkHeader";
import Head from "next/head";
import { Blog } from "../../components/workPage/BlogCard";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Filler from "../../components/workPage/Filler";
import SectionHeader from "../../components/workPage/SectionHeader";

let Parser = require("rss-parser");
let parser = new Parser();
// SwiperCore.use([Navigation, Pagination, Scrollbar, Ally, Autoplay]);
interface ProjectData {
  projects: [ProjectsDetails];
  numBlogs: number;
}
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
const Works = async () => {
  const propsData: ProjectData = await getData();
  return (
    <>
      <Head>
        <title>Work</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          name="description"
          content="IoT Lab, KIIT is a team of dedicated students working under a team of competent and
encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum
exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research
and projects with more end-user interactions."
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://iotkiit.in"></meta>
        <meta property="og:title" content="IoT Lab KiiT"></meta>
        <meta
          property="og:description"
          content="IoT Lab, KIIT is a team of dedicated students working under a team of competent and
encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum
exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research
and projects with more end-user interactions."
        ></meta>
        <meta property="og:image" content="/images/logo_small.webp"></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://iotkiit.in"></meta>
        <meta property="twitter:title" content="IoT Lab KiiT"></meta>
        <meta
          property="twitter:description"
          content="IoT Lab, KIIT is a team of dedicated students working under a team of competent and
encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum
exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research
and projects with more end-user interactions."
        ></meta>
        <meta property="twitter:image" content="/images/logo_small.webp"></meta>
      </Head>
      <main>
        <WorkHeader
          numProjects={propsData.projects.length}
          numBlogs={propsData.numBlogs}
        />
        <SectionHeader />
        <Filler />
        {/* error */}
        <Swiper
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          modules={[Pagination]}

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
          {propsData.projects.map((project: any) => (
            <SwiperSlide key={`slide-id-${project.id}`}>
              <ProjectCard
                key={`project-id-${project.id}`}
                projects={project}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/*<Blog main={blogs.main} top={blogs.top} bottom={blogs.bottom} /> */}
      </main>
    </>
  );
};
async function getData() {
  const SERVER = "https://api.iotkiit.in";

  //Getting Projects from Server
  const response = await fetch(`${SERVER}/items/projects`, {
    next: { revalidate: 600 },
  });
  const projectsRes = await response.json();
  const projectsData = projectsRes.data;
  projectsData.forEach(
    (v: any, i: any, arr: any[]) =>
      (arr[i].imgUrl = SERVER + "/assets/" + v.imgUrl)
  );

  // Getting Feed from Medium
  let res = await parser.parseURL("https://medium.com/feed/iot-lab-kiit");
  let articleItems = res.items;
  // let feed = await fetch("https://medium.com/feed/iot-lab-kiit");
  // const articles_items = feed.items;
  // console.log(feed);

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

  //Taking the first 3 articles
  // const [main, top, bottom] = articles_items;

  return {
    // props: {
    //   projects: projectsData,
    //   blogs: {
    //     main,
    //     top,
    //     bottom,
    //   },
    // numProjects: projectsData?.length,
    // numBlogs: articles_items?.length,
    // },
    // revalidate: 600,
    projects: projectsData,
    numBlogs: articleItems?.length,
  };
}

export default Works;
