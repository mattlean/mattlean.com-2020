import React from 'react'
import { Badge } from 'eswiss'
import { Link } from 'react-router-dom'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getPostData } from '../../../../common/data/post'

const HelloWorld = () => {
  const { tags, title, published, readtime, subtitle } = getPostData(
    'hello-world'
  )

  return (
    <>
      <BlindFrame nodeType="header" className="cover">
        <h1 className="h-2 sm:h-3">{title}</h1>
        <p className="subtitle txt-8 sm:txt-6 c-grey-1">{subtitle}</p>
        <p className="time c-grey-2">
          {published} &middot; {readtime} min read
        </p>
        <ul className="badge-list">
          {tags.map((t) => (
            <Badge nodeType="li" wide={true} key={t.id}>
              {t.name}
            </Badge>
          ))}
        </ul>
      </BlindFrame>
      <BlindFrame
        threshold={0.1}
        nodeType="section"
        className="content c-grey-1"
      >
        <h2 className="mb-1">Another Few Years, Another Blog...</h2>
        <p>
          I’ve opened many blogs in the past years, and most of the time they
          die out even though my first post is always about how I’m going to
          keep it up forever <i>this time</i>. Well <i>this time</i> I’m not
          giving any guarantees, but hopefully this particular blog will be kept
          up for at least a while… I’ll do my best to update it when I have
          something of value to say and when I have the spare time to write it
          up.
        </p>
        <p className="mb-2">
          Hopefully this blog will be different than the other ones because my
          previous ones usually became soapboxes about pretty meaningless stuff.
          This time around I really hope to help people out through my{' '}
          <Link to="/blog" className="a-grey-1">
            case studies
          </Link>{' '}
          where I talk about the projects I worked on and maybe even some
          tutorials.
        </p>
        <h2 className="mb-1">My Vacation</h2>
        <p>
          So far my post-college life has been kind of my own version of
          vacation. When people imagine a vacation, usually they think of a
          distant getaway involving drinking beers in the sun under a palm tree
          or something like that. For me I’ve been just hanging out with my
          girlfriend in my new official home of northern California, trying to
          get less terrible at Ultra Street Fighter IV, and doing some for-fun
          programming. I’ve truly appreciated not being in the stressful
          environment of university or Team 360 No Scope.
        </p>
        <p className="mb-2">
          In the past 2 months I’ve been leisurely programming{' '}
          <a
            href="https://github.com/mattlean/xuehuacms"
            rel="noreferrer"
            target="_blank"
            className="a-grey-1"
          >
            Xuehua CMS
          </a>{' '}
          which I plan to use to as the backend to power my personal website,
          <Link to="/projects/lean-space" className="a-grey-1">
            Lean Space
          </Link>{' '}
          which is the frontend of my personal website that you’re currently
          looking at right now,{' '}
          <Link to="/projects/lantern" className="a-grey-1">
            Lantern.js
          </Link>{' '}
          which is a lightbox solution I decided to code up as a “working break”
          during the development of Lean Space, and a few other projects I’m
          finishing up for the last contact work I have with{' '}
          <a
            href="https://biosearchtech.com"
            rel="noreferrer"
            target="_blank"
            className="a-grey-1"
          >
            Biosearch Technologies
          </a>
          .
        </p>
        <h2 className="mb-1">What’s Next?</h2>
        <p>
          Now that I’m finally about to finish up my personal website, I’m
          closing my “summer vacation” and taking the first steps of refocusing
          back to real work again by finally sending out some job applications.
          While relaxing is always nice, I sort of miss being in a work
          environment to be honest. Hopefully I’ll find the time to let you all
          know how it goes here on the blog. If the post actually goes up, maybe
          it’ll help someone who is in the same position I’m in right now where
          they’re looking to get their foot into the software industry.
        </p>
      </BlindFrame>
    </>
  )
}

export default HelloWorld
