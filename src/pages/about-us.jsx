// @flow

import * as React from 'react';
import Img from 'gatsby-image';
import { withI18n, Trans } from '@lingui/react';

import { Title } from '../layouts/utils';

const Header = ({ i18n }: Props) => (
  <header className="header text-white bg-ledgy">
    <Title
      title={i18n.t`About us`}
      description={i18n.t`Meet the team behind Ledgy that went out to build a genuinely great product. Learn more about the people who trust in us.`}
    />

    <div className="container text-center">

      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1><Trans>About us</Trans></h1>
        </div>
      </div>

    </div>
  </header>
);

type ProfileProps = {
  name: string,
  func: string,
  description: string,
  img: Object,
  fade: string,
}
type FounderProps = {
  ...$Exact<ProfileProps>,
  twitterlink: string,
  linkedinlink: string,
  mail: string
}

const Founder =
({ name, func, description, img, twitterlink, linkedinlink, mail }: FounderProps) => (
  <div className="col-12 col-md-6 col-lg-4 team-1">
    {img && <Img {...img} alt={name} />}
    <h6>{name}</h6>
    <small>{func}</small>
    <p>{description}</p>
    <div className="social social-boxed social-rounded social-gray">
      <a className="social-mail" href={`mailto:${mail}`}><i className="fa fa-envelope" /></a>
      <a className="social-twitter" href={twitterlink}><i className="fa fa-twitter" /></a>
      <a className="social-linkedin" href={linkedinlink}><i className="fa fa-linkedin" /></a>
    </div>
  </div>
);

const Investor = ({ name, func, description, img }: ProfileProps) => (
  <div className="col-12 col-md-4 team-2">
    {img && <Img {...img} alt={name} />}
    <h6>{name}</h6>
    <small>{func}</small>
    <p>{description}</p>
  </div>
);

const IndexPage = (props: Props) => {
  const { data, i18n } = props;
  return (
    <div>
      <Header {...props} />
      <main className="main-content">
        <section className="section py-150 bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 pl-50 pr-80">
                <h2><Trans>Our mission</Trans></h2>
                <p className="lead">
                  <Trans>
                    We want to empower entrepreneurs. They
                    should be able to focus on their business,
                    not on bureaucratic paperwork. That’s why we want to
                    establish a new, state-of-the-art tool to manage,
                    exchange, and trade securities in private companies. Our
                    goal is to make shares management a breeze for both
                    companies and shareholders.
                  </Trans>
                </p>
              </div>
              <div className="col-12 col-lg-6 p-50 align-self-center" data-aos="fade-left">
                <Img {...data.mission} className="shadow-3" alt={i18n.t`Space elevator`} />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section-header">
              <h2><Trans>Team</Trans></h2>
            </header>


            <div className="row gap-y">
              <Founder
                name="Timo Horstschaefer"
                func="Physics MSc ETH"
                description={i18n.t`Computer vision background, badminton guy, wants to build a space elevator`}
                twitterlink="https://twitter.com/thrstschfr"
                linkedinlink="https://www.linkedin.com/in/timohorstschaefer/"
                mail="timo@ledgy.com"
                img={data.timo}
              />
              <Founder
                name="Ben Brandt"
                func="Physics MSc ETH"
                description={i18n.t`Battery science background, martial arts, fascinated by electric cars`}
                twitterlink="https://twitter.com/bebinoy"
                linkedinlink="https://www.linkedin.com/in/ben-elias-brandt-680a95110/"
                mail="ben@ledgy.com"
                img={data.ben}
              />
              <Founder
                name="Yoko Spirig"
                func="Physics MSc ETH"
                description={i18n.t`Medical physics background, loves running, wondering about brain-machine interfaces`}
                twitterlink="https://twitter.com/YokoSpirig"
                linkedinlink="https://www.linkedin.com/in/yokospirig/"
                mail="yoko@ledgy.com"
                img={data.yoko}
              />
            </div>

          </div>
        </section>

        <section className="section bg-ledgy text-white">
          <div className="container">
            <header className="section-header mb-0  px-md-8">
              <h2><Trans>We’re hiring!</Trans></h2>
              <p>
                <Trans>
                  Do you feel working for Google is boring because they don’t grow by 100×
                  during the next four years? Building a product is fantastic, but how about
                  creating a whole team around it?
                  Are you a web developer that eats bugs for breakfast?
                  Fascinated by cutting-edge technology like React, blockchain or space elevators?
                  <br /><br />
                  Then let’s have coffee together!
                </Trans>
              </p>
            </header>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section-header">
              <h2><Trans>Board and Advisors</Trans></h2>
            </header>

            <div className="row gap-y">
              <Investor
                name="Myke Näf"
                func="Board Member"
                description={i18n.t`Entrepreneur, Business Angel, Founder of Doodle.com`}
                img={data.myke}
              />
              <Investor
                name="Dr. Paul E. Sevinç"
                func="Board Member"
                description={i18n.t`Entrepreneur, Technologist, Founder of Doodle.com`}
                img={data.paul}
              />
              <Investor
                name="Luzius Meisser"
                func="Advisor"
                description={i18n.t`Founder of Meisser Economics, Bitcoin Association Switzerland, and Wuala`}
                img={data.luzius}
              />
            </div>

            <div className="row gap-y justify-content-center">
              <Investor
                name="Adrian Bührer"
                func="Advisor"
                description={i18n.t`Investor & Consultant (Farmy.ch, Flatfox.ch), Founder of Students.ch`}
                img={data.adrian}
              />
              <Investor
                name="Elena Walder-Schiavone"
                func="Advisor"
                description={i18n.t`M&A and Private Equity Lawyer with a focus on start-up legal advise, Smartuplaw.ch`}
                img={data.elena}
              />
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default withI18n()(IndexPage);

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query AboutQuery {
    mission: imageSharp(id: { regex: "/mission/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    ben: imageSharp(id: { regex: "/ben.jpg/" }) {
      resolutions(width: 255, height: 255) {
        ...GatsbyImageSharpResolutions
      }
    }
    yoko: imageSharp(id: { regex: "/yoko.jpg/" }) {
      resolutions(width: 255, height: 255) {
        ...GatsbyImageSharpResolutions
      }
    }
    timo: imageSharp(id: { regex: "/timo.jpg/" }) {
      resolutions(width: 255, height: 255) {
        ...GatsbyImageSharpResolutions
      }
    }


    myke: imageSharp(id: { regex: "/myke.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    paul: imageSharp(id: { regex: "/paul.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    luzius: imageSharp(id: { regex: "/luzius.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    adrian: imageSharp(id: { regex: "/adrian.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    elena: imageSharp(id: { regex: "/elena.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
