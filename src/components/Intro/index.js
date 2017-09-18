import React from 'react';
import './intro.css';

function Intro () {
  return (
    <div id='intro' className='Intro'>
      <div className='Intro-header'>
        <span className='huge'>Hello,</span> <br />
        I am <span className='text-bold'>Iosif (Joseph) Psychas.</span>
      </div>
      <p>
        I am a developer, a contributor, a student, a web enthousiast, a gamer, 
        a music lover, a whovian from <span className='text-bold'>Greece </span> 
        seeking to make his passion a living.
      </p>
      <p>
        Being a self-taught developer, and having a totally irrelevant degree in Economics, 
        I am driven by my passion about <span className='text-bold'>writing code</span>,
        <span className='text-bold'> solving problems</span>,
        <span className='text-bold'> helping others</span>,
        <span className='text-bold'> learning </span>new technologies and
        <span className='text-bold'> being competitive</span> to what I do.
      </p>
      <p>
        I ended up falling in love with <span className='text-bold'>JavaScript </span>
        a couple of years ago and as a result I wanted to learn the ins and outs
        of the language. Due to unfortunate circumstances I didn't have the chance
        to get professional experience but I worked hard to balance that by
        <span className='text-bold'> focusing on personal projects</span>, 
        <span className='text-bold'> helping new developers</span>, being
        <span className='text-bold'> up to date with technologies </span>
        and <span className='text-bold'>best-practices</span> through books, 
        mailing lists and following the leaders of the field.
      </p>
      <p>
        My current focus is on <span className='text-bold'>React</span> and its
        ecosystem, including <span className='text-bold'>Redux, </span>
        <span className='text-bold'>Flow </span> and
        <span className='text-bold'> ImmutableJS</span> which I am fluent at. Along
        with that I am working on improving my back-end JavaScript with
        <span className='text-bold'> ExpressJS</span> by going through FreeCodeCamp's
        Full Stack Developer certification.
      </p>
    </div>
  );
}

export default Intro;
