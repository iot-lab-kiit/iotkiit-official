import React, { useState, useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import SubAccordionCard from './SubAccordionCard';
import style from '../../styles/AccordionCard.module.css';

interface AccordionCardProps {
  category: string;
}
interface QuestionType {
  id: number;
  status: string;
  question: string;
  solution: null | any;
  category: string;
  sort: null | any;
  level: string;
}

const AccordionCard = (props: AccordionCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.iotkiit.in/items/questions?filter[category][_eq]=${props.category}`,
        );
        const data = await response.json();
        setQuestions(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [props.category]);

  return (
    <article className={style.question}>
      <header>
        <h4
          onClick={() => setExpanded(!expanded)}
          className={style.questionTitle}
        >
          <b>{props.category}</b>
        </h4>
        <button className={style.btn} onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && (
        <>
          {questions.map((question, index) => (
            <div key={index}>
              {isLoading ? (
                <div>Still Loading</div>
              ) : (
                <div>
                  <SubAccordionCard {...question} />
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </article>
  );
};

export default AccordionCard;
