import React from 'react' ;

function Project ({project}) {
  const {
    name,
    url,
    sourceUrl,
    sourceHost,
    img,
    technologies
  } = project;

  return (
    <div className='project' >
      <div className='project-header'>
        <div className='title'>{name}</div>
        <div className='show-more'>
          <icon className='fa fa-code' />
          <Tooltip technologies={technologies}/>
        </div>
      </div>
      <div
        className='project-content'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/${img})`}}
      >
        <div className='overlay'>
          <a href={url} target='_blank' title='View Project'>
            <icon className='fa fa-eye' />
          </a>
          <div className='divider' />
          <a href={sourceUrl} target='_blank' title='View Source'>
            <icon className={`fa fa-${sourceHost}`} />
          </a>
        </div>
      </div>
    </div>
  );
}

function Tooltip ({technologies}) {
  return (
    <div className='tooltip'>
      <div className='tooltip-title'>Built with</div>
      <ul>
        {
          technologies.map(item => <li key={item}>{item}</li>)
        }
      </ul>
    </div>
  );
}

export default Project;
