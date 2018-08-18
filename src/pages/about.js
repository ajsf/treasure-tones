import React from 'react'
import Layout from '../components/layout'
import TextSubheading from '../components/TextSubheading'

const AboutPage = () => (
  <Layout>
    <div
      style={{
        maxWidth: 960,
        margin: '0 auto',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>About Us</h1>
      <p>
        Although based in Honolulu, Hawaii, The Treasure Tones’ musical roots
        are firmly imbedded in the late 1960s Rocksteady sounds of Jamaica.
        While many proclaim that the ‘Glory Days” of Jamaican music were its
        Roots period of the mid to late 70’s, The Treasure Tones prefer to
        hearken back to a decade prior; when the “one drop” beat first took
        Jamaica by storm, and when the riddims that are still being revived in
        the Dancehall today first made their initial impact.
      </p>
      <p>
        The Treasure Tones’ appeal is that they approach this music with
        required vim and vigor, coupled with the utmost respect; as visitors to
        a culture not their own, but one that is thoroughly revered by each
        member of the group. Their music is approachable, soulful, and
        danceable, and is sure to entertain any audience whether or not they are
        familiar with Rocksteady and Reggae.
      </p>
      <p>
        The Treasure Tones cover a variety of well-known Jamaican veterans such
        as Delroy Wilson, Phyllis Dillon and Desmond Dekker. Yet their fondness
        for uncovering long forgotten gems from more obscure artists such as
        Albert Tomlinson and The Tonettes is the band’s forte.
      </p>
      <p>
        To date, The Treasure Tones have opened up for LA’s own Rocksteady
        revivalists The Aggrolites, headlined Honolulu’s popular monthly retro
        night, Reggae Revive, and continue to play regularly throughout the
        Island of O’ahu.
      </p>
      <h3 style={{ textAlign: 'center' }}>The Treasure Tones are:</h3>

      <TextSubheading text="Sistah Roz (Lead Vocals)" />
      <p>
        Sistah Roz was born and raised on O’ahu, and grew up singing all sorts
        of music alongside her talented ohana (family). Roz fronted Honolulu’s
        retro Ska band The Sound Revolutionaries, and has toured Europe, Africa
        and The US Mainland providing backing vocals for Nigerian artist Iyeoka.
        Sistah Roz counts Doreen Shaffer and Marcia Griffiths as some of her
        favorite singers.
      </p>
      <TextSubheading text="Shereen Patrice (Backing Vocals and Tambourine)" />
      <p>
        {' '}
        Like her sister Roz, Shereen Patrice grew up on O’ahu and gained early
        experience singing and playing a multitude of instruments alongside her
        family. Shereen is versed in various percussion instruments such as
        maracas, guiro and congas, and has played throughout The Island with her
        father’s Puerto Rican ensemble, Latino’s Escogidos. She’s also been
        involved with Hawaii’s arts and culture scene for many years.
      </p>
      <TextSubheading text="Thomas “Vibez” Mackay (Piano and Organ)" />
      <p>
        Thomas Mackay is a multi-instrumentalist and music instructor who excels
        on keys, drums and vibraphone. Thomas’ passion for traditional Jazz led
        him to the sounds of old-time Jamaican Ska and Rocksteady. While
        residing in Oregon, he played with legendary Jamaican singer and Studio
        One veteran Norma Frazier, and also did stints with California’s
        Synergy. In addition to The Treasure Tones, Thomas leads his own Jazz
        outfit, The Thomas Mackay Project, and also plays vibraphone with Vibra
        Cubana.
      </p>
      <TextSubheading text="Aaron “Dubalator” Friedman (Bass)" />
      <p>
        Aaron Friedman honed his chops in his native California, playing in
        varied groups including I World and Rizzen, and backing Junior Toots
        around the Bay area. Equally adept whether playing Reggae or Funk, Aaron
        regularly tours Europe and The US Mainland with The Quadraphonix. He
        also plays with Honolulu’s popular Pop-Reggae band Jookbox City.
      </p>
      <TextSubheading text="Kona Askari (Guitar)" />
      <p>
        Kona Askari was born in French Polynesia and raised there and in
        California. A self-taught musician, Kona arrived in Hawaii in 1995, and
        his natural skills on guitar led him to play in a plethora of bands such
        as Natural Vibrations, B.E.T and Tempo Valley. In addition to The
        Treasure Tones, Kona is a member of The Mana Ma’oli Collective, and is a
        certified Audio Engineer, producing both Reggae and Hip Hop in his own
        studio.{' '}
      </p>
      <TextSubheading text="Tommy Fox (Drums)" />
      <p>
        Tommy Fox played drums in revered rock and roll bands The Mice and The
        Revelers before spending five years playing percussion alongside former
        Time Unlimited singer Istan Black (Hugo Blackwood). In Ohio, he played
        drums in Umojah Nation and Riddim Fish, and has backed Jamaica’s golden
        voiced Milton Blake. Tommy is an avid collector of Jamaican music, and
        co-hosts Cleveland’s cherished Reggae radio program, “Iturnally Dread
        Meets Rudie’s Hi-Fi,” which has aired weekly on WCSB for nearly two
        decades.
      </p>
    </div>
  </Layout>
)

export default AboutPage
