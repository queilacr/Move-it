//para fazer:
//organizar o ReadMe do GitHub
//preparar a versão mobile
//Busca Next PWA para desenvolver o mobile
//Criar Temas --> Dark & Ligth
//Fazer construção de tela de login
//Construir uma sidebar
//Preparar um ranking
//Possibilidade de compartilhamento



import Head from 'next/head';

import {GetServerSideProps} from 'next';

import styles from '../styles/Pages/Home.module.css';

import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';


interface HomeProps {
  level: number;
  currrentExperience: number;
  challengeCompleted: number;
}


export default function Home(props: HomeProps) {
  return (

    <ChallengesProvider
      level={props.level}
      currentExperience={props.currrentExperience}
      challengesCompleted={props.challengeCompleted}
      >

      <div className={styles.container}>

        <Head>
          <title>Início | Move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile/>
              <CompletedChallenges/>
              <Countdown/>
            </div>
            <div>
              <ChallengeBox/>

            </div>
          </section>
        </CountdownProvider>

      </div>
    </ChallengesProvider>
   
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;
  return{
    props:{
      level: Number(level), 
      currentExperience: Number(currentExperience),
      challengesCompleted: Number (challengesCompleted) 
    }
  }
}
