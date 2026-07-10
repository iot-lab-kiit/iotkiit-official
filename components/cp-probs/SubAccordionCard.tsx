import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import style from '../../styles/SubAccordianCard.module.css';

const sanitizeHtml = (html: string) => {
  if (typeof window !== 'undefined') {
    const DOMPurify = require('isomorphic-dompurify');
    return DOMPurify.sanitize(html);
  }
  return html;
};

interface SubAccordionCardProps {
  id: number;
  status: string;
  question: string;
  solution: null | any;
  category: string;
  sort: null | any;
  level: string;
}

const SubAccordionCard = (problem: SubAccordionCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={style.question}>
      <header>
        <h4
          onClick={() => setExpanded(!expanded)}
          className={style.questionTitle}
        >
          <b>Difficulty: {problem.level}</b>
        </h4>
        <button className={style.btn} onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && (
        <>
          <br />
          <h1>
            <b>Question</b>
          </h1>
          <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(problem.question) }}></div>
        </>
      )}
    </article>
  );
};

export default SubAccordionCard;
