import '../../assets/styles/css/pages/team.css';
import Title from '../parts/Title';
import Search from '../parts/Search';
import { useState } from 'react';
import NoResult from '../parts/NoResult';

function Team() {
  const limitDescription = 355;

  let people = [
    {
      image: 'https://ucomp.net/wp-content/uploads/2017/11/sobolevsky_portrait-2.jpg',
      username: 'Prof. Stanislav Sobolevsky',
      titles: [ 'Lab Director, PhD, DrSc', 'Associate Professor Of Practice at NYU', 'Research Affiliate at the MIT Senseable City Lab' ],
      description: 'Dr. Sobolevsky holds PhD (1999) and Doctor of Science habilitation degree (2009) in Mathematics. Dr. Sobolevsky teaches data science, machine learning and networks analysis and studies human behavior in urban context through its digital traces: spatio-temporal big data created by various aspects of human activity – social media, cell phone records, vehicle/vessel GPS traces, public service requests, credit card transactions and other. Authored over a 100 of research publications in top-tier journals and conferences, including Nature’s Scientific Reports, PNAS, Physical Review E, PLOS ONE and others. His applied projects on transportation modeling, trajectory mining, anomaly, pattern and vulnerability detection in temporal urban networks are supported by industrial partners and foundations including US Department Of Energy, US Department Of Transportation, National Geospatial Intelligence Agency, Lockheed Martin, Future Cities Catapult, Arcadis. His prior research at MIT was supported by Ericsson, BBVA, Orange, British Telecom, Liberty Mutual and other industrial partners.'
    },
    {
      image: 'https://ucomp.net/wp-content/uploads/2019/10/Chaopgui2.png',
      username: 'Prof. Chaogui Kang',
      titles: [ 'Visiting scholar' , 'Associate Professor At Wuhan University' ],
      description: ''
    }, 
    {
      image: 'https://ucomp.net/wp-content/uploads/2017/12/picture-for-web.png',
      username: 'Enwei Zhou',
      titles: [ 'Visiting scholar', 'PhD student at Singhua University, China' ],
      description: ''
    }, 
    {
      image: 'https://ucomp.net/wp-content/uploads/2017/12/maarten31.jpg',
      username: 'Maarten Vanhoof',
      titles: [ 'Visiting scholar', 'PhD student at Newcastle University, UK', 'Associated researcher at Orange Labs, France' ],
      description: ''
    }, 
    {
      image: 'https://ucomp.net/wp-content/uploads/2017/12/philipp2.png',
      username: 'Philipp Kats',
      titles: [ 'Part-time researcher', 'Data scientist at StreetEasy' ],
      description: ''
    }, 
    {
      image: 'https://ucomp.net/wp-content/uploads/2019/10/Shivam.png',
      username: 'Shivam Kumar Pathak',
      titles: [ 'Graduate research assistant' ],
      description: ''
    },
    {
      image: 'https://ucomp.net/wp-content/uploads/2019/10/Chinmay.jpg',
      username: 'Chinmay Singhal',
      titles: [ 'Graduate research assistant' ],
      description: ''
    },
  ]

  // Flag to display full description
  people = people.map(member => {
    member.hiddenText = member.description?.length > limitDescription
    return member
  })

  const [members, setMembers] = useState(people)

  function toggleDescription(index) {
    const _members = members.map((member, i) => {
      if (i === index) {
        member.hiddenText = !member.hiddenText
      }

      return member
    })

    setMembers(_members)
  }

  const [searchValue, setSearchValue] = useState('')

  function membersFinder (searchString) {
    setSearchValue(searchString)
  }

    return (
      <main>
        <Title text="ucomp lab team" />
        <br />
        <Search 
          onClickHandler={membersFinder}
          onChangeHandler={membersFinder}
          placeholder="Search by team" />

        <article className='team'>
          {
            members.map ((member, index) => {
              return member.username.toLowerCase().includes(searchValue.toLowerCase()) ? 
                <section className='team-member' key={index}>
                    <div className='team-photo'>
                      <img src={member.image} alt='person' />
                    </div>

                    <div className='team-info'>
                      <h2 className='name'>{member.username}</h2>

                      <div className='team-title'> 
                        {
                        member.titles.map((title, i) => 
                        <span key={i}>{title}</span>)
                        }
                      </div>

                      <span className='team-description'>
                        {
                          member.hiddenText ?
                            <>
                              {`${member.description.slice(0, limitDescription)}... `}
                              <button onClick={() => toggleDescription(index)} className='more-info'>more</button>
                            </>
                            :
                            <>
                              {member.description}
                              {
                                member.description?.length < limitDescription ? 
                                '' 
                                : 
                                <button onClick={() => toggleDescription(index)} className='more-info'>less</button>
                              }
                            </>
                        }
                      </span>
                    </div>
                </section>
                :
                ''
            })
          }
        </article>

        {
        !members.some((member) => member.username.toLowerCase().includes(searchValue)) ?
          <NoResult text="Team members not found" />
          :
          ''
        }
      </main>
    );
  }
  
  export default Team;