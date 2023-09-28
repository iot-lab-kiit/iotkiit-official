"use client";
import React, { useEffect, useState } from "react";
import SingleQuestion from "../../components/cp-probs/AccordionCard";
import style from "../../styles/AccordionCard.module.css";

interface QuestionType {
  id: number;
  status: string;
  question: string;
  solution: null | any;
  category: string;
  sort: null | any; 
  level: string;
}

const Cp = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  useEffect(() => {
    setLoading(true);

    // Getting data from Server
    fetch("https://api.iotkiit.in/items/questions?groupBy[]=category")
      .then((res) => res.json())
      .then((res) => {
        setQuestions(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className={style.container}>
        <h1 className={style.pageTitle}>Daily CP questions</h1>
        <section className={style.subContainer}>
          {questions.map((data, index) => (
            <div key={index}>
              {isLoading ? (
                <div>Still Loading</div>
              ) : (
                <div>
                  <SingleQuestion {...data} />
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Cp;
