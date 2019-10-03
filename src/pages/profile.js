import React from "react"
import Layout from "../components/layout"
import TopTitle from "../components/TopTitle"

const profile = () => {
  return (
    <Layout title="Profile">
      <TopTitle title="Profile" />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <img
              className="img-fluid img-thumbnail shadow mb-3"
              src="/resources/images/nath_profile.jpg"
              alt=""
            />
            <a
              href="https://twitter.com/nathanielblow?ref_src=twsrc%5Etfw"
              class="twitter-follow-button"
              data-lang="en"
              data-show-count="true"
            >
              Follow @nathanielblow
            </a>
            <br />
            <a
              href="https://twitter.com/intent/tweet?screen_name=nathanielblow&ref_src=twsrc%5Etfw"
              class="twitter-mention-button"
              data-lang="en"
              data-show-count="false"
            >
              Tweet to @nathanielblow
            </a>
          </div>
          <div className="col-sm-6 col-md-8 mb-3">
            <p>
              Nathaniel Bassey was born in Lagos, Nigeria. He is from Ikot Ofon
              Ikono, Uyo local government area in Akwa-Ibom state, South-South
              Nigeria. His father, Mr E Joshua Bassey, was a minister in The
              Apostolic Church Bashua Assembly and from an early age he
              developed a love for both music and the gospel.
              <br />
              He was inspired when He saw Dr Panam Percy Paul, a prominent
              Nigerian gospel music icon in concert over twenty years ago and
              since then, His passion for music has grown and translated into
              various musical experiences.
            </p>
            <p>
              In his early years, he developed a rather uncommon interest for
              jazz music and began listening, imitating and playing to the music
              of Louis Armstrong, Miles Davies, Clifford Brown, Charlie Parker,
              Stan Getz and Kirk Whalum, Phil Driscoll, Hugh Masakela and other
              Jazz luminaries. His zeal for the Jazz form would later stir him
              to seek out bands and groups along the Jazz lines. He then joined
              a top jazz quartet in Lagos, Spectrum 4, where he played alongside
              his childhood friends.
            </p>
            <p>
              About that time Nat, as he is fondly called, was approached by one
              of the most respectable figures in the Nigerian jazz and music
              circle, Elder Steve Rhodes to lead, arguably, the first Jazz
              Orchestra in the country - THE STEVE RHODES ORCHESTRA. He served
              as band leader and lead trumpet player for a period of two years
              and later moved on with his music career. His peculiar and
              particularly soulful trumpet playing style caught the ears of top
              Artistes and composers within and outside the country. Teemac, Ayo
              Bankole Jr, Cobhams Asuquo, Wole Oni, Yinka Davies, Adlan Cruise,
              Funsho Ogundipe, Peter King, Sotiris Papadopoulus, Paul Petersen,
              The French Cultural centre, American International School, are but
              a few individuals and organizations that have sought his musical
              ingenuity.
            </p>
            <p>
              As time passed, Nathaniel began sensing a deep yearning within.
              There was more to his music than he thought. He later took time
              off his numerous mainstream commitments to seek the Lord under the
              Mentorship and guidance of Late
            </p>
            <p>
              Pastor Eskor Mfon, the former Pastor of The Redeemed Christian
              Church Of God, City Of David Parish. This decision attracted
              fierce criticisms from friends, Artistes and colleagues who
              thought it unthinkable abandoning what was becoming a thriving
              mainstream music career to serve exclusively at a local church.
            </p>
            <p>
              As he developed an intimate fellowship with the Holy Spirit, He
              then realized that music was more than an item to fill a space in
              time but was a fundamental tool in the praise and worship of the
              Lord. Soon after, a music ministry was born and for Nathaniel, the
              main thrust was WORSHIP - Music of heaven - one that ministered
              exclusively to the Lord and an avenue through which HE related
              with His people. His trumpet playing coupled with a calm singing
              style has since ushered many in concerts, crusades and churches
              into the presence of the LORD.
            </p>
            <p>
              Nathaniel, a graduate of Politics and International Relations at
              the University of London, also serves as the director of music at
              the RCCG; The King’s Court. He has attended music courses in and
              out of the country including the Middlesex University Summer
              School UK, where he studied popular music and music business. He
              writes, sings and produces his own music and records with diverse
              groups of musicians.
            </p>
            <p>
              Nathaniel's debut album Elohim was recorded and mixed in Cape
              Town, South Africa in the year 2008. It has been described as a
              spiritual and Artistic masterpiece with the hit track “Someone’s
              knocking at the door” a soft-rock tune currently generating so
              much interest locally and internationally.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default profile
