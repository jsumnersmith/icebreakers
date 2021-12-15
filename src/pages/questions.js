import * as React from "react"
import supabase from "../utils/supabase.js"
import Styled from 'styled-components';
import Layout from '../components/layout';

const Question = Styled.p`
  font-size: 64px;
  font-weight: bold;
  text-align: center;
  line-height: 1.3;
`;

const Questions = ({serverData}) => {
  console.log("Hello", serverData);
  return (
    <Layout>
      <Question>{serverData.question.text}</Question>
    </Layout>
  )
}

export default Questions;

export async function getServerData() { 
  const { data: questions, error } = await supabase
  .from("Questions")
  .select(`*`)
  .not(`used`, `eq`, `true`);

  console.log("I'm inside the matrix.")

  let question = questions[Math.floor(Math.random()*questions.length)];

  if (error) { console.error(error)}
  return {
    props: {
      question,
    },
  }
};
