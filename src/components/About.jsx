import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <h3>What is this?</h3>
      <p>BeCultured is a repository of my favourite movies that also happen to be a list of some of the finest movies ever made which can help you tackle boredom by suggeting you something to watch that is not a complete waste of time.</p>
      <h3>Why does this exist?</h3>
      <p>I am someone who watches movies whenever I am free. So, I thought of creating a repository of the best movies I have watched to help people be less bored, make faster decisions and more cultured.</p>
      <h3>How does this work?</h3>
      <ol>
        It's pretty simple:
        <div className='about__list'> 
          <li>When you don't know what to watch, you come here.</li>
          <li>From your list of unseen movies, we randomly recommend you a good movie to watch.</li>
          <li>If you have already seen the recommended movie, you skip to get new recommendation.</li>
          <li>But if you haven't seen it, you go and watch it, then come back to mark it seen.</li>
          <li>With every movie you mark as seen, your score increases.</li>
          <li>Once you watch all the movies and your score reaches 100%, you become cultured 🥳</li>
        </div>
      </ol>
    </div>
  )
}

export default About